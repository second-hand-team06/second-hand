package com.secondhand.post;

import com.secondhand.fileupload.FileUploadService;
import com.secondhand.post.dto.*;
import com.secondhand.post.entity.*;
import com.secondhand.post.repository.*;
import com.secondhand.region.entity.Region;
import com.secondhand.region.repository.RegionRepository;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    // TODO: 로그인한 유저가 상품을 수정하는지 예외처리 로직 추가

    private final UserRepository userRepository;
    private final PostMetaRepository postMetaRepository;
    private final PostDetailRepository postDetailRepository;
    private final PostPhotoRepository postPhotoRepository;
    private final InterestRepository interestRepository;
    private final RegionRepository regionRepository;
    private final CategoryRepository categoryRepository;
    private final BadgeRepository badgeRepository;
    private final FileUploadService fileUploadService;

    public MainPagePostsDto findMainPagePosts(Pageable pageable, SearchCondition searchCondition) {

        return new MainPagePostsDto(postMetaRepository.findMainPage(pageable, searchCondition));
    }

    @Transactional
    public CreatePostResponseDto createPost(PostSaveDto postSaveDto, LoggedInUser loggedInUser) {

        PostMeta savedPostMeta = savePost(postSaveDto, loggedInUser);

        return new CreatePostResponseDto(savedPostMeta.getId());
    }

    public Page<PostMetaDto> findInterestPosts(Pageable pageable, LoggedInUser loggedInUser) {

        return interestRepository.findMyInterestsPosts(pageable, loggedInUser.getId());
    }

    private PostMeta savePost(PostSaveDto postSaveDto, LoggedInUser loggedInUser) {

        List<String> photos = getPhotosUrl(postSaveDto.getPhotos());
        User seller = userRepository.findById(loggedInUser.getId()).orElseThrow();
        Region region = regionRepository.findById(postSaveDto.getRegionId()).orElseThrow();
        Category category = categoryRepository.findById(postSaveDto.getCategoryId()).orElseThrow();
        Badge badge = badgeRepository.findById(postSaveDto.getBadgeId()).orElseThrow();
        String thumbnail = photos.get(0);

        PostMeta newPostMeta = PostMeta.ofCreated(seller, region, category, badge, postSaveDto, thumbnail);

        PostMeta savedPostMeta = postMetaRepository.save(newPostMeta);

        long savedPostId = savedPostMeta.getId();

        savePhotos(photos, savedPostId);
        savePostDetail(postSaveDto, savedPostId);

        return savedPostMeta;
    }

    @Transactional
    public void editPost(long postId, PostUpdateDto updatePostDto, LoggedInUser loggedInUser) {

        PostMeta postMeta = postMetaRepository.findById(postId).orElseThrow();
        PostDetail postDetail = postDetailRepository.findById(postId).orElseThrow();
        Region region = regionRepository.findById(updatePostDto.getRegionId()).orElseThrow();
        Category category = categoryRepository.findById(updatePostDto.getCategoryId()).orElseThrow();
        List<String> photoUrls = getPhotosUrl(updatePostDto.getPhotos());

        String thumbnail = photoUrls.get(0);

        postMeta.updatePost(updatePostDto, thumbnail, region, category);
        postDetail.updateContent(updatePostDto.getContent());
        postPhotoRepository.deleteAllByPostMetaId(postId);
        savePhotos(photoUrls, postId);
    }

    @Transactional
    public void deletePost(long postId, LoggedInUser loggedInUser) {
        PostMeta postMeta = postMetaRepository.findById(postId).orElseThrow();

        postMeta.deletePost();
    }

    @Transactional
    public void updateBadge(long postId, UpdatePostStateDto postStateDto, LoggedInUser loggedInUser) {
        PostMeta postMeta = postMetaRepository.findById(postId).orElseThrow();
        Badge badge = badgeRepository.findById(postStateDto.getState()).orElseThrow();

        postMeta.updateBadge(badge);
    }

    public BadgesDto findBadges() {

        return new BadgesDto(badgeRepository.findAll());
    }

    private void savePostDetail(PostSaveDto postSaveDto, long createdPostId) {

        PostDetail postDetail = new PostDetail(createdPostId, postSaveDto.getContent());
        postDetailRepository.save(postDetail);
    }

    private void savePhotos(List<String> photos, long savedPostId) {

        for (String photo : photos) {
            postPhotoRepository.save(new PostPhoto(savedPostId, photo));
        }
    }

    private List<String> getPhotosUrl(List<MultipartFile> photosFile) {

        List<String> photos = new ArrayList<>();

        for (MultipartFile photo : photosFile) {
            photos.add(fileUploadService.uploadFile(photo));
        }

        return photos;
    }
}

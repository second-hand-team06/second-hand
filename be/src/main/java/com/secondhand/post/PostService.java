package com.secondhand.post;

import com.secondhand.fileupload.FileUploadService;
import com.secondhand.post.dto.*;
import com.secondhand.post.entity.*;
import com.secondhand.post.repository.badge.BadgeRepository;
import com.secondhand.post.repository.category.CategoryRepository;
import com.secondhand.post.repository.interest.InterestRepository;
import com.secondhand.post.repository.postdetail.PostDetailRepository;
import com.secondhand.post.repository.postmeta.PostMetaRepository;
import com.secondhand.post.repository.postphoto.PostPhotoRepository;
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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

import static com.secondhand.post.validator.PostValidator.validatePostDeleted;
import static com.secondhand.post.validator.PostValidator.validatePostOwnershipMismatch;

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

    @Transactional(readOnly = true)
    public MainPagePostsDto findMainPagePosts(Pageable pageable, SearchCondition searchCondition) {

        return new MainPagePostsDto(postMetaRepository.findMainPage(pageable, searchCondition));
    }

    @Transactional
    public CreatePostResponseDto createPost(PostSaveDto postSaveDto, LoggedInUser loggedInUser) {

        PostMeta savedPostMeta = savePost(postSaveDto, loggedInUser);

        return new CreatePostResponseDto(savedPostMeta.getId());
    }

    @Transactional(readOnly = true)
    public Page<PostMetaDto> findInterestPosts(Pageable pageable, LoggedInUser loggedInUser) {

        return interestRepository.findMyInterestsPosts(pageable, loggedInUser.getId());
    }

    @Transactional
    public PostDetailPageDto findPostDetailPage(long postId, LoggedInUser loggedInUser) {

        postMetaRepository.updatePostMetaViewCount(postId);
        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));
        PostDetail postDetail = postDetailRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글의 상세 내용이 존재하지 않습니다."));
        User user = userRepository.findById(loggedInUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));

        PostDetailPageDto postDetailPage = new PostDetailPageDto(postMeta);

        if (loggedInUser.getId() == user.getId()) {
            postDetailPage.setSeller(true);
        }

        postDetailPage.setContent(postDetail.getContent());
        postDetailPage.setPhotoUrls(postPhotoRepository.findAllPhotoUrlsByPostMetaId(postId));
        postDetailPage.setInterestCount(interestRepository.countInterestByPostMetaId(postId));
        return postDetailPage;
    }


    @Transactional
    public void editPost(long postId, PostUpdateDto updatePostDto, LoggedInUser loggedInUser) {

        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

        validatePostOwnershipMismatch(loggedInUser, postMeta);
        validatePostDeleted(postMeta);

        PostDetail postDetail = postDetailRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글의 상세 내용이 존재하지 않습니다."));
        Region region = regionRepository.findById(updatePostDto.getRegionId())
                .orElseThrow(() -> new IllegalArgumentException("해당 지역이 존재하지 않습니다."));
        Category category = categoryRepository.findById(updatePostDto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 존재하지 않습니다."));

        deleteOriginPhotos(postId);

        List<String> photoUrls = getPhotosUrl(updatePostDto.getPhotos());

        String thumbnail = photoUrls.get(0);

        postMeta.updatePost(updatePostDto, thumbnail, region, category);
        postDetail.updateContent(updatePostDto.getContent());
        postPhotoRepository.deleteAllByPostMetaId(postId);
        savePhotos(photoUrls, postId);
    }

    @Transactional
    public void deletePost(long postId, LoggedInUser loggedInUser) {

        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

        validatePostOwnershipMismatch(loggedInUser, postMeta);

        postMeta.deletePost();
    }

    @Transactional
    public void updateBadge(long postId, UpdatePostStateDto postStateDto, LoggedInUser loggedInUser) {

        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

        validatePostOwnershipMismatch(loggedInUser, postMeta);
        validatePostDeleted(postMeta);

        Badge badge = badgeRepository.findById(postStateDto.getState())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 배지입니다."));

        postMeta.updateBadge(badge);
    }

    @Transactional(readOnly = true)
    public BadgesDto findBadges() {

        return new BadgesDto(badgeRepository.findAll());
    }

    private PostMeta savePost(PostSaveDto postSaveDto, LoggedInUser loggedInUser) {

        List<String> photos = getPhotosUrl(postSaveDto.getPhotos());
        User seller = userRepository.findById(loggedInUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));
        Region region = regionRepository.findById(postSaveDto.getRegionId())
                .orElseThrow(() -> new IllegalArgumentException("해당 지역이 존재하지 않습니다."));
        Category category = categoryRepository.findById(postSaveDto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 존재하지 않습니다."));
        Badge badge = badgeRepository.findById(postSaveDto.getBadgeId())
                .orElseThrow(() -> new IllegalArgumentException("해당 배지가 존재하지 않습니다."));
        String thumbnail = photos.get(0);

        PostMeta newPostMeta = PostMeta.ofCreated(seller, region, category, badge, postSaveDto, thumbnail);

        PostMeta savedPostMeta = postMetaRepository.save(newPostMeta);

        long savedPostId = savedPostMeta.getId();

        savePhotos(photos, savedPostId);
        savePostDetail(postSaveDto, savedPostId);

        return savedPostMeta;
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

    private void deleteOriginPhotos(long postId) {
        postPhotoRepository.findAllPhotoUrlsByPostMetaId(postId).stream()
                .forEach(photoUrl -> fileUploadService.deleteFile(photoUrl));
    }
}

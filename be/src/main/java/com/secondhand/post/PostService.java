package com.secondhand.post;

import com.secondhand.fileupload.FileUploadService;
import com.secondhand.post.dto.MainPagePostsDto;
import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.post.dto.SearchCondition;
import com.secondhand.post.entity.Badge;
import com.secondhand.post.entity.Category;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.repository.BadgeRepository;
import com.secondhand.post.repository.CategoryRepository;
import com.secondhand.post.repository.PostRepository;
import com.secondhand.region.entity.Region;
import com.secondhand.region.repository.RegionRepository;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final RegionRepository regionRepository;
    private final CategoryRepository categoryRepository;
    private final BadgeRepository badgeRepository;
    private final FileUploadService fileUploadService;

    public MainPagePostsDto findMainPagePosts(Pageable pageable, SearchCondition searchCondition) {

        return new MainPagePostsDto(postRepository.findMainPage(pageable, searchCondition));
    }

    public void createPost(PostSaveDto postSaveDto, LoggedInUser loggedInUser) {

        List<String> photos = getPhotosUrl(postSaveDto);

        User seller = userRepository.findById(loggedInUser.getId()).orElseThrow();
        Region region = regionRepository.findById(postSaveDto.getRegionId()).orElseThrow();
        Category category = categoryRepository.findById(postSaveDto.getCategoryId()).orElseThrow();
        Badge badge = badgeRepository.findById(postSaveDto.getBadgeId()).orElseThrow();
        String thumbnail = photos.get(0);

        PostMeta newPostMeta = PostMeta.ofCreated(seller, region, category, badge, postSaveDto, thumbnail);

        PostMeta savedPostMeta = postRepository.save(newPostMeta);

        log.info("savedPostMeta = {}", savedPostMeta.getId());
    }

    private List<String> getPhotosUrl(PostSaveDto postSaveDto) {
        List<String> photos = new ArrayList<>();

//        for (MultipartFile photo : postSaveDto.getPhotos()) {
//            photos.add(fileUploadService.uploadFile(photo));
//        }

        photos.add("https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUE3JUE1JUVDJUEzJUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
        photos.add("https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUE3JUE1JUVDJUEzJUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");

        return photos;
    }
}

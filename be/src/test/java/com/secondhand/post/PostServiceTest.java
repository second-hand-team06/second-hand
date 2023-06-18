package com.secondhand.post;

import com.secondhand.post.dto.CreatePostResponseDto;
import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.post.entity.Badge;
import com.secondhand.post.entity.Category;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.repository.postmeta.PostMetaRepository;
import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class PostServiceTest {

    @Autowired
    private PostService postService;

    @Autowired
    private PostMetaRepository postMetaRepository;

    @Transactional
    @Test
    @DisplayName("사용자는 상품을 등록할 수 있다.")
    void createPostTest() {
        // given
        PostSaveDto postSaveDto = getPostSaveDto();
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        CreatePostResponseDto post = postService.createPost(postSaveDto, loggedInUser);
        PostMeta postMeta = postMetaRepository.findById(post.getId()).get();

        // then
        Assertions.assertThat(postMeta.getId()).isEqualTo(post.getId());
    }

    @Transactional
    @Test
    @DisplayName("사용자는 저장한 상품에 대해 soft delete를 할 수 있다.")
    void test() {
        PostSaveDto postSaveDto = getPostSaveDto();
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        CreatePostResponseDto post = postService.createPost(postSaveDto, loggedInUser);
        postService.deletePost(post.getId(), loggedInUser);
        PostMeta postMeta = postMetaRepository.findById(post.getId()).get();

        // then
        Assertions.assertThat(postMeta.isDeleted()).isTrue();
    }

    private PostMeta createPostMeta() {

        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(12345L);
        userProfileResponse.setName("sampleUser");
        userProfileResponse.setAvatarUrl("http://example.com/profile.jpg");

        User user = new User(userProfileResponse);

        int regionId = 1;
        String regionName = "Seoul";
        Region region = new Region(regionId, regionName);

        int categoryId = 1;
        String categoryName = "Electronics";
        String categoryPhotoUrl = "http://example.com/category.jpg";
        Category category = new Category(categoryId, categoryName, categoryPhotoUrl);

        int badgeId = 1;
        String badgeState = "active";
        String badgeBackgroundColor = "#FFFFFF";
        String badgeFontColor = "#000000";
        Badge badge = new Badge(badgeId, badgeState, badgeBackgroundColor, badgeFontColor);

        String title = "Sample Post";
        Long price = 10000L;
        String content = "This is a sample post content for testing.";
        List<MultipartFile> photos = new ArrayList<>();
        photos.add(new MockMultipartFile("file", "test.jpg", "image/jpeg", "test-image-content".getBytes()));

        PostSaveDto postSaveDto = new PostSaveDto(title, regionId, categoryId, badgeId, price, content, photos);

        return PostMeta.ofCreated(user, region, category, badge, postSaveDto, "http://example.com/photo.jpg");
    }

    private LoggedInUser getLoggedInUser() {
        User user = User.builder()
                .id(2L)
                .githubId(12345L) // 예시 값. 실제 필요한 값으로 변경하세요.
                .loginId("exampleLoginId") // 예시 값. 실제 필요한 값으로 변경하세요.
                .profileUrl("exampleProfileUrl") // 예시 값. 실제 필요한 값으로 변경하세요.
                .firstRegionId(1) // 예시 값. 실제 필요한 값으로 변경하세요.
                .build();

        return new LoggedInUser(user);
    }

    private PostSaveDto getPostSaveDto() {
        String title = "Example Title";
        int regionId = 1;
        int categoryId = 1;
        int badgeId = 1;
        Long price = 50000L;
        String content = "This is an example content.";
        List<MultipartFile> photos = new ArrayList<>();
        photos.add(new MockMultipartFile("file1", "test1.jpg", "image/jpeg", "test-image-1-content".getBytes()));
        photos.add(new MockMultipartFile("file2", "test2.jpg", "image/jpeg", "test-image-2-content".getBytes()));

        return new PostSaveDto(title, regionId, categoryId, badgeId, price, content, photos);
    }
}
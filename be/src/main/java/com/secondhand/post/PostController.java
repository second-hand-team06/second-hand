package com.secondhand.post;

import com.secondhand.post.dto.*;
import com.secondhand.user.login.JwtUtil;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Slf4j
@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final JwtUtil jwtUtil;

    @GetMapping
    public ResponseEntity<CustomResponse<MainPagePostsDto>> getPost(Pageable pageable, SearchCondition searchCondition) {

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "메인 화면 조회 성공",
                        postService.findMainPagePosts(pageable, searchCondition)));
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<CustomResponse<CreatePostResponseDto>> createPost(@Validated @ModelAttribute PostSaveDto postSaveDto, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매글 생성 성공",
                        postService.createPost(postSaveDto, loggedInUser)));
    }

    @GetMapping("/sales")
    public ResponseEntity<CustomResponse<MyPostListDto>> getPostSales() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "자신이 판매하는 상품목록 조회 성공",
                        new MyPostListDto(new ArrayList<>())));
    }

    @GetMapping("/interests")
    public ResponseEntity<CustomResponse<Page<PostMetaDto>>> getInterestPost(Pageable pageable, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success"
                        , 200
                        , "관심상품 목록 조회 성공"
                        , postService.findInterestPosts(pageable, loggedInUser)));
    }

    @GetMapping("/{postId}")
    public ResponseEntity<CustomResponse<PostDetailDto>> getPostDetail() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매글 상세 조회 성공",
                        new PostDetailDto()));
    }

    @PutMapping("/{postId}")
    public ResponseEntity<CustomResponse> updatePost(@PathVariable Long postId, @ModelAttribute PostUpdateDto updatePostDto, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        postService.editPost(postId, updatePostDto, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매글 수정 성공"));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<CustomResponse> deletePost(@PathVariable Long postId, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        postService.deletePost(postId, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매글 삭제 성공"));
    }

    @PatchMapping("/{postId}")
    public ResponseEntity<CustomResponse> changePostStatus(@PathVariable Long postId, @RequestBody UpdatePostStateDto stateDto, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        postService.updateBadge(postId, stateDto, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매 상품 상태 변경 성공"));
    }

}

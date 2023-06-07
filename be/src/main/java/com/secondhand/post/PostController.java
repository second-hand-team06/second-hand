package com.secondhand.post;

import com.secondhand.post.dto.*;
import com.secondhand.util.CustomResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/posts")
public class PostController {

    @GetMapping
    public ResponseEntity<CustomResponse<PostMetaListDto>> getPost() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "메인 화면 조회 성공",
                        new PostMetaListDto(new ArrayList<>())));
    }

    @PostMapping
    public ResponseEntity<CustomResponse> createPost(@RequestBody CreatePostDto createPostDto) {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "판매글 생성 성공"));
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
    public ResponseEntity<CustomResponse<InterestPostListDto>> getInterestPost() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success"
                        , 200
                        , "관심상품 목록 조회 성공"
                        , new InterestPostListDto(new ArrayList<>(), new ArrayList<>())));

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
}

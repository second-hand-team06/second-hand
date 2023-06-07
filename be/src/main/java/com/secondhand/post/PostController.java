package com.secondhand.post;

import com.secondhand.post.dto.CreatePostListDto;
import com.secondhand.post.dto.InterestPostListDto;
import com.secondhand.post.dto.PostMetaListDto;
import com.secondhand.util.CustomResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
                        "조회 성공",
                        new PostMetaListDto(new ArrayList<>())));
    }

    @PostMapping
    public ResponseEntity<CustomResponse> createPost() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "게시글 생성 성공"));
    }

    @GetMapping("/sales")
    public ResponseEntity<CustomResponse<CreatePostListDto>> getPostDetail() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "조회 성공",
                        new CreatePostListDto(new ArrayList<>())));
    }


    @GetMapping("/interests")
    public ResponseEntity<InterestPostListDto> getInterestPost() {
        return ResponseEntity
                .ok()
                .body(new InterestPostListDto(new ArrayList<>(), new ArrayList<>()));
    }
}

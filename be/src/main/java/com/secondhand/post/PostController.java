package com.secondhand.post;

import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.PostMetaListDto;
import com.secondhand.util.CustomResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;

@RestController
@RequestMapping("/posts")
public class PostController {

    @GetMapping
    public ResponseEntity<CustomResponse<PostMetaListDto>> getPost() {

        PostMetaDto postMetaDto = new PostMetaDto();
        postMetaDto.setPostedAt(LocalDateTime.now());

        ArrayList<PostMetaDto> postMetaDtos = new ArrayList<>();
        postMetaDtos.add(postMetaDto);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "조회 성공",
                        new PostMetaListDto(postMetaDtos)));
    }

}

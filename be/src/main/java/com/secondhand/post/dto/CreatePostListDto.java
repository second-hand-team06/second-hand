package com.secondhand.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CreatePostListDto {
    List<CreatePostDto> postList;
}

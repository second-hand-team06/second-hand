package com.secondhand.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class PostMetaListDto {

    private List<PostMetaDto> postList;

}

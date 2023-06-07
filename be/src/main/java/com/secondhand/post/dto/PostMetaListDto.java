package com.secondhand.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class PostMetaListDto {

    private List<PostMetaDto> postList;

}

package com.secondhand.post.dto;

import lombok.Getter;

import java.util.List;


@Getter
public class PostSaveDto {

    private String title;
    private String region;
    private int categoryId;
    private Long price;
    private String content;
    private List<String> photoUrl;
}

package com.secondhand.post.dto;

import lombok.Getter;


@Getter
public class CreatePostDto {

    private String title;
    private String region;
    private int categoryId;
    private Long price;
    private String content;
    private String photoUrl;

}

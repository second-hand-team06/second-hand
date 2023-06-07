package com.secondhand.post.dto;

import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class PostDetailDto {

    private long id;
    private long sellerId;
    private String sellerName;
    private String title;
    private String category;
    private LocalDateTime postedAt;
    private String content;
    private long chatCount;
    private long interestCount;
    private long viewCount;
    private long price;
    private String postStatus;
    private List<String> photoUrls;

}

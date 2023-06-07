package com.secondhand.post.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostMetaDto {

    private long id;
    private String title;
    private String photoUrl;
    private String region;
    private LocalDateTime postedAt;
    private String status;
    private Long price;
    private long chattingCount;
    private long interestCount;

}

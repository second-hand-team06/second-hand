package com.secondhand.post.dto;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Getter
public class PostSaveDto {

    private String title;
    private String region;
    private int categoryId;
    private Long price;
    private String content;
    private List<MultipartFile> photos;
}

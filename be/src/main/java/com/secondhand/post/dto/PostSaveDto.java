package com.secondhand.post.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Range;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;


@Getter
public class PostSaveDto {

    @NotNull
    @Size(min = 1, max = 63)
    private String title;
    @NotNull
    private int regionId;
    @NotNull
    private int categoryId;
    @Range(min = 0, max = 100000000)
    private Long price;
    @NotNull
    @Size(min = 1, max = 1000)
    private String content;
    @NotNull
    @Size(min = 1, max = 10)
    private List<MultipartFile> photos;
}

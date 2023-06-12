package com.secondhand.post.dto;

import com.querydsl.core.annotations.QueryProjection;
import com.secondhand.post.entity.Badge;
import com.secondhand.region.entity.Region;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class PostMetaDto {

    private long id;
    private Region region;
    private String title;
    private Long price;
    private Badge badge;
    private LocalDateTime postedAt;
    private long chattingCount;
    private long interestCount;

    @QueryProjection
    public PostMetaDto(long id, Region region, String title, Long price, Badge badge, LocalDateTime postedAt) {
        this.id = id;
        this.region = region;
        this.title = title;
        this.price = price;
        this.badge = badge;
        this.postedAt = postedAt;
    }
}

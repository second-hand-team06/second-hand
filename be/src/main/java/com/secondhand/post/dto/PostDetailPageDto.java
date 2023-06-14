package com.secondhand.post.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PostDetailPageDto {

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
    private String postState;
    private boolean isSeller;
    private List<String> photoUrls;

    @QueryProjection
    public PostDetailPageDto(long id, long sellerId, String sellerName, String title, String category, LocalDateTime postedAt, String content, long viewCount, long price, String postState) {
        this.id = id;
        this.sellerId = sellerId;
        this.sellerName = sellerName;
        this.title = title;
        this.category = category;
        this.postedAt = postedAt;
        this.content = content;
        this.chatCount = 0;
        this.interestCount = 0;
        this.viewCount = viewCount;
        this.price = price;
        this.postState = postState;
    }
}

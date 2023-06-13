package com.secondhand.post.entity;


import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostMeta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "badge_id")
    private Badge badge;

    private String title;
    private Long price;
    private String photoUrl;
    private long viewCount;
    private LocalDateTime postedAt;
    private boolean deleted;

    public static PostMeta ofCreated(User seller, Region region, Category category, Badge badge, PostSaveDto postSaveDto, String photoUrl) {
        return new PostMetaBuilder()
                .seller(seller)
                .region(region)
                .category(category)
                .badge(badge)
                .title(postSaveDto.getTitle())
                .price(postSaveDto.getPrice())
                .photoUrl(photoUrl)
                .viewCount(0)
                .postedAt(LocalDateTime.now())
                .deleted(false)
                .build();
    }
}
package com.secondhand.post.entity;


import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
public class PostMeta {

    @Id @GeneratedValue
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
    private int status;
    private LocalDateTime postedAt;
    private boolean deleted;
}

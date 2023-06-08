package com.secondhand.post.entity;


import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
public class PostMeta {

    @Id @GeneratedValue
    private long id;

    @OneToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

    private String title;
    private Long price;
    private int status;
    private LocalDateTime postedAt;
    private boolean deleted;
}

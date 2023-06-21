package com.secondhand.post.entity;

import com.secondhand.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor
public class ChattingRoom {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "post_meta_id")
    private PostMeta postMeta;

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private User buyer;

    public ChattingRoom(PostMeta postMeta, User buyer) {
        this.postMeta = postMeta;
        this.buyer = buyer;
    }
}

package com.secondhand.post.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class PostPhoto {

    @Id @GeneratedValue
    private long id;
    private long postId;
    private String photoUrl;
}

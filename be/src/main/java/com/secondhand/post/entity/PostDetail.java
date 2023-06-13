package com.secondhand.post.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PostDetail {

    @Id @GeneratedValue
    private long id;

    private String content;
}

package com.secondhand.post.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PostDetail {

    @Id
    private long id;

    private String content;

    public void updateContent(String content) {
        this.content = content;
    }
}

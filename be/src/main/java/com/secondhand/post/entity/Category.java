package com.secondhand.post.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Category {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String photoUrl;
}

package com.secondhand.post.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Badge {

    @Id @GeneratedValue
    private int id;

    private String state;
    private String backgroundColor;
    private String fontColor;
}

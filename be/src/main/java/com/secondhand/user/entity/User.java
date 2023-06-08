package com.secondhand.user.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class User {

    @Id @GeneratedValue
    private long id;

    private String loginId;

    private String profileUrl;

    // 이걸 List<Region> 으로 바꾸는건?
    private int firstRegionId;

    private Integer secondRegionId;
}

package com.secondhand.region.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Region {

    @Id @GeneratedValue
    private long id;

    private String name;
}

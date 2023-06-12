package com.secondhand.region.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Region {

    @Id @GeneratedValue
    private int id;

    private String name;
}

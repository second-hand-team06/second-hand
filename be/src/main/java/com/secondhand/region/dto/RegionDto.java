package com.secondhand.region.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class RegionDto {

    private int id;
    private String name;

    @QueryProjection
    public RegionDto(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

package com.secondhand.category.dto;

import lombok.Getter;

@Getter
public class RecommendedCategoriesDto {

    private int id;
    private String name;

    public RecommendedCategoriesDto(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

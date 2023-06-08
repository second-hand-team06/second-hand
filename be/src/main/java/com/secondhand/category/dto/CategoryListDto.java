package com.secondhand.category.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CategoryListDto {

    private List<CategoryDto> categoryList;

}

package com.secondhand.post.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SearchCondition {

    private Integer category;
    @NotNull(message = "지역을 선택해주세요.")
    private int region;
}

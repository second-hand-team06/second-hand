package com.secondhand.region.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RegionListDto {
    private List<RegionDto> regionList;
}

package com.secondhand.region.repository;

import com.secondhand.region.dto.RegionDto;

import java.util.List;

public interface RegionRepositoryCustom {

    List<RegionDto> findAllRegions();
}

package com.secondhand.region.repository;

import com.secondhand.region.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Integer>, RegionRepositoryCustom {
}

package com.secondhand.region.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.region.dto.RegionDto;

import javax.persistence.EntityManager;
import java.util.List;

import static com.secondhand.region.entity.QRegion.region;

public class RegionRepositoryImpl implements RegionRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public RegionRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<RegionDto> findAllRegions() {

        return queryFactory
                .select(Projections.constructor(RegionDto.class, region.id, region.name))
                .from(region)
                .fetch();
    }
}

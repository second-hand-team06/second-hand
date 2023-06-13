package com.secondhand.post.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.SearchCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;

import java.util.List;

import static com.secondhand.post.entity.QPostMeta.postMeta;

public class PostMetaRepositoryImpl implements PostMetaRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PostMetaRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<PostMetaDto> findMainPage(Pageable pageable, SearchCondition searchCondition) {

        QueryResults<PostMetaDto> result = queryFactory
                .select(Projections.constructor(PostMetaDto.class,
                            postMeta.id,
                            postMeta.region,
                            postMeta.title,
                            postMeta.price,
                            postMeta.photoUrl,
                            postMeta.viewCount,
                            postMeta.badge,
                            postMeta.postedAt))
                .from(postMeta)
                .where(categoryEq(searchCondition.getCategory()), regionEq(searchCondition.getRegion()), postMeta.deleted.eq(false))
                .orderBy(postMeta.postedAt.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();

        List<PostMetaDto> content = result.getResults();
        long total = result.getTotal();

        return new PageImpl<>(content, pageable, total);
    }

    private BooleanExpression categoryEq(Integer category) {

        if (category == null) {
            return null;
        }

        return postMeta.category.id.eq(category);
    }

    private BooleanExpression regionEq(Integer region) {

        if (region == null) {
            return null;
        }

        return postMeta.region.id.eq(region);
    }
}

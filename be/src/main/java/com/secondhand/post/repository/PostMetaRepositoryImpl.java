package com.secondhand.post.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.post.dto.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.secondhand.post.entity.QPostDetail.postDetail;
import static com.secondhand.post.entity.QPostMeta.postMeta;

public class PostMetaRepositoryImpl implements PostMetaRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PostMetaRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<PostMetaDto> findMainPage(Pageable pageable, SearchCondition searchCondition) {

        QueryResults<PostMetaDto> result = queryFactory
                .select(new QPostMetaDto(
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

    @Override
    public PostDetailPageDto findPostDetailPage(long postId) {

        return queryFactory
                .select(new QPostDetailPageDto(
                        postMeta.id,
                        postMeta.seller.id,
                        postMeta.seller.loginId,
                        postMeta.title,
                        postMeta.category.name,
                        postMeta.postedAt,
                        postDetail.content,
                        postMeta.viewCount,
                        postMeta.price,
                        postMeta.badge.state
                ))
                .from(postMeta)
                .join(postDetail)
                .on(postMeta.id.eq(postDetail.id))
                .where(postMeta.id.eq(postId))
                .fetchOne();
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

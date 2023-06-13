package com.secondhand.post.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.post.entity.PostMeta;

import javax.persistence.EntityManager;
import java.util.List;

import static com.secondhand.post.entity.QInterest.interest;
import static com.secondhand.post.entity.QPostMeta.postMeta;


public class InterestRepositoryImpl implements InterestRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public InterestRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<PostMeta> findMyInterestsPosts(Long loggedInUserId) {
        return queryFactory
                .select(postMeta)
                .from(interest)
                .where(interest.user.id.eq(loggedInUserId))
                .fetch();
    }
}

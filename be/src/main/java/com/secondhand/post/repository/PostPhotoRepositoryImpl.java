package com.secondhand.post.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

import static com.secondhand.post.entity.QPostPhoto.postPhoto;

public class PostPhotoRepositoryImpl implements PostPhotoRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PostPhotoRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<String> findAllPhotoUrlsByPostMetaId(long postId) {

        return queryFactory
                .select(postPhoto.photoUrl)
                .from(postPhoto)
                .where(postPhoto.postMetaId.eq(postId))
                .fetch();
    }
}

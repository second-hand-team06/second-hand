package com.secondhand.post.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.category.dto.QCategoryDto;
import com.secondhand.category.dto.RecommendedCategoriesDto;

import javax.persistence.EntityManager;

import static com.secondhand.post.entity.QCategory.category;

public class CategoryRepositoryImpl implements CategoryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public CategoryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }


    @Override
    public CategoriesDto findAllCategories() {

        return new CategoriesDto(queryFactory
                .select(new QCategoryDto(
                        category.id,
                        category.name,
                        category.photoUrl))
                .from(category)
                .fetch());
    }

}

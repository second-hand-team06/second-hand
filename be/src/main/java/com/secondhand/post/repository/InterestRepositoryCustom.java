package com.secondhand.post.repository;

import com.secondhand.category.dto.CategoryInInterestDto;
import com.secondhand.post.dto.PostMetaDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface InterestRepositoryCustom {
    Page<PostMetaDto> findMyInterestsPosts(Pageable pageable, Long loggedInUserId);

    List<CategoryInInterestDto> interestCategory();
}

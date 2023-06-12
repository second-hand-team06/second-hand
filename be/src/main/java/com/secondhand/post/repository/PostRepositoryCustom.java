package com.secondhand.post.repository;

import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.SearchCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostRepositoryCustom {

    Page<PostMetaDto> findMainPage(Pageable pageable, SearchCondition searchCondition);
}

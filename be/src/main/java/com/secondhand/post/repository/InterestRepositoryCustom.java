package com.secondhand.post.repository;

import com.secondhand.post.dto.PostMetaDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InterestRepositoryCustom {
    Page<PostMetaDto> findMyInterestsPosts(Pageable pageable, Long loggedInUserId);
}

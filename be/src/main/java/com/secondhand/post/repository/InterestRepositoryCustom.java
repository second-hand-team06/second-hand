package com.secondhand.post.repository;

import com.secondhand.post.entity.PostMeta;

import java.util.List;

public interface InterestRepositoryCustom {
    List<PostMeta> findMyInterestsPosts(Long loggedInUserId);
}

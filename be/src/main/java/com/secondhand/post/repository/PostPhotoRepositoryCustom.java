package com.secondhand.post.repository;

import java.util.List;

public interface PostPhotoRepositoryCustom {

    List<String> findAllPhotoUrlsByPostMetaId(long postId);
}

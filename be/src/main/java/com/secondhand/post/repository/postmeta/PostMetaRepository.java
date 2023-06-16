package com.secondhand.post.repository.postmeta;

import com.secondhand.post.entity.PostMeta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostMetaRepository extends JpaRepository<PostMeta, Long>, PostMetaRepositoryCustom {
}
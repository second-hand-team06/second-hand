package com.secondhand.post.repository;

import com.secondhand.post.entity.PostMeta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostMeta, Long>, PostRepositoryCustom {
}

package com.secondhand.post.repository;

import com.secondhand.post.entity.PostPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostPhotoRepository extends JpaRepository<PostPhoto, Long> {
}

package com.secondhand.post;

import com.secondhand.post.entity.PostMeta;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class PostRepository {

    private final EntityManager em;

    public List<PostMeta> findPost() {
        return em.createQuery("SELECT p FROM PostMeta p", PostMeta.class)
                .getResultList();
    }

}

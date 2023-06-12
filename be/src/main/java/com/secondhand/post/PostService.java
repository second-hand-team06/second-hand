package com.secondhand.post;

import com.secondhand.post.dto.MainPagePostsDto;
import com.secondhand.post.dto.SearchCondition;
import com.secondhand.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public MainPagePostsDto findMainPagePosts(Pageable pageable, SearchCondition searchCondition) {

        return new MainPagePostsDto(postRepository.findMainPage(pageable, searchCondition));
    }
}

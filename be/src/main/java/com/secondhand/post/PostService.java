package com.secondhand.post;

import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.mapper.PostMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public List<PostMetaDto> createPost() {

        List<PostMeta> postMetaList = postRepository.findPost();

        return postMetaList.stream()
                .map(PostMapper.INSTANCE::toPostMetaDto)
                .collect(Collectors.toList());
    }
}

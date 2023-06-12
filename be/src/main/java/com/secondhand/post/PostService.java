package com.secondhand.post;

import com.secondhand.fileupload.FileUploadService;
import com.secondhand.post.dto.MainPagePostsDto;
import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.post.dto.SearchCondition;
import com.secondhand.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final FileUploadService fileUploadService;

    public MainPagePostsDto findMainPagePosts(Pageable pageable, SearchCondition searchCondition) {

        return new MainPagePostsDto(postRepository.findMainPage(pageable, searchCondition));
    }

    public void createPost(PostSaveDto postSaveDto) {

        List<String> photos = new ArrayList<>();

        for (MultipartFile photo : postSaveDto.getPhotos()) {
            photos.add(fileUploadService.uploadFile(photo));
        }
    }
}

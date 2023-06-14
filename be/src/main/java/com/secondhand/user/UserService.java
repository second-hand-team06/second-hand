package com.secondhand.user;

import com.secondhand.post.entity.Interest;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.repository.InterestRepository;
import com.secondhand.post.repository.PostMetaRepository;
import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PostMetaRepository postMetaRepository;
    private final InterestRepository interestRepository;

    @Transactional
    public void updateMyRegion(long userId, PostMyRegionDto postMyRegionDto) {

        User loggedInUser = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));

        User modifiedUser = new User(loggedInUser, postMyRegionDto);

        userRepository.save(modifiedUser);
    }

    @Transactional
    public void addInterestPost(long postId, LoggedInUser loggedInUser) {

        User user = userRepository.findById(loggedInUser.getId()).orElseThrow();
        PostMeta postMeta = postMetaRepository.findById(postId).orElseThrow();

        Interest interest = new Interest(user, postMeta);
        interestRepository.save(interest);
    }
}

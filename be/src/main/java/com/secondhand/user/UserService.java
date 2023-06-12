package com.secondhand.user;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.entity.User;
import com.secondhand.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void updateMyRegion(long userId, PostMyRegionDto postMyRegionDto) {

        User loggedInUser = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));

        User modifiedUser = new User(loggedInUser, postMyRegionDto);

        userRepository.save(modifiedUser);
    }
}

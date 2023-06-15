package com.secondhand.user.login;

import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class JwtUtilTest {

    @Autowired
    private JwtUtil jwtUtil;

    @DisplayName("유저가 로그인을 하면 해당 유저의 정보가 담긴 JWT 토근을 만들 수 있다.")
    @Transactional
    @Test
    void testCreateToken() {

        // given
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        String token = jwtUtil.createToken(loggedInUser);
        LoggedInUser extractedUserFromToken = jwtUtil.extractedUserFromToken(token);

        // then
        assertThat(loggedInUser.getId()).isEqualTo(extractedUserFromToken.getId());
        assertThat(loggedInUser.getGithubId()).isEqualTo(extractedUserFromToken.getGithubId());
        assertThat(loggedInUser.getLoginId()).isEqualTo(extractedUserFromToken.getLoginId());
        assertThat(loggedInUser.getProfileUrl()).isEqualTo(extractedUserFromToken.getProfileUrl());
        assertThat(loggedInUser.getFirstRegionId()).isEqualTo(extractedUserFromToken.getFirstRegionId());
        assertThat(loggedInUser.getSecondRegionId()).isEqualTo(extractedUserFromToken.getSecondRegionId());
    }

    @DisplayName("조작된 토큰이 들어오면 ManipulatedTokenException이 발생한다.")
    @Test
    void testManipulatedToken() {

        // given
        LoggedInUser loggedInUser = getLoggedInUser();
        String token = jwtUtil.createToken(loggedInUser);

        // when
        boolean validated = jwtUtil.validateTokenIsManipulated(token + "a");

        // then
        assertThat(validated).isFalse();
    }

    private LoggedInUser getLoggedInUser() {
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(200L);
        userProfileResponse.setName("test");
        userProfileResponse.setAvatarUrl("test");

        User user = new User(userProfileResponse);

        LoggedInUser loggedInUser = new LoggedInUser(user);
        return loggedInUser;
    }
}
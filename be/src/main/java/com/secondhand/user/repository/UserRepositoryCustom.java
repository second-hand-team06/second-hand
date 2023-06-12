package com.secondhand.user.repository;

import com.secondhand.user.login.dto.UserProfileResponse;

public interface UserRepositoryCustom {

    void createUser(UserProfileResponse userProfileResponse);
}

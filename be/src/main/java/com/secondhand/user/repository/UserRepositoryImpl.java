package com.secondhand.user.repository;

import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.UserProfileResponse;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepositoryCustom {

    private final EntityManager em;

    @Override
    @Transactional
    public void createUser(UserProfileResponse userProfileResponse) {

        em.persist(new User(userProfileResponse));
    }
}

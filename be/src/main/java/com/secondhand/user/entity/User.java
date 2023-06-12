package com.secondhand.user.entity;

import com.secondhand.user.login.dto.UserProfileResponse;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long githubId;
    private String loginId;
    private String profileUrl;
    private int firstRegionId;
    private Integer secondRegionId;

    public User(UserProfileResponse userProfileResponse) {
        this.githubId = userProfileResponse.getId();
        this.loginId = userProfileResponse.getName();
        this.profileUrl = userProfileResponse.getAvatarUrl();
        this.firstRegionId = 1;
    }
}

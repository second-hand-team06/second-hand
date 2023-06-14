package com.secondhand.user.login.dto;

import com.secondhand.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class LoggedInUser {

    private long id;
    private long githubId;
    private String loginId;
    private String profileUrl;
    private int firstRegionId;
    private Integer secondRegionId;

    public LoggedInUser(User user) {
        this.id = user.getId();
        this.githubId = user.getGithubId();
        this.loginId = user.getLoginId();
        this.profileUrl = user.getProfileUrl();
        this.firstRegionId = user.getFirstRegionId();
        this.secondRegionId = user.getSecondRegionId();
    }
}

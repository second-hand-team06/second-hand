package com.secondhand.user.login.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoggedInUser {

    private long id;
    private long githubId;
    private String loginId;
    private String profileUrl;
    private long firstRegionId;
    private Long secondRegionId;
}

package com.secondhand.user.entity;

import com.secondhand.post.entity.Interest;
import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.login.dto.UserProfileResponse;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Long githubId;
    private String loginId;
    private String profileUrl;
    private int firstRegionId;
    private Integer secondRegionId;

    @OneToMany(mappedBy = "user")
    private List<Interest> interest = new ArrayList<>();

    public User(UserProfileResponse userProfileResponse) {
        this.githubId = userProfileResponse.getId();
        this.loginId = userProfileResponse.getName();
        this.profileUrl = userProfileResponse.getAvatarUrl();
        this.firstRegionId = 1;
    }

    public User(User unmodifiedUser, PostMyRegionDto postMyRegionDto) {
        this.id = unmodifiedUser.getId();
        this.githubId = unmodifiedUser.getGithubId();
        this.loginId = unmodifiedUser.getLoginId();
        this.profileUrl = unmodifiedUser.getProfileUrl();

        List<Integer> myRegions = postMyRegionDto.getRegions();
        this.firstRegionId = myRegions.get(0);
        if (myRegions.size() == 2) {
            this.secondRegionId = myRegions.get(1);
        }
    }
}

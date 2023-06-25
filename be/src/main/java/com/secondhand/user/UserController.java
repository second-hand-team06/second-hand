package com.secondhand.user;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.dto.UserRegionsDto;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @GetMapping("/regions")
    public ResponseEntity<CustomResponse<UserRegionsDto>> getMyRegion(@RequestAttribute LoggedInUser loggedInUser) {

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "지역 조회 성공",
                        userService.getMyRegion(loggedInUser.getId())));
    }

    @PutMapping("/regions")
    public ResponseEntity<CustomResponse> updateMyRegion(@Validated @RequestBody PostMyRegionDto postMyRegionDto, @RequestAttribute LoggedInUser loggedInUser) {

        userService.updateMyRegion(loggedInUser.getId(), postMyRegionDto);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "지역 등록 성공"
                ));
    }

    // TODO: 삭제된 상품은 관심 상품에 등록 불가능, 이미 관심 목록에 등록된 상품은 등록 불가능
    @PostMapping("/{postId}")
    public ResponseEntity<CustomResponse> addInterestPost(@PathVariable Long postId, @RequestAttribute LoggedInUser loggedInUser) {

        userService.addInterestPost(postId, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "관심상품 추가 성공"));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<CustomResponse> deleteInterestPost(@PathVariable Long postId, @RequestAttribute LoggedInUser loggedInUser) {

        userService.deleteInterestPost(postId, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "관심상품 삭제 성공"));
    }
}

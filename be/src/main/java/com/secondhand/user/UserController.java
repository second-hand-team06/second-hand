package com.secondhand.user;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.login.JwtUtil;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    @PutMapping("/regions")
    public ResponseEntity<CustomResponse> updateMyRegion(@RequestBody PostMyRegionDto postMyRegionDto, @RequestHeader("Authorization") String bearerToken) {

        // TODO: 토근 처리

        userService.updateMyRegion(2, postMyRegionDto);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "지역 등록 성공"
                ));
    }

    @PostMapping("/{postId}")
    public ResponseEntity<CustomResponse> addInterestPost(@PathVariable Long postId, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        userService.addInterestPost(postId, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "관심상품 추가 성공"));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<CustomResponse> deleteInterestPost(@PathVariable Long postId, @RequestHeader("Authorization") String token) {

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);

        userService.deleteInterestPost(postId, loggedInUser);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "관심상품 삭제 성공"));
    }
}

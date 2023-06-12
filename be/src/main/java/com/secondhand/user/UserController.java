package com.secondhand.user;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.login.JwtUtil;
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
}

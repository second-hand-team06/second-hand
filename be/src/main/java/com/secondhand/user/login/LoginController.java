package com.secondhand.user.login;

import com.secondhand.user.login.dto.GithubToken;
import com.secondhand.user.login.dto.JWTResponse;
import com.secondhand.user.login.dto.UserProfileResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;
    private final JwtUtil jwtUtil;

    @GetMapping("/oauth")
    public ResponseEntity<JWTResponse> githubLogin(String code, HttpServletResponse response) {
        GithubToken githubToken = loginService.getAccessToken(code);
        response.setHeader("Authorization", "application/json");

        UserProfileResponse userProfile = loginService.getUserProfile(githubToken.getAccessToken());

        loginService.createUser(userProfile);

        String token = jwtUtil.createToken(userProfile);

        log.info(token);
        return ResponseEntity.ok(new JWTResponse("login success", token));
    }
}

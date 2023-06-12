package com.secondhand.interceptor;

import com.secondhand.user.login.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        log.info("preHandle : {}", request.getRequestURI());

        if (request.getHeader("Authorization") == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Access denied");
            return false;
        }

        String token = request.getHeader("Authorization").split(" ")[1];

        if (jwtUtil.validateTokenIsExpired(token)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token is expired");
            return false;
        }

        return true;

//        return jwtUtil.validateTokenIsManipulated(token);
    }
}

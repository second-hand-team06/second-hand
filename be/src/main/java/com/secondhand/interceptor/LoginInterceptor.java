package com.secondhand.interceptor;

import com.secondhand.user.login.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        jwtUtil = new JwtUtil();

        log.info("preHandle : {}", request.getRequestURI());

        if (request.getHeader("Authorization") == null || jwtUtil.validateToken(request.getHeader("Authorization").split(" ")[1])) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Access denied");
            return false;
        }

        return true;
    }
}

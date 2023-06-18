package com.secondhand.config;

import com.secondhand.interceptor.CreatePostInterceptor;
import com.secondhand.interceptor.LoginInterceptor;
import com.secondhand.user.login.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// TODO : CORS 학습 후 addMapping, allowedOrigin, allowedMethods 설정
@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final JwtUtil jwtUtil;
    // TODO : 배포시 allowedOrigins "http://3.37.72.34" 로 변경
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        LoginInterceptor loginInterceptor = new LoginInterceptor(jwtUtil);

        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/posts/**")
                .excludePathPatterns("/posts");

        registry.addInterceptor(new CreatePostInterceptor(loginInterceptor))
                .addPathPatterns("/posts");
    }
}

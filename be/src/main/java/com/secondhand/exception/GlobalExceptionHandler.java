package com.secondhand.exception;

import com.secondhand.exception.login.JwtTokenException;
import com.secondhand.util.CustomErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import software.amazon.awssdk.http.HttpStatusCode;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(JwtTokenException.class)
    public ResponseEntity<CustomErrorResponse> loginExceptionHandler(JwtTokenException e) {
        return ResponseEntity
                .badRequest()
                .body(new CustomErrorResponse(HttpStatusCode.BAD_REQUEST, e.getMessage()));
    }

//    @ExceptionHandler(NoHandlerFoundException.class)
//    public ResponseEntity<CustomErrorResponse> handleNotFoundError(NoHandlerFoundException e) {
//        return ResponseEntity
//                .badRequest()
//                .body(new CustomErrorResponse(HttpStatusCode.NOT_FOUND, e.getMessage()));
//    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorResponse> handleValidationExceptions(MethodArgumentNotValidException e) {
        return ResponseEntity
                .badRequest()
                .body(new CustomErrorResponse(HttpStatusCode.BAD_REQUEST, e.getMessage()));
    }
}

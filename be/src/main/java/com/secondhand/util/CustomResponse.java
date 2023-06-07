package com.secondhand.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CustomResponse {
    private String status;
    private int code;
    private String message;
    private Object data;
}

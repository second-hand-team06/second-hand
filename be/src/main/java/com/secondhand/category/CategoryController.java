package com.secondhand.category;

import com.secondhand.category.dto.CategoryListDto;
import com.secondhand.util.CustomResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @GetMapping
    public ResponseEntity<CustomResponse<CategoryListDto>> getCategoryList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "카테고리 목록 조회 성공",
                        new CategoryListDto(new ArrayList<>())
                ));
    }
}

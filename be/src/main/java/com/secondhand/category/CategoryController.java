package com.secondhand.category;

import com.secondhand.category.dto.CategoryInterestsDto;
import com.secondhand.category.dto.CategoryListDto;
import com.secondhand.post.repository.InterestRepository;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class CategoryController {

    private final InterestRepository interestRepository;
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

    @GetMapping("/interests")
    public ResponseEntity<CustomResponse<CategoryInterestsDto>> getInterestCategoryList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "관심 카테고리 목록 조회 성공",
                        new CategoryInterestsDto(interestRepository.interestCategory()))
                );
    }
}

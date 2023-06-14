package com.secondhand.category;

import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.post.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoriesDto getCategoryList() {

        return categoryRepository.findAllCategories();
    }
}

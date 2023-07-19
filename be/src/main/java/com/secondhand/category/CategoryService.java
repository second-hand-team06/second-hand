package com.secondhand.category;

import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.category.dto.CategoryDto;
import com.secondhand.post.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoriesDto getCategoryList() {

        return categoryRepository.findAllCategories();
    }

    public CategoriesDto getRecommendedCategories(String postTitle) {

        return recommendCategories(categoryRepository.findAllCategories().getCategories());
    }

    private CategoriesDto recommendCategories(List<CategoryDto> categories) {

        List<CategoryDto> recommendedCategories = new ArrayList<>();

        Random random = new Random();
        Set<Integer> numbers = new HashSet<>();

        while (numbers.size() < 3) {
            int randomNumber = random.nextInt(categories.size() + 1);
            numbers.add(randomNumber);
        }

        for (Integer number : numbers) {
            recommendedCategories.add(categories.get(number));
        }

        return new CategoriesDto(recommendedCategories);
    }
}

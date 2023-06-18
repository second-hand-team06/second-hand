package com.secondhand.post;

import com.secondhand.post.dto.SearchCondition;
import com.secondhand.user.login.JwtUtil;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PostController.class)
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PostService postService;
    @MockBean
    private JwtUtil jwtUtil;

    @Test
    @DisplayName("메인 화면을 조회하고 정상적인 경우 상태코드 200을 반환한다.")
    void getPostTest() throws Exception {
        // given
        Pageable pageable = PageRequest.of(0, 10);
        SearchCondition searchCondition = new SearchCondition();
        searchCondition.setCategory(1);
        searchCondition.setRegion(1);

        // when // then
        mockMvc.perform(MockMvcRequestBuilders.get("/posts")
                .param("page", String.valueOf(pageable.getPageNumber()))
                .param("size", String.valueOf(pageable.getPageSize()))
                .param("category", String.valueOf(searchCondition.getCategory()))
                .param("region", String.valueOf(searchCondition.getRegion())))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("메인 화면 조회 성공"));
    }
}
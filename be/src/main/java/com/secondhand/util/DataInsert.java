package com.secondhand.util;

import com.secondhand.post.entity.*;
import com.secondhand.post.repository.postdetail.PostDetailRepository;
import com.secondhand.post.repository.postmeta.PostMetaRepository;
import com.secondhand.post.repository.postphoto.PostPhotoRepository;
import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class DataInsert {


    private final PostMetaRepository postMetaRepository;
    private final PostDetailRepository postDetailRepository;
    private final PostPhotoRepository postPhotoRepository;

    public void bulkInsert() {

        Map<Integer, Badge> badgeMap = getIntegerBadgeMap();
        Map<Integer, User> userMap = getUserMap();
        Map<Integer, Category> categoryMap = getCategoryMap();
        Map<Integer, Region> regionMap = getRegionMap();

        Random random = new Random();

        for (int i = 0; i < 1000; i++) {

            int badgeId = random.nextInt(4) + 1;
            int userId = random.nextInt(4) + 1;
            int price = random.nextInt(2000000000);
            int viewCount = random.nextInt(300);
            int categoryId = random.nextInt(20) + 1;
            int regionId = random.nextInt(19) + 1;

            Category category = categoryMap.get(categoryId);

            PostMeta postMeta = PostMeta.builder()
                    .badge(badgeMap.get(badgeId))
                    .seller(userMap.get(userId))
                    .price((long) price)
                    .postedAt(LocalDateTime.now())
                    .viewCount(viewCount)
                    .deleted(false)
                    .category(category)
                    .photoUrl(category.getPhotoUrl())
                    .title(category.getName())
                    .region(regionMap.get(regionId))
                    .build();
            PostMeta savedPostMeta = postMetaRepository.save(postMeta);
            long postMetaId = savedPostMeta.getId();

            PostDetail postDetail = new PostDetail(postMetaId, category.getName());
            postDetailRepository.save(postDetail);

            PostPhoto postPhoto = new PostPhoto(postMetaId, category.getPhotoUrl());
            postPhotoRepository.save(postPhoto);
        }


    }

    private Map<Integer, Badge> getIntegerBadgeMap() {
        Badge 판매_중 = Badge.builder()
                .id(1)
                .backgroundColor(null)
                .state("판매 중")
                .fontColor(null)
                .build();

        Badge 예약_중 = Badge.builder()
                .id(2)
                .backgroundColor("#50C474")
                .state("예약 중")
                .fontColor("#FFFFFF")
                .build();

        Badge 판매_완료 = Badge.builder()
                .id(3)
                .state("판매 완료")
                .backgroundColor("#EDF0F2")
                .fontColor("#000000")
                .build();

        Badge 광고 = Badge.builder()
                .id(4)
                .state("광고")
                .backgroundColor("#FF8A3D")
                .fontColor("#FFFFFF")
                .build();

        Map<Integer, Badge> badgeMap = new HashMap<>();
        badgeMap.put(1, 판매_중);
        badgeMap.put(2, 예약_중);
        badgeMap.put(3, 판매_완료);
        badgeMap.put(4, 광고);
        return badgeMap;
    }

    private Map<Integer, User> getUserMap() {
        User 임동현 = User.builder()
                .id(3L)
                .githubId(115435784L)
                .loginId("임동현")
                .profileUrl("https://avatars.githubusercontent.com/u/115435784?v=4")
                .firstRegionId(1)
                .secondRegionId(null)
                .build();

        User kimSeonggyu = User.builder()
                .id(2L)
                .githubId(71162390L)
                .loginId("kim seonggyu")
                .profileUrl("https://avatars.githubusercontent.com/u/71162390?v=4")
                .firstRegionId(5)
                .secondRegionId(19)
                .build();

        User daon = User.builder()
                .id(4L)
                .githubId(115215178L)
                .loginId("Daon")
                .profileUrl("https://avatars.githubusercontent.com/u/115215178?v=4")
                .firstRegionId(1)
                .secondRegionId(null)
                .build();

        User yousooa = User.builder()
                .id(13)
                .githubId(96980857L)
                .loginId("yousooa")
                .profileUrl("https://avatars.githubusercontent.com/u/96980857?v=4")
                .firstRegionId(1)
                .secondRegionId(5)
                .build();

        Map<Integer, User> userMap = new HashMap<>();
        userMap.put(1, 임동현);
        userMap.put(2, kimSeonggyu);
        userMap.put(3, daon);
        userMap.put(4, yousooa);
        return userMap;
    }

    private Map<Integer, Category> getCategoryMap() {
        Map<Integer, Category> categoryMap = new HashMap<>();
        Category 주류 = new Category(1, "주류", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/soju.jpg");
        Category 음료 = new Category(2, "디지털기기", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/digital.png");
        Category 생활가전 = new Category(3, "생활가전", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/domestic.png");
        Category 가구 = new Category(4, "가구/인테리어", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/furniture.png");
        Category 주방 = new Category(5, "생활/주방", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/kitchen.png");
        Category 여성의류 = new Category(6, "여성의류", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/woman-accessories.png");
        Category 도서 = new Category(7, "도서", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/book.png");
        Category 유아도서 = new Category(8, "유아도서", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/baby-book.png");
        Category 유아동 = new Category(9, "유아동", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/baby.png");
        Category 뷰티미용 = new Category(10, "뷰티/미용", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/beauty.png");
        Category 차 = new Category(11, "차", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/car.png");
        Category 취미 = new Category(12, "취미/게임/음반", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/game.png");
        Category 남성패션 = new Category(13, "반려동물용품", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/man-apparel.png");
        Category 반려동물 = new Category(14, "반려동물용품", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/pet.png");
        Category 식물 = new Category(15, "식물", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/plant.png");
        Category 가공식품 = new Category(16, "가공식품", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/processed-foods.png");
        Category 스포츠 = new Category(17, "스포츠/레저", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/sports.png");
        Category 티켓 = new Category(18, "티켓", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/ticket.png");
        Category 인기 = new Category(19, "인기", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/star.png");
        Category 기타 = new Category(20, "기타 중고물품", "https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/category/etc.png");

        categoryMap.put(1, 주류);
        categoryMap.put(2, 음료);
        categoryMap.put(3, 생활가전);
        categoryMap.put(4, 가구);
        categoryMap.put(5, 주방);
        categoryMap.put(6, 여성의류);
        categoryMap.put(7, 도서);
        categoryMap.put(8, 유아도서);
        categoryMap.put(9, 유아동);
        categoryMap.put(10, 뷰티미용);
        categoryMap.put(11, 차);
        categoryMap.put(12, 취미);
        categoryMap.put(13, 남성패션);
        categoryMap.put(14, 반려동물);
        categoryMap.put(15, 식물);
        categoryMap.put(16, 가공식품);
        categoryMap.put(17, 스포츠);
        categoryMap.put(18, 티켓);
        categoryMap.put(19, 인기);
        categoryMap.put(20, 기타);

        return categoryMap;
    }

    private Map<Integer, Region> getRegionMap() {
        Region 서울_강남구_역삼동 = new Region(1, "서울 강남구 역삼동");
        Region 서울_강남구_역삼1동 = new Region(2, "서울 강남구 역삼1동");
        Region 서울_강남구_역삼2동 = new Region(3, "서울 강남구 역삼2동");
        Region 서울_강남구_역삼3동 = new Region(4, "서울 강남구 역삼3동");
        Region 서울_강남구_개포동 = new Region(5, "서울 강남구 개포동");
        Region 서울_강남구_개포1동 = new Region(6, "서울 강남구 개포1동");
        Region 서울_강남구_개포2동 = new Region(7, "서울 강남구 개포2동");
        Region 서울_강남구_개포3동 = new Region(8, "서울 강남구 개포3동");
        Region 서울_강남구_개포4동 = new Region(9, "서울 강남구 개포4동");
        Region 서울_강남구_논현동 = new Region(10, "서울 강남구 논현동");
        Region 서울_강남구_논현1동 = new Region(11, "서울 강남구 논현1동");
        Region 서울_강남구_논현2동 = new Region(12, "서울 강남구 논현2동");
        Region 서울_강남구_대치동 = new Region(13, "서울 강남구 대치동");
        Region 서울_강남구_대치1동 = new Region(14, "서울 강남구 대치1동");
        Region 서울_강남구_대치2동 = new Region(15, "서울 강남구 대치2동");
        Region 서울_강남구_대치4동 = new Region(16, "서울 강남구 대치4동");
        Region 서울_강남구_도곡동 = new Region(17, "서울 강남구 도곡동");
        Region 서울_강남구_도곡1동 = new Region(18, "서울 강남구 도곡1동");
        Region 서울_강남구_도곡2동 = new Region(19, "서울 강남구 도곡2동");

        Map<Integer, Region> regionMap = new HashMap<>();

        regionMap.put(1, 서울_강남구_역삼동);
        regionMap.put(2, 서울_강남구_역삼1동);
        regionMap.put(3, 서울_강남구_역삼2동);
        regionMap.put(4, 서울_강남구_역삼3동);
        regionMap.put(5, 서울_강남구_개포동);
        regionMap.put(6, 서울_강남구_개포1동);
        regionMap.put(7, 서울_강남구_개포2동);
        regionMap.put(8, 서울_강남구_개포3동);
        regionMap.put(9, 서울_강남구_개포4동);
        regionMap.put(10, 서울_강남구_논현동);
        regionMap.put(11, 서울_강남구_논현1동);
        regionMap.put(12, 서울_강남구_논현2동);
        regionMap.put(13, 서울_강남구_대치동);
        regionMap.put(14, 서울_강남구_대치1동);
        regionMap.put(15, 서울_강남구_대치2동);
        regionMap.put(16, 서울_강남구_대치4동);
        regionMap.put(17, 서울_강남구_도곡동);
        regionMap.put(18, 서울_강남구_도곡1동);
        regionMap.put(19, 서울_강남구_도곡2동);

        return regionMap;
    }
}

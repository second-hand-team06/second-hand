package com.secondhand.region;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.region.dto.RegionListDto;
import com.secondhand.util.CustomResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/regions")
public class RegionController {

    @GetMapping
    public ResponseEntity<CustomResponse<RegionListDto>> getRegionList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "지역 목록 조회 성공",
                        new RegionListDto(new ArrayList<>())
                ));
    }

    @PutMapping
    public ResponseEntity<CustomResponse> postRegion(@RequestBody PostMyRegionDto postMyRegionDto) {
        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "지역 등록 성공"
                ));
    }
}

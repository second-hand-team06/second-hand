package com.secondhand.region;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.region.dto.RegionsDto;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/regions")
public class RegionController {

    private final RegionService regionService;

    @GetMapping
    public ResponseEntity<CustomResponse<RegionsDto>> getRegionList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "지역 목록 조회 성공",
                        regionService.findAllRegions())
                );
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

package com.secondhand.post.mapper;

import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.region.entity.Region;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PostMapper {

    PostMapper INSTANCE = Mappers.getMapper(PostMapper.class);

    PostMetaDto toPostMetaDto(PostMeta postMeta);

    default String mapRegionToString(Region region) {
        return region.getName();
    }
}

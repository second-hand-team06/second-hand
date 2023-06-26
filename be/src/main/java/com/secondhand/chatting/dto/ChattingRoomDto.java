package com.secondhand.chatting.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ChattingRoomDto {

    private String roomId;
    private String name;

    public static ChattingRoomDto create(String name) {

        ChattingRoomDto chattingRoomDto = new ChattingRoomDto();
        chattingRoomDto.roomId = UUID.randomUUID().toString();
        chattingRoomDto.name = name;
        return chattingRoomDto;
    }
}

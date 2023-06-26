package com.secondhand.chatting;

import com.secondhand.chatting.dto.ChattingRoomDto;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Repository
public class ChattingRoomRepository {

    private Map<String, ChattingRoomDto> chattingRooms;

    @PostConstruct
    private void init() {
        chattingRooms = new LinkedHashMap<>();
    }

    public List<ChattingRoomDto> findAllRoom() {

        List<ChattingRoomDto> chattingRooms = new ArrayList(this.chattingRooms.values());
        Collections.reverse(chattingRooms);
        return chattingRooms;
    }

    public ChattingRoomDto findRoomById(String roomId) {

        return chattingRooms.get(roomId);
    }

    public ChattingRoomDto createChattingRoom(String name) {

        ChattingRoomDto chattingRoomDto = ChattingRoomDto.create(name);
        chattingRooms.put(chattingRoomDto.getRoomId(), chattingRoomDto);
        return chattingRoomDto;
    }
}

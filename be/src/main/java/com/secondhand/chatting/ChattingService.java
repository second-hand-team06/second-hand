package com.secondhand.chatting;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.secondhand.chatting.dto.ChattingRoomDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChattingService {

    private final ObjectMapper objectMapper;
    private Map<String, ChattingRoomDto> chattingRooms;

    @PostConstruct
    private void init() {

        chattingRooms = new LinkedHashMap<>();
    }

    public List<ChattingRoomDto> findAllRoom() {

        return new ArrayList<>(chattingRooms.values());
    }

    public ChattingRoomDto findRoomById(String roomId) {

        return chattingRooms.get(roomId);
    }

    public ChattingRoomDto createRoom(String name) {

        String roomId = String.valueOf(chattingRooms.size() + 1);
        ChattingRoomDto chattingRoomDto = ChattingRoomDto.builder()
                .roomId(roomId)
                .name(name)
                .build();

        chattingRooms.put(roomId, chattingRoomDto);

        return chattingRoomDto;
    }

    public <T> void sendMessage(WebSocketSession session, T message) {

        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }
}

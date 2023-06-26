package com.secondhand.chatting.dto;

import com.secondhand.chatting.ChattingMessage;
import com.secondhand.chatting.ChattingService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Getter
public class ChattingRoomDto {

    private String roomId;
    private String name;
    private Set<WebSocketSession> sessions = new HashSet<>();

    @Builder
    public ChattingRoomDto(String roomId, String name) {

        this.roomId = roomId;
        this.name = name;
    }

    public void handleActions(WebSocketSession session, ChattingMessage chattingMessage, ChattingService chattingService) {

        if (chattingMessage.getType().equals(ChattingMessage.MessageType.ENTER)) {
            sessions.add(session);
            chattingMessage.setMessage(chattingMessage.getSender() + "님이 입장했습니다.");
        }
        sendMessage(chattingMessage, chattingService);
    }

    public <T> void sendMessage(T message, ChattingService chattingService) {

        sessions.parallelStream().forEach(session -> chattingService.sendMessage(session, message));
    }
}

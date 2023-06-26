package com.secondhand.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.secondhand.chatting.ChattingMessage;
import com.secondhand.chatting.ChattingService;
import com.secondhand.chatting.dto.ChattingRoomDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@Component
public class WebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper;
    private final ChattingService chattingService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {

        String payload = message.getPayload();
        log.info("payload = {}", payload);

        ChattingMessage chattingMessage = objectMapper.readValue(payload, ChattingMessage.class);
        ChattingRoomDto chattingRoomDto = chattingService.findRoomById(chattingMessage.getRoomId());
        chattingRoomDto.handleActions(session, chattingMessage, chattingService);
    }
}

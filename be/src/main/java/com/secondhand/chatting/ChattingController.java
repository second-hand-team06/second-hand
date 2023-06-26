package com.secondhand.chatting;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class ChattingController {

    private final SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/chatting/message")
    public void message(ChattingMessage message) {

        if (ChattingMessage.MessageType.ENTER.equals(message.getType())) {
            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
        }

        messagingTemplate.convertAndSend("/sub/chatting/room/" + message.getRoomId(), message);
    }
}

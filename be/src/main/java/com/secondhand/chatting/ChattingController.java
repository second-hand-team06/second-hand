package com.secondhand.chatting;

import com.secondhand.chatting.dto.SaveChattingDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class ChattingController {

    private final ChattingService chattingService;

    @MessageMapping("/chatting")
    public void chatting(SaveChattingDto chattingDto) {

        chattingService.saveChatting(chattingDto);
    }
}

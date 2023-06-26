package com.secondhand.chatting;

import com.secondhand.chatting.dto.ChattingRoomDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chatting")
public class ChattingController {

    private final ChattingService chattingService;

    @PostMapping
    public ChattingRoomDto createRoom(String name) {

        return chattingService.createRoom(name);
    }

    @GetMapping
    public List<ChattingRoomDto> findAllRomm() {

        return chattingService.findAllRoom();
    }
}

package com.secondhand.chatting;

import com.secondhand.chatting.dto.SaveChattingDto;
import com.secondhand.chatting.entity.Chatting;
import com.secondhand.chatting.repository.ChattingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChattingService {

    private final ChattingRepository chattingRepository;

    public void saveChatting(SaveChattingDto saveChattingDto) {

        LocalDateTime transmittedAt = LocalDateTime.now();
        chattingRepository.save(new Chatting(saveChattingDto, transmittedAt));
    }
}

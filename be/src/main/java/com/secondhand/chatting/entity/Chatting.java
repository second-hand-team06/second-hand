package com.secondhand.chatting.entity;

import com.secondhand.chatting.dto.SaveChattingDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalDateTime;

@RedisHash("Chatting")
public class Chatting {

    @Id
    private String id;

    private Long senderId;
    private String content;
    private LocalDateTime transmittedAt;

    public Chatting(SaveChattingDto saveChattingDto, LocalDateTime transmittedAt) {

        this.senderId = saveChattingDto.getSenderId();
        this.content = saveChattingDto.getContent();
        this.transmittedAt = transmittedAt;
    }
}

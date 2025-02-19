package com.secondhand.chatting.service;

import com.secondhand.chatting.ChattingMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RedisPublisher {

    private final RedisTemplate<String, Object> redisTemplate;

    public void publish(ChannelTopic topic, ChattingMessage message) {

        redisTemplate.convertAndSend(topic.getTopic(), message);
    }
}

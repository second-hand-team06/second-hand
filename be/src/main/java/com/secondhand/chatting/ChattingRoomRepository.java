package com.secondhand.chatting;

import com.secondhand.chatting.dto.ChattingRoomDto;
import com.secondhand.chatting.service.RedisSubscriber;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@RequiredArgsConstructor
@Repository
public class ChattingRoomRepository {

    private final RedisMessageListenerContainer redisMessageListener;
    private final RedisSubscriber redisSubscriber;
    private static final String CHAT_ROOMS = "CHAT_ROOM";
    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, ChattingRoomDto> opsHashChattingRoom;
    private Map<String, ChannelTopic> topics;

    @PostConstruct
    private void init() {



        opsHashChattingRoom = redisTemplate.opsForHash();
        topics = new HashMap<>();
    }

    public List<ChattingRoomDto> findAllRoom() {

        return opsHashChattingRoom.values(CHAT_ROOMS);
    }

    public ChattingRoomDto findRoomById(String id) {

        return opsHashChattingRoom.get(CHAT_ROOMS, id);
    }

    public ChattingRoomDto createChattingRoom(String name) {

        ChattingRoomDto chattingRoomDto = ChattingRoomDto.create(name);
        opsHashChattingRoom.put(CHAT_ROOMS, chattingRoomDto.getRoomId(), chattingRoomDto);
        return chattingRoomDto;
    }

    public void enterChattingRoom(String roomId) {

        ChannelTopic topic = topics.get(roomId);

        if (topic == null) {
            topic = new ChannelTopic(roomId);
            redisMessageListener.addMessageListener(redisSubscriber, topic);
            topics.put(roomId, topic);
        }
    }

    public ChannelTopic getTopic(String roomId) {

        return topics.get(roomId);
    }
}

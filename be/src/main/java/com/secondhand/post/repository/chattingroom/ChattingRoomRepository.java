package com.secondhand.post.repository.chattingroom;

import com.secondhand.post.entity.ChattingRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChattingRoomRepository extends JpaRepository<ChattingRoom, Long> {

    Optional<ChattingRoom> findByPostMetaIdAndBuyerId(Long postMetaId, Long buyerId);
}

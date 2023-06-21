package com.secondhand.chatting.repository;

import com.secondhand.chatting.entity.Chatting;
import org.springframework.data.repository.CrudRepository;

public interface ChattingRepository extends CrudRepository<Chatting, String> {
}

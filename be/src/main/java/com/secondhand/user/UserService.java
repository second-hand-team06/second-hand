package com.secondhand.user;

import com.secondhand.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    final private UserRepository userRepository;


}
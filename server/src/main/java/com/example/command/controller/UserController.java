package com.example.command.controller;

import com.example.command.dto.UserDto;
import com.example.command.entity.User;
import com.example.command.mapper.UserMapper;
import com.example.command.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserMapper userMapper;

// Додати юзера в бд
    @PostMapping("/add")
    public UserDto addUser(@RequestBody UserDto userDto){
        User user = userMapper.toUser(userDto);
        return userMapper.toUserDto(userService.saveUser(user));
    }
}

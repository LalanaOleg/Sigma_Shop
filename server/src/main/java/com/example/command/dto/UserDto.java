package com.example.command.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

// клас для отримання даних про користувача з фронтенду
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UserDto {
    private String userId;
    private String password;
    private String userName;
    private String role;
}

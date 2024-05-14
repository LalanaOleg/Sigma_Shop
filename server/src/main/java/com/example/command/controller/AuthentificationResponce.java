package com.example.command.controller;


import com.example.command.UserSecurity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthentificationResponce {

    private String token;
    private String userId;
    private Role role;

}

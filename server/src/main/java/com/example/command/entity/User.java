package com.example.command.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


// головний клас юзер яким ми оперуємо і додаємо в бд
@Document(collection = "users")
@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class User {
    @Id
    private String userId;
    private String password;
    private String userName;
    private String role;
}

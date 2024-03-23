package com.example.command.repository;

import com.example.command.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// інтерфейс для взаємодії з бд
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>  {

}

package com.isep.feedback.api.server;

import com.isep.feedback.api.model.User;
import com.isep.feedback.api.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UsersApiImpl implements UsersApiDelegate{

    @Autowired
    UserRepo userRepo;

    @Override
    public ResponseEntity<User> createUser(User user) {
        return new ResponseEntity<User>(userRepo.save(user), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteUser(Long userId) {
        userRepo.deleteById(userId);
        return new ResponseEntity<String>("User deleted", HttpStatus.OK)
                ;
    }

    @Override
    public ResponseEntity<User> updateUser(User user) {
        return new ResponseEntity<User>(userRepo.save(user), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<User>> usersGet(String search) {
        return new ResponseEntity<List<User>>(userRepo.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<User> usersUserIdGet(Long userId) {
        return new ResponseEntity<User>(userRepo.getOne(userId), HttpStatus.OK);
    }
}

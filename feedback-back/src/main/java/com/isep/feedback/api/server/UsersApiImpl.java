package com.isep.feedback.api.server;

import com.isep.feedback.api.model.User;
import com.isep.feedback.api.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class UsersApiImpl implements UsersApiDelegate {

    @Autowired
    UserRepo userRepo;

    @Override
    public ResponseEntity<User> createUser(User user) {
        return new ResponseEntity<User>(userRepo.save(user), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteUser(Long userId) {
        userRepo.deleteById(userId);
        return new ResponseEntity<String>("User deleted", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<User> updateUser(User user) {
        return new ResponseEntity<User>(userRepo.save(user), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<User>> usersGet(String search) {
        if(search == null){
            List<User> users = userRepo.findAll();
            User user = null;
            for(int i = 0; i < users.size(); i++){
                user = users.get(i);
                user.setPassword(null);
                users.set(i, user);
            }
            return new ResponseEntity<List<User>>(userRepo.findAll(), HttpStatus.OK);
        }
        else{
            List<User> users = userRepo.findAll();
            users = users.stream().filter(e -> e.getFirstName().toUpperCase().contains(search.toUpperCase()) || e.getLastName().toUpperCase().contains(search.toUpperCase())).collect(Collectors.toList());
            User user = null;
            for(int i = 0; i < users.size(); i++){
                user = users.get(i);
                user.setPassword(null);
                users.set(i, user);
            }
            return new ResponseEntity<List<User>>(users, HttpStatus.OK);
        }

    }

    @Override
    public ResponseEntity<User> usersUserIdGet(Long userId) {
        User user = userRepo.getOne(userId);
        user.setPassword(null);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}

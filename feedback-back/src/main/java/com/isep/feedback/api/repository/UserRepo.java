package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {



}

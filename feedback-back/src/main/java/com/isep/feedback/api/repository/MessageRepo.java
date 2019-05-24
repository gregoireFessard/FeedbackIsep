package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {
}

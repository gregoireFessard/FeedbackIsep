package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationRepo extends JpaRepository<Conversation, Long> {
}

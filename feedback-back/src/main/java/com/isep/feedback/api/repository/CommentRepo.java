package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository<Comment, Long> {
}

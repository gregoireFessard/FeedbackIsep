package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.CourseDocument;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDocumentRepo extends JpaRepository<CourseDocument, Long> {
}

package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.CourseMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseMaterialRepo extends JpaRepository<CourseMaterial, Long> {
}

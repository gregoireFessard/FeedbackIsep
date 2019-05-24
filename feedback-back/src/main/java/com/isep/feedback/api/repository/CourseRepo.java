package com.isep.feedback.api.repository;


import com.isep.feedback.api.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Long> {
}

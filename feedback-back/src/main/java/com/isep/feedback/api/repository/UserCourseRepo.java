package com.isep.feedback.api.repository;

import com.isep.feedback.api.model.UserCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCourseRepo extends JpaRepository<UserCourse, Long> {
}

package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Comment;
import com.isep.feedback.api.model.Course;
import com.isep.feedback.api.model.CourseDocument;
import com.isep.feedback.api.repository.CommentRepo;
import com.isep.feedback.api.repository.CourseDocumentRepo;
import com.isep.feedback.api.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CoursesApiImpl implements CoursesApiDelegate{

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    CourseDocumentRepo courseDocumentRepo;

    @Autowired
    CourseRepo courseRepo;

    @Override
    public ResponseEntity<String> coursesCourseIdCommentsCommentIdDislikePost(Integer courseId, Integer commentId) {
        Comment comment  = commentRepo.getOne(Long.valueOf(commentId));
        comment.setNumberDislike(comment.getNumberDislike()-1);
        commentRepo.save(comment);
        return new ResponseEntity<String>("Comment disliked", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> coursesCourseIdCommentsCommentIdLikePost(Integer courseId, Integer commentId) {
        Comment comment  = commentRepo.getOne(Long.valueOf(commentId));
        comment.setNumberLike(comment.getNumberLike()+1);
        commentRepo.save(comment);
        return new ResponseEntity<String>("Comment disliked", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPost(Integer courseId, Integer commentId, Comment comment) {
        return new ResponseEntity<Comment>(commentRepo.save(comment), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPut(Integer courseId, Integer commentId, Comment comment) {
        return new ResponseEntity<Comment>(commentRepo.save(comment), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Comment>> coursesCourseIdCommentsGet(Integer courseId) {
        List<Comment> comments = commentRepo.findAll();
        comments = comments.stream().filter(e -> e.getCourseId() == Long.valueOf(courseId)).collect(Collectors.toList());
        return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Comment> coursesCourseIdCommentsPost(Integer courseId, Comment comment) {
        return new ResponseEntity<Comment>(commentRepo.save(comment), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> coursesCourseIdCourseDocumentsDocumentIdDelete(Integer courseId, Integer documentId) {
        courseDocumentRepo.deleteById(Long.valueOf(documentId));
        return new ResponseEntity<String>("Document deleted", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<CourseDocument>> coursesCourseIdCourseDocumentsGet(Integer courseId) {
        List<CourseDocument> courseDocuments = courseDocumentRepo.findAll();
        courseDocuments = courseDocuments.stream().filter(e -> e.getCourseId() == Long.valueOf(courseId)).collect(Collectors.toList());
        return new ResponseEntity<List<CourseDocument>>(courseDocuments, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CourseDocument> coursesCourseIdCourseDocumentsPost(Integer courseId, CourseDocument courseDocument) {
        return new ResponseEntity<CourseDocument>(courseDocumentRepo.save(courseDocument), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Course>> coursesGet() {
        return new ResponseEntity<List<Course>>(courseRepo.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Course> coursesPost(Course course) {
        return new ResponseEntity<Course>(courseRepo.save(course), HttpStatus.OK);
    }
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (3.3.4).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Comment;
import com.isep.feedback.api.model.Course;
import com.isep.feedback.api.model.CourseDocument;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;

@Validated
@Api(tags={ "comment", })
public interface CoursesApi {

    default CoursesApiDelegate getDelegate() {
        return new CoursesApiDelegate() {};
    }

    @ApiOperation(value = "Dislike a comment", nickname = "coursesCourseIdCommentsCommentIdDislikePost", notes = "Dislike to a comment", response = String.class, tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 404, message = "User, course or comment not found") })
    @RequestMapping(value = "/courses/{courseId}/comments/{commentId}/dislike",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    default ResponseEntity<String> coursesCourseIdCommentsCommentIdDislikePost(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "id of the course", required = true) @PathVariable("commentId") Integer commentId) {
        return getDelegate().coursesCourseIdCommentsCommentIdDislikePost(courseId, commentId);
    }


    @ApiOperation(value = "Like a comment", nickname = "coursesCourseIdCommentsCommentIdLikePost", notes = "Like to a comment", response = String.class, tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 404, message = "User, course or comment not found") })
    @RequestMapping(value = "/courses/{courseId}/comments/{commentId}/like",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    default ResponseEntity<String> coursesCourseIdCommentsCommentIdLikePost(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "id of the course", required = true) @PathVariable("commentId") Integer commentId) {
        return getDelegate().coursesCourseIdCommentsCommentIdLikePost(courseId, commentId);
    }


    @ApiOperation(value = "Reply to a comment", nickname = "coursesCourseIdCommentsCommentIdPost", notes = "Reply to a comment", response = Comment.class, tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Comment.class),
        @ApiResponse(code = 404, message = "User, course or comment not found") })
    @RequestMapping(value = "/courses/{courseId}/comments/{commentId}",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPost(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "id of the course", required = true) @PathVariable("commentId") Integer commentId, @ApiParam(value = "", required = true) @Valid @RequestBody Comment comment) {
        return getDelegate().coursesCourseIdCommentsCommentIdPost(courseId, commentId, comment);
    }


    @ApiOperation(value = "Modify a comment", nickname = "coursesCourseIdCommentsCommentIdPut", notes = "Modify a comment", response = Comment.class, tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Comment.class),
        @ApiResponse(code = 404, message = "course or comment not found") })
    @RequestMapping(value = "/courses/{courseId}/comments/{commentId}",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPut(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "id of the course", required = true) @PathVariable("commentId") Integer commentId, @ApiParam(value = "", required = true) @Valid @RequestBody Comment comment) {
        return getDelegate().coursesCourseIdCommentsCommentIdPut(courseId, commentId, comment);
    }


    @ApiOperation(value = "Get comments of a course", nickname = "coursesCourseIdCommentsGet", notes = "Get comments of a course", response = Comment.class, responseContainer = "List", tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Comment.class, responseContainer = "List"),
        @ApiResponse(code = 404, message = "course not found") })
    @RequestMapping(value = "/courses/{courseId}/comments",
        produces = { "application/json" },
        method = RequestMethod.GET)
    default ResponseEntity<List<Comment>> coursesCourseIdCommentsGet(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId) {
        return getDelegate().coursesCourseIdCommentsGet(courseId);
    }


    @ApiOperation(value = "Post a comment to a course", nickname = "coursesCourseIdCommentsPost", notes = "Post a comment to a course", response = Comment.class, tags={ "comment", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Comment.class),
        @ApiResponse(code = 404, message = "course not found") })
    @RequestMapping(value = "/courses/{courseId}/comments",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<Comment> coursesCourseIdCommentsPost(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "", required = true) @Valid @RequestBody Comment comment) {
        return getDelegate().coursesCourseIdCommentsPost(courseId, comment);
    }


    @ApiOperation(value = "Deletes a document", nickname = "coursesCourseIdCourseDocumentsDocumentIdDelete", notes = "Deletes a document", response = String.class, tags={ "courseDocument", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 404, message = "Course or document not found") })
    @RequestMapping(value = "/courses/{courseId}/courseDocuments/{documentId}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    default ResponseEntity<String> coursesCourseIdCourseDocumentsDocumentIdDelete(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "id of the document to delete", required = true) @PathVariable("documentId") Integer documentId) {
        return getDelegate().coursesCourseIdCourseDocumentsDocumentIdDelete(courseId, documentId);
    }


    @ApiOperation(value = "Get documents of a course", nickname = "coursesCourseIdCourseDocumentsGet", notes = "Get documents of a course", response = CourseDocument.class, responseContainer = "List", tags={ "courseDocument", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = CourseDocument.class, responseContainer = "List") })
    @RequestMapping(value = "/courses/{courseId}/courseDocuments",
        produces = { "application/json" },
        method = RequestMethod.GET)
    default ResponseEntity<List<CourseDocument>> coursesCourseIdCourseDocumentsGet(@ApiParam(value = "id of the course", required = true) @PathVariable("courseId") Integer courseId) {
        return getDelegate().coursesCourseIdCourseDocumentsGet(courseId);
    }


    @ApiOperation(value = "Create a course document", nickname = "coursesCourseIdCourseDocumentsPost", notes = "Create a course document", response = CourseDocument.class, tags={ "courseDocument", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = CourseDocument.class) })
    @RequestMapping(value = "/courses/{courseId}/courseDocuments",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<CourseDocument> coursesCourseIdCourseDocumentsPost(@ApiParam(value = "id of the course to add a document to", required = true) @PathVariable("courseId") Integer courseId, @ApiParam(value = "", required = true) @Valid @RequestBody CourseDocument courseDocument) {
        return getDelegate().coursesCourseIdCourseDocumentsPost(courseId, courseDocument);
    }


    @ApiOperation(value = "Get user's courses", nickname = "coursesGet", notes = "Get user's courses", response = Course.class, responseContainer = "List", tags={ "course", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Course.class, responseContainer = "List"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/courses",
        produces = { "application/json" },
        method = RequestMethod.GET)
    default ResponseEntity<List<Course>> coursesGet() {
        return getDelegate().coursesGet();
    }


    @ApiOperation(value = "Create a course", nickname = "coursesPost", notes = "Create a course", response = Course.class, tags={ "course", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Course.class) })
    @RequestMapping(value = "/courses",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<Course> coursesPost(@ApiParam(value = "", required = true) @Valid @RequestBody Course course) {
        return getDelegate().coursesPost(course);
    }

}

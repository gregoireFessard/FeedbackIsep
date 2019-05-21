package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Comment;
import com.isep.feedback.api.model.Course;
import com.isep.feedback.api.model.CourseDocument;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * A delegate to be called by the {@link CoursesApiController}}.
 * Implement this interface with a {@link org.springframework.stereotype.Service} annotated class.
 */

public interface CoursesApiDelegate {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsCommentIdDislikePost
     */
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdDislikePost(Integer courseId,
        Integer commentId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsCommentIdLikePost
     */
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdLikePost(Integer courseId,
        Integer commentId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsCommentIdPost
     */
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPost(Integer courseId,
        Integer commentId,
        Comment comment) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsCommentIdPut
     */
    default ResponseEntity<Comment> coursesCourseIdCommentsCommentIdPut(Integer courseId,
        Integer commentId,
        Comment comment) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsGet
     */
    default ResponseEntity<List<Comment>> coursesCourseIdCommentsGet(Integer courseId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCommentsPost
     */
    default ResponseEntity<Comment> coursesCourseIdCommentsPost(Integer courseId,
        Comment comment) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"course_id\" : 1,  \"user_id\" : 6,  \"parent_id\" : \"parent_id\",  \"number_like\" : 5,  \"id\" : 0,  \"number_dislike\" : 5,  \"content\" : \"content\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Comment>  <id>123456789</id>  <user_id>123456789</user_id>  <course_id>123456789</course_id>  <content>aeiou</content>  <dateTime>aeiou</dateTime>  <number_like>123</number_like>  <number_dislike>123</number_dislike>  <parent_id>aeiou</parent_id></Comment>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCourseDocumentsDocumentIdDelete
     */
    default ResponseEntity<String> coursesCourseIdCourseDocumentsDocumentIdDelete(Integer courseId,
        Integer documentId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCourseDocumentsGet
     */
    default ResponseEntity<List<CourseDocument>> coursesCourseIdCourseDocumentsGet(Integer courseId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"course_id\" : 1,  \"user_id\" : 6,  \"document\" : \"document\",  \"name\" : \"name\",  \"id\" : 0}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<CourseDocument>  <id>123456789</id>  <name>aeiou</name>  <document>aeiou</document>  <user_id>123</user_id>  <course_id>123</course_id></CourseDocument>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesCourseIdCourseDocumentsPost
     */
    default ResponseEntity<CourseDocument> coursesCourseIdCourseDocumentsPost(Integer courseId,
        CourseDocument courseDocument) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"course_id\" : 1,  \"user_id\" : 6,  \"document\" : \"document\",  \"name\" : \"name\",  \"id\" : 0}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<CourseDocument>  <id>123456789</id>  <name>aeiou</name>  <document>aeiou</document>  <user_id>123</user_id>  <course_id>123</course_id></CourseDocument>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesGet
     */
    default ResponseEntity<List<Course>> coursesGet() {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"duration\" : \"duration\",  \"teacher_id\" : 6,  \"material_id\" : 1,  \"id\" : 0}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Course>  <id>123456789</id>  <teacher_id>123456789</teacher_id>  <material_id>123456789</material_id>  <dateTime>aeiou</dateTime>  <duration>aeiou</duration></Course>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see CoursesApi#coursesPost
     */
    default ResponseEntity<Course> coursesPost(Course course) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"duration\" : \"duration\",  \"teacher_id\" : 6,  \"material_id\" : 1,  \"id\" : 0}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<Course>  <id>123456789</id>  <teacher_id>123456789</teacher_id>  <material_id>123456789</material_id>  <dateTime>aeiou</dateTime>  <duration>aeiou</duration></Course>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

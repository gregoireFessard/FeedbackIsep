package com.isep.feedback.api.server;

import com.isep.feedback.api.model.User;
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
 * A delegate to be called by the {@link UsersApiController}}.
 * Implement this interface with a {@link org.springframework.stereotype.Service} annotated class.
 */

public interface UsersApiDelegate {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * @see UsersApi#createUser
     */
    default ResponseEntity<User> createUser(User user) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"firstName\" : \"firstName\",  \"lastName\" : \"lastName\",  \"password\" : \"password\",  \"color\" : \"color\",  \"phone\" : \"phone\",  \"parent_id\" : \"parent_id\",  \"isep_id\" : 1,  \"id\" : 0,  \"avatar\" : \"avatar\",  \"enabled\" : 6,  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#deleteUser
     */
    default ResponseEntity<String> deleteUser(Long userId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#updateUser
     */
    default ResponseEntity<User> updateUser(User user) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"firstName\" : \"firstName\",  \"lastName\" : \"lastName\",  \"password\" : \"password\",  \"color\" : \"color\",  \"phone\" : \"phone\",  \"parent_id\" : \"parent_id\",  \"isep_id\" : 1,  \"id\" : 0,  \"avatar\" : \"avatar\",  \"enabled\" : 6,  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }

            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#usersGet
     */
    default ResponseEntity<List<User>> usersGet(String search) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"firstName\" : \"firstName\",  \"lastName\" : \"lastName\",  \"password\" : \"password\",  \"color\" : \"color\",  \"phone\" : \"phone\",  \"parent_id\" : \"parent_id\",  \"isep_id\" : 1,  \"id\" : 0,  \"avatar\" : \"avatar\",  \"enabled\" : 6,  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#usersUserIdGet
     */
    default ResponseEntity<User> usersUserIdGet(Long userId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"firstName\" : \"firstName\",  \"lastName\" : \"lastName\",  \"password\" : \"password\",  \"color\" : \"color\",  \"phone\" : \"phone\",  \"parent_id\" : \"parent_id\",  \"isep_id\" : 1,  \"id\" : 0,  \"avatar\" : \"avatar\",  \"enabled\" : 6,  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }

            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

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
    default ResponseEntity<Void> createUser(User user) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#deleteUser
     */
    default ResponseEntity<Void> deleteUser(String userId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#loginUser
     */
    default ResponseEntity<String> loginUser(String username,
                                             String password) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#logoutUser
     */
    default ResponseEntity<Void> logoutUser() {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#updateUser
     */
    default ResponseEntity<User> updateUser(String userId,
                                            User user) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"lastName\" : \"lastName\",  \"role\" : \"role\",  \"color\" : \"color\",  \"courses_id\" : [ \"courses_id\", \"courses_id\" ],  \"isep_id\" : 6,  \"avatar\" : \"avatar\",  \"firstName\" : \"firstName\",  \"password\" : \"password\",  \"phone\" : \"phone\",  \"id\" : 0,  \"stakeholders_id\" : [ \"stakeholders_id\", \"stakeholders_id\" ],  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<User>  <id>123456789</id>  <username>aeiou</username>  <firstName>aeiou</firstName>  <lastName>aeiou</lastName>  <isep_id>123456789</isep_id>  <email>aeiou</email>  <password>aeiou</password>  <phone>aeiou</phone>  <role>aeiou</role>  <avatar>aeiou</avatar>  <color>aeiou</color>  <courses_id>aeiou</courses_id>  <stakeholders_id>aeiou</stakeholders_id></User>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#usersGet
     */
    default ResponseEntity<User> usersGet(String search) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"lastName\" : \"lastName\",  \"role\" : \"role\",  \"color\" : \"color\",  \"courses_id\" : [ \"courses_id\", \"courses_id\" ],  \"isep_id\" : 6,  \"avatar\" : \"avatar\",  \"firstName\" : \"firstName\",  \"password\" : \"password\",  \"phone\" : \"phone\",  \"id\" : 0,  \"stakeholders_id\" : [ \"stakeholders_id\", \"stakeholders_id\" ],  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<User>  <id>123456789</id>  <username>aeiou</username>  <firstName>aeiou</firstName>  <lastName>aeiou</lastName>  <isep_id>123456789</isep_id>  <email>aeiou</email>  <password>aeiou</password>  <phone>aeiou</phone>  <role>aeiou</role>  <avatar>aeiou</avatar>  <color>aeiou</color>  <courses_id>aeiou</courses_id>  <stakeholders_id>aeiou</stakeholders_id></User>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see UsersApi#usersUserIdGet
     */
    default ResponseEntity<User> usersUserIdGet(String userId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"lastName\" : \"lastName\",  \"role\" : \"role\",  \"color\" : \"color\",  \"courses_id\" : [ \"courses_id\", \"courses_id\" ],  \"isep_id\" : 6,  \"avatar\" : \"avatar\",  \"firstName\" : \"firstName\",  \"password\" : \"password\",  \"phone\" : \"phone\",  \"id\" : 0,  \"stakeholders_id\" : [ \"stakeholders_id\", \"stakeholders_id\" ],  \"email\" : \"email\",  \"username\" : \"username\"}");
                    break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/xml"))) {
                    ApiUtil.setExampleResponse(request, "application/xml", "<User>  <id>123456789</id>  <username>aeiou</username>  <firstName>aeiou</firstName>  <lastName>aeiou</lastName>  <isep_id>123456789</isep_id>  <email>aeiou</email>  <password>aeiou</password>  <phone>aeiou</phone>  <role>aeiou</role>  <avatar>aeiou</avatar>  <color>aeiou</color>  <courses_id>aeiou</courses_id>  <stakeholders_id>aeiou</stakeholders_id></User>");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

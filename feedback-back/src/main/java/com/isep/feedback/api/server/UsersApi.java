/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (3.3.4).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.isep.feedback.api.server;

import com.isep.feedback.api.model.User;
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
@Api(tags={ "user", })
public interface UsersApi {

    default UsersApiDelegate getDelegate() {
        return new UsersApiDelegate() {};
    }

    @ApiOperation(value = "Create user", nickname = "createUser", notes = "This can only be done by the logged in user.", response = User.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = User.class) })
    @RequestMapping(value = "/users",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<User> createUser(@ApiParam(value = "Created user object", required = true) @Valid @RequestBody User user) {
        return getDelegate().createUser(user);
    }


    @ApiOperation(value = "Delete user", nickname = "deleteUser", notes = "This can only be done by the logged in user.", response = String.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 400, message = "Invalid userId supplied"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/users/{userId}",
        produces = { "application/json" }, 
        method = RequestMethod.DELETE)
    default ResponseEntity<String> deleteUser(@ApiParam(value = "The id that needs to be deleted", required = true) @PathVariable("userId") Long userId) {
        return getDelegate().deleteUser(userId);
    }


    @ApiOperation(value = "Update an user", nickname = "updateUser", notes = "This can only be done by the logged in user.", response = User.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = User.class),
        @ApiResponse(code = 400, message = "Invalid user supplied"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/users",
        produces = { "application/json" },
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<User> updateUser(@ApiParam(value = "Updated user object", required = true) @Valid @RequestBody User user) {
        return getDelegate().updateUser(user);
    }


    @ApiOperation(value = "Search an user", nickname = "usersGet", notes = "", response = User.class, responseContainer = "List", tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = User.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Invalid username supplied"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/users",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    default ResponseEntity<List<User>> usersGet(@NotNull @ApiParam(value = "Name of the user to search", required = true) @Valid @RequestParam(value = "search", required = true) String search) {
        return getDelegate().usersGet(search);
    }


    @ApiOperation(value = "Get user by id", nickname = "usersUserIdGet", notes = "", response = User.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = User.class),
        @ApiResponse(code = 400, message = "Invalid userId supplied"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/users/{userId}",
        produces = { "application/json" },
        method = RequestMethod.GET)
    default ResponseEntity<User> usersUserIdGet(@ApiParam(value = "The id that needs to be fetched.", required = true) @PathVariable("userId") Long userId) {
            return getDelegate().usersUserIdGet(userId);
    }

}

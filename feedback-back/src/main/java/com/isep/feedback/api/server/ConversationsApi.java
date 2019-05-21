/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (3.3.4).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Conversation;
import com.isep.feedback.api.model.InlineObject;
import com.isep.feedback.api.model.InlineResponse200;
import com.isep.feedback.api.model.Message;
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
@Api(value = "conversations", description = "the conversations API",  tags={ "messages", })
public interface ConversationsApi {

    default ConversationsApiDelegate getDelegate() {
        return new ConversationsApiDelegate() {};
    }

    @ApiOperation(value = "Deletes a conversation", nickname = "conversationsConversationIdDelete", notes = "Deletes a conversation", response = String.class, tags={ "messages", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 404, message = "Conversation not found") })
    @RequestMapping(value = "/conversations/{conversationId}",
        produces = { "application/json", "application/xml" }, 
        method = RequestMethod.DELETE)
    default ResponseEntity<String> conversationsConversationIdDelete(@ApiParam(value = "id of the conversation to delete",required=true) @PathVariable("conversationId") Integer conversationId) {
        return getDelegate().conversationsConversationIdDelete(conversationId);
    }


    @ApiOperation(value = "Get user's messages of a conversation", nickname = "conversationsConversationIdMessagesGet", notes = "Get user's messages of a conversation", response = Message.class, responseContainer = "List", tags={ "messages", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Message.class, responseContainer = "List"),
        @ApiResponse(code = 404, message = "conversation not found") })
    @RequestMapping(value = "/conversations/{conversationId}/messages",
        produces = { "application/json", "application/xml" }, 
        method = RequestMethod.GET)
    default ResponseEntity<List<Message>> conversationsConversationIdMessagesGet(@ApiParam(value = "id of the conversation to reply to",required=true) @PathVariable("conversationId") Integer conversationId) {
        return getDelegate().conversationsConversationIdMessagesGet(conversationId);
    }


    @ApiOperation(value = "Reply to a conversation", nickname = "conversationsConversationIdMessagesPost", notes = "Reply to a conversation", response = Message.class, tags={ "messages", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Message.class),
        @ApiResponse(code = 404, message = "Message not found") })
    @RequestMapping(value = "/conversations/{conversationId}/messages",
        produces = { "application/json", "application/xml" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<Message> conversationsConversationIdMessagesPost(@ApiParam(value = "id of the conversation to reply to",required=true) @PathVariable("conversationId") Integer conversationId,@ApiParam(value = "" ,required=true )  @Valid @RequestBody Message message) {
        return getDelegate().conversationsConversationIdMessagesPost(conversationId, message);
    }


    @ApiOperation(value = "Get user's conversations", nickname = "conversationsGet", notes = "Get user's conversations", response = Conversation.class, responseContainer = "List", tags={ "messages", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Conversation.class, responseContainer = "List"),
        @ApiResponse(code = 404, message = "User not found") })
    @RequestMapping(value = "/conversations",
        produces = { "application/json", "application/xml" }, 
        method = RequestMethod.GET)
    default ResponseEntity<List<Conversation>> conversationsGet() {
        return getDelegate().conversationsGet();
    }


    @ApiOperation(value = "Create a conversation", nickname = "conversationsPost", notes = "Create a conversation", response = InlineResponse200.class, tags={ "messages", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = InlineResponse200.class) })
    @RequestMapping(value = "/conversations",
        produces = { "application/json", "application/xml" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<InlineResponse200> conversationsPost(@ApiParam(value = ""  )  @Valid @RequestBody InlineObject inlineObject) {
        return getDelegate().conversationsPost(inlineObject);
    }

}

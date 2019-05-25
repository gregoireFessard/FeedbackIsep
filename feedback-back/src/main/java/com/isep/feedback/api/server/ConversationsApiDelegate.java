package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Conversation;
import com.isep.feedback.api.model.InlineObject;
import com.isep.feedback.api.model.InlineResponse200;
import com.isep.feedback.api.model.Message;
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
 * A delegate to be called by the {@link ConversationsApiController}}.
 * Implement this interface with a {@link org.springframework.stereotype.Service} annotated class.
 */

public interface ConversationsApiDelegate {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * @see ConversationsApi#conversationsConversationIdDelete
     */
    default ResponseEntity<String> conversationsConversationIdDelete(Integer conversationId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see ConversationsApi#conversationsConversationIdMessagesGet
     */
    default ResponseEntity<List<Message>> conversationsConversationIdMessagesGet(Integer conversationId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"read\" : true,  \"conversation_id\" : 6,  \"is_from_sender\" : true,  \"id\" : 0,  \"content\" : \"content\"}");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see ConversationsApi#conversationsConversationIdMessagesPost
     */
    default ResponseEntity<Message> conversationsConversationIdMessagesPost(Integer conversationId,
                                                                            Message message) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"read\" : true,  \"conversation_id\" : 6,  \"is_from_sender\" : true,  \"id\" : 0,  \"content\" : \"content\"}");
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see ConversationsApi#conversationsGet
     */
    default ResponseEntity<List<Conversation>> conversationsGet() {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"dateTime\" : \"dateTime\",  \"from_id\" : 6,  \"subject\" : \"subject\",  \"to_id\" : 1,  \"id\" : 0,  \"messages_id\" : \"messages_id\",  \"status\" : \"status\"}");
                    break;
                }

            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * @see ConversationsApi#conversationsPost
     */
    default ResponseEntity<InlineResponse200> conversationsPost(InlineObject inlineObject) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    ApiUtil.setExampleResponse(request, "application/json", "{  \"message\" : {    \"dateTime\" : \"dateTime\",    \"read\" : true,    \"conversation_id\" : 6,    \"is_from_sender\" : true,    \"id\" : 0,    \"content\" : \"content\"  },  \"conversation\" : {    \"dateTime\" : \"dateTime\",    \"from_id\" : 6,    \"subject\" : \"subject\",    \"to_id\" : 1,    \"id\" : 0,    \"messages_id\" : \"messages_id\",    \"status\" : \"status\"  }}");
                    break;
                }

            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

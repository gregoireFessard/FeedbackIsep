package com.isep.feedback.api.server;

import com.isep.feedback.api.model.Conversation;
import com.isep.feedback.api.model.InlineObject;
import com.isep.feedback.api.model.InlineResponse200;
import com.isep.feedback.api.model.Message;
import com.isep.feedback.api.repository.ConversationRepo;
import com.isep.feedback.api.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.NativeWebRequest;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ConversationsApiImpl implements ConversationsApiDelegate {

    @Autowired
    ConversationRepo conversationRepo;

    @Autowired
    MessageRepo messageRepo;

    @Override
    public ResponseEntity<String> conversationsConversationIdDelete(Integer conversationId) {
        conversationRepo.deleteById(Long.valueOf(conversationId));
        return new ResponseEntity<String>("Conversation Deleted", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Message>> conversationsConversationIdMessagesGet(Integer conversationId) {
        List<Message> messages = messageRepo.findAll();
        messages = messages.stream().filter(e -> e.getConversationId() == Long.valueOf(conversationId)).collect(Collectors.toList());
        return new ResponseEntity<List<Message>>(messages, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Message> conversationsConversationIdMessagesPost(Integer conversationId, Message message) {
        return new ResponseEntity<Message>(messageRepo.save(message), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Conversation>> conversationsGet() {
        return new ResponseEntity<List<Conversation>>(conversationRepo.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<InlineResponse200> conversationsPost(InlineObject inlineObject) {
        InlineResponse200 inlineResponse200 = new InlineResponse200();
        inlineResponse200.setConversation(conversationRepo.save(inlineObject.getConversation()));
        inlineResponse200.setMessage(messageRepo.save(inlineObject.getMessage()));
        return new ResponseEntity<InlineResponse200>(inlineResponse200, HttpStatus.OK);
    }
}

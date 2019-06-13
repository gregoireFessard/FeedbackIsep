package com.isep.feedback.api.server;

import com.isep.feedback.api.model.*;
import com.isep.feedback.api.repository.ConversationRepo;
import com.isep.feedback.api.repository.MessageRepo;
import com.isep.feedback.api.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConversationsApiImpl implements ConversationsApiDelegate {

    @Autowired
    ConversationRepo conversationRepo;

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    UserRepo userRepo;

    @Override
    public ResponseEntity<String> conversationsConversationIdDelete(Integer conversationId) {
        conversationRepo.deleteById(Long.valueOf(conversationId));
        return new ResponseEntity<String>("Conversation Deleted", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Message>> conversationsConversationIdMessagesGet(Integer conversationId) {
        List<Message> messages = messageRepo.findAll();
        messages = messages.stream().filter(e -> e.getConversation().getId() == Long.valueOf(conversationId)).collect(Collectors.toList());
        return new ResponseEntity<List<Message>>(messages, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Message> conversationsConversationIdMessagesPost(Integer conversationId, Message message) {
        return new ResponseEntity<Message>(messageRepo.save(message), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Conversation>> conversationsGet(Integer userId) {
        List<Conversation> conversations = conversationRepo.findAll();
        if (userId == null) {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            List <User> users = userRepo.findAll();
            users = users.stream().filter(e -> e.getUsername().toUpperCase().contains(authentication.getName().toUpperCase())).collect(Collectors.toList());

            if(users.size() > 0){
                Long user_id = users.get(0).getId();
                conversations = conversations.stream().filter(e -> e.getFrom().getId() == user_id || e.getTo().getId() == user_id).collect(Collectors.toList());
            }

        } else{
            conversations = conversations.stream().filter(e -> e.getFrom().getId() == Long.valueOf(userId) || e.getTo().getId() == Long.valueOf(userId)).collect(Collectors.toList());
        }
        return new ResponseEntity<List<Conversation>>(conversations, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<InlineResponse200> conversationsPost(InlineObject inlineObject) {
        InlineResponse200 inlineResponse200 = new InlineResponse200();
        inlineResponse200.setConversation(conversationRepo.save(inlineObject.getConversation()));
        inlineResponse200.setMessage(messageRepo.save(inlineObject.getMessage()));
        return new ResponseEntity<InlineResponse200>(inlineResponse200, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Message> conversationsConversationIdMessagesUpdate(Integer conversationId, Integer messageId) {
        Message message = messageRepo.findById(Long.valueOf(messageId)).orElse(null);
        message.setMessageRead(true);
        return new ResponseEntity<Message>(message, HttpStatus.OK);
    }
}

package com.isep.feedback.api.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Optional;

@Controller
@RequestMapping("${openapi.feedBack.base-path:/api/}")
public class ConversationsApiController implements ConversationsApi {

    private final ConversationsApiDelegate delegate;

    public ConversationsApiController(@org.springframework.beans.factory.annotation.Autowired(required = false) ConversationsApiDelegate delegate) {
        this.delegate = Optional.ofNullable(delegate).orElse(new ConversationsApiDelegate() {});
    }

    @Override
    public ConversationsApiDelegate getDelegate() {
        return delegate;
    }

}

package com.isep.feedback.api.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Optional;

@Controller
@RequestMapping("${openapi.feedBack.base-path:/api/}")
public class CoursesApiController implements CoursesApi {

    private final CoursesApiDelegate delegate;

    public CoursesApiController(@org.springframework.beans.factory.annotation.Autowired(required = false) CoursesApiDelegate delegate) {
        this.delegate = Optional.ofNullable(delegate).orElse(new CoursesApiDelegate() {});
    }

    @Override
    public CoursesApiDelegate getDelegate() {
        return delegate;
    }

}

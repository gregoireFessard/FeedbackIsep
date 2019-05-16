package com.isep.feedback;

import com.isep.feedback.configuration.FeedBackConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;



import springfox.documentation.swagger2.annotations.EnableSwagger2;



@SpringBootApplication

@EnableSwagger2

@ComponentScan(basePackages = { "com.isep.feedback.configuration"})

public class FeedBackApplicationRun {



    public static void main(String[] args) {

        SpringApplication.run(FeedBackApplicationRun.class, args);

    }

}
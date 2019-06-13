package com.isep.feedback;

import com.isep.feedback.api.model.Comment;
import com.isep.feedback.api.model.Course;
import com.isep.feedback.api.model.CourseMaterial;
import com.isep.feedback.api.model.User;
import com.isep.feedback.api.repository.*;
import com.isep.feedback.configuration.FeedBackConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@SpringBootApplication

@EnableSwagger2

@ComponentScan(basePackages = { "com.isep.feedback.configuration"})

public class FeedBackApplicationRun implements CommandLineRunner {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    UserRepo userRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    ConversationRepo conversationRepo;

    @Autowired
    CourseMaterialRepo courseMaterialRepo;

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    CourseDocumentRepo courseDocumentRepo;

    public static void main(String[] args) {

        SpringApplication.run(FeedBackApplicationRun.class, args);

    }

    @Override
    public void run(String... args) throws Exception {

        /*BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        System.out.println(bCryptPasswordEncoder.encode("root"));*/
/*
        CourseMaterial courseMaterial1 = new CourseMaterial("Genie logiciel");

        User user1 = new User("gfessar", true, "Gregoire", "Fessar", Long.valueOf(1), "gregoire.fessard@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#111111", null);

        SimpleDateFormat formatter=new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");*/

        //courseMaterial1.addUser(user1);
        //user1.addMaterial(courseMaterial1);

        /*courseMaterialRepo.save(courseMaterial1);
        courseMaterialRepo.save(new CourseMaterial("Cybersecurite"));
        courseMaterialRepo.save(new CourseMaterial("Architecture des SI"));
        courseMaterialRepo.save(new CourseMaterial("Analyse Geopolitique"));
        courseMaterialRepo.save(new CourseMaterial("Technologies Web"));
        courseMaterialRepo.save(new CourseMaterial("Big Data"));
        courseMaterialRepo.save(new CourseMaterial("Espagnol"));
        courseMaterialRepo.save(new CourseMaterial("Anglais"));*/

        //List<CourseMaterial> courseMaterial1 = new ArrayList<CourseMaterial>();

        //courseMaterial1.add(em.getReference(CourseMaterial.class, 0));

        /*userRepo.save(user1);
        userRepo.save(new User("ktan", true, "Kevin", "Tan", Long.valueOf(2), "kevin.tan@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#222222", null));
        userRepo.save(new User("acanard", true, "Antoine", "Canard", Long.valueOf(3), "antoine.canard@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#a6e590", null));
        userRepo.save(new User("aveloso", true, "Alex", "Veloso", Long.valueOf(4), "alex.veloso@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#444444", null));
        userRepo.save(new User("ccisse", true, "Cameron", "Cisse", Long.valueOf(5), "cameron.cisse@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#555555", null));
        userRepo.save(new User("mnguyen", true, "Mathieu", "Nguyen", Long.valueOf(6), "mathieu.nguyen@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#666666", null));
        userRepo.save(new User("zkaziaoul", true, "Zakia", "Ziaoul", Long.valueOf(7), "zakia.ziaoul@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#777777", null));
        userRepo.save(new User("adubernet", true, "Alice", "Dubernet", Long.valueOf(8), "alice.dubernet@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#888888", null));
        userRepo.save(new User("mpepineau", true, "Mathieu", "Nguyen", Long.valueOf(9), "mathieu.nguyen@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#999999", null));
        userRepo.save(new User("jleite", true, "Jean Charles", "Leite", Long.valueOf(10), "jean.leite@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#aaaaaa", null));
        userRepo.save(new User("aplatel", true, "Adriana", "Platel", Long.valueOf(11), "adriana.platel@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#bbbbbb", null));
        userRepo.save(new User("eabgrall", true, "Emma", "Abgrall", Long.valueOf(12), "emma.abgrall@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#cccccc", null));
        userRepo.save(new User("jlemee", true, "Jacky", "Lemee", Long.valueOf(13), "jacky.lemee@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#dddddd", null));
        //userRepo.save(new User("aadmin", true, "Mathieu", "Nguyen", Long.valueOf(14), "kevin.tan@isep.fr", "{noop}root", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==", "#222222", null));


        System.out.println(formatter.parse("2019-04-01 09:00:00"));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(6)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(5)).orElse(new CourseMaterial()),new Date("2019-04-01 09:00:00"), new Date("2019-04-01 12:00:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(8)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(4)).orElse(new CourseMaterial()),new Date("2019-04-01 17:30:00"), new Date("2019-04-01 19:00:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(9)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(6)).orElse(new CourseMaterial()),new Date("2019-04-02 09:00:00"), new Date("2019-04-02 12:00:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(7)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(1)).orElse(new CourseMaterial()),new Date("2019-04-02 13:00:00"), new Date("2019-04-02 16:00:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(10)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(3)).orElse(new CourseMaterial()),new Date("2019-04-02 16:30:00"), new Date("2019-04-02 19:30:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(11)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(7)).orElse(new CourseMaterial()),new Date("2019-04-03 15:15:00"), new Date("2019-04-03 17:15:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(12)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(8)).orElse(new CourseMaterial()),new Date("2019-04-04 10:30:00"), new Date("2019-04-04 12:30:00")));
        //courseRepo.save(new Course(userRepo.findById(Long.valueOf(13)).orElse(new User()),courseMaterialRepo.findById(Long.valueOf(2)).orElse(new CourseMaterial()),new Date("2019-04-05 09:00:00"), new Date("2019-04-05 12:00:00")));

        //userRepo.save(userRepo.findById(Long.valueOf(3)).orElse(null).set);*/

    }
}
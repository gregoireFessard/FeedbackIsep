DROP DATABASE IF EXISTS `feedbackisep`;

CREATE DATABASE feedbackisep;
USE feedbackisep;

CREATE TABLE `users`
(
  id        bigint UNIQUE KEY AUTO_INCREMENT,
  username  varchar(255),
  firstname varchar(255) NOT NULL,
  lastname  varchar(255) NOT NULL,
  isep_id   bigint          NOT NULL,
  mail      varchar(255) NOT NULL,
  password  varchar(255) NOT NULL,
  avatar    varchar(255),
  color     varchar(255),
  parent_id bigint,
  enabled   boolean   NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;


DROP TABLE IF EXISTS `authorities`;
CREATE TABLE `authorities`
(
  `username`  varchar(255) NOT NULL,
  `authority` varchar(255) NOT NULL,
  UNIQUE KEY `authorities_idx_1` (`username`, `authority`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;

CREATE TABLE user_course
(
  id        bigint PRIMARY KEY AUTO_INCREMENT,
  user_id   bigint NOT NULL,
  course_id bigint NOT NULL

);

CREATE TABLE courses
(
  id          bigint PRIMARY KEY AUTO_INCREMENT,
  teacher_id  bigint,
  date_time  datetime NOT NULL,
  date_end     datetime NOT NULL,
  material_id bigint
);

CREATE TABLE course_documents
(
  id        bigint PRIMARY KEY AUTO_INCREMENT,
  name      VARCHAR(255) NOT NULL,
  document  VARCHAR(255) NOT NULL,
  user_id   bigint  NOT NULL,
  course_id bigint  NOT NULL
);

CREATE TABLE course_materials
(
  id   bigint PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE `comments`
(
  id             bigint PRIMARY KEY AUTO_INCREMENT,
  user_id        bigint          NOT NULL,
  course_id      bigint          NOT NULL,
  content        VARCHAR(255) NOT NULL,
  date_time     datetime     NOT NULL,
  number_like    int,
  number_dislike int,
  parent_id      bigint
);


CREATE TABLE messages
(
  id             bigint PRIMARY KEY AUTO_INCREMENT,
  conversation_id bigint          NOT NULL,
  is_from_sender  boolean      NOT NULL,
  content         VARCHAR(255) NOT NULL,
  message_read          boolean      NOT NULL,
  date_time      datetime     NOT NULL
);

CREATE TABLE conversations
(
  id         bigint PRIMARY KEY AUTO_INCREMENT,
  from_id    bigint          NOT NULL,
  to_id      bigint          NOT NULL,
  subject    VARCHAR(255) NOT NULL,
  status     VARCHAR(255) NOT NULL,
  date_time datetime     NOT NULL
);

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'gfessar', 'Gregoire', 'Fessar', '1', 'gregoire.fessard@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKp8lrDQAr4FytEknomklSTAUYtGLVg1IJRC0YtoAZg+XbnGEkabgSlk6R+6AfRqAWjFoxaMGrBiLAAEAAA//8YEgdLUEr9gAAAAABJRU5ErkJggg==',
        '#111111', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'ktan', 'Kevin', 'TAN', '2', 'kevin.tan@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==',
        '#222222', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'acanard', 'Antoine', 'Canard', '3', 'kev@gmail.com', '{noop}secret',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#a6e590', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'aveloso', 'Alex', 'Veloso', '4', 'alex.veloso@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#444444', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'ccisse', 'Cameron', 'Cisse', '5', 'cameron.cisse@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#555555', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'mnguyen', 'Mathieu', 'Nguyen', '6', 'mathieu.nguyen@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#666666', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'zkaziaoul', 'Zakia', 'Kaziaoul', '7', 'zakia.kaziaoul@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#777777', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'adubernet', 'Alice', 'Dubernet', '8', 'alice.dubernet@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#888888', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'mpepineau', 'Maurice', 'Pepineau', '9', 'maurice.pepineau@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#999999', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'jleite', 'Jean Charles', 'Leite', '10', 'jeancharles.leite@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#aaaaaa', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'aplatel', 'Adriana', 'Platel', '11', 'adriana.platel@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#bbbbbb', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'eabgrall', 'Emma', 'Abgrall', '12', 'emma.abgrall@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#cccccc', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'jlemee', 'Jacky', 'Lemee', '13', 'jacky.lemee@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#dddddd', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'aadmin', 'admin', 'admin', '14', 'admin.admin@isep.fr', 'root',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#eeeeee', NULL, 1);


INSERT INTO `authorities` (`username`, `authority`)
VALUES ('gfessar', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('ktan', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('acanard', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('aveloso', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('ccisse', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('mnguyen', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('zkaziaoul', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('adubernet', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('mpepineau', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('jleite', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('aplatel', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('eabgrall', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('jlemee', 'ROLE_TEACHER');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('aadmin', 'ROLE_ADMIN');

INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Genie logiciel');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Cybersecurite');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Architecture des SI');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Analyse Geopolitique');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Technologies Web');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Big Data');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Espagnol');
INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'Anglais');

INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '6', '2019-04-01 09:00:00', '2019-04-01 12:00:00', '5');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '8', '2019-04-01 17:30:00', '2019-04-01 19:00:00', '4');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '9', '2019-04-02 09:00:00', '2019-04-02 12:00:00', '6');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '7', '2019-04-02 13:00:00', '2019-04-02 16:00:00', '1');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '10', '2019-04-02 16:30:00', '2019-04-02 19:30:00', '3');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '11', '2019-04-03 15:15:00', '2019-04-03 17:15:00', '7');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '12', '2019-04-04 10:30:00', '2019-04-04 12:30:00', '8');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '13', '2019-04-05 09:00:00', '2019-04-05 12:00:00', '2');

INSERT INTO `comments` (`id`, `user_id`, `course_id`, `content`, `date_time`, `number_like`, `number_dislike`,
                        `parent_id`)
VALUES (NULL, '1', '1', 'Ce cOuRs eSt nUL. jAiMe pAs', '2019-05-21 13:02:00', '35', '0', NULL);

INSERT INTO `conversations` (`id`, `from_id`, `to_id`, `subject`, `status`, `date_time`)
VALUES (NULL, '2', '1', 'Mon cours est bien', 'vous êtes virés', '2019-05-21 18:08:07');

INSERT INTO `messages` (`id`, `conversation_id`, `is_from_sender`, `content`, message_read, `date_time`)
VALUES (NULL, '1', true, 'vous êtes virés', true, '2019-05-21 18:08:07');

INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '1');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '2');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '3');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '4');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '5');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '6');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '7');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '3', '8');

INSERT INTO `course_documents` VALUES (NULL, 'Name Test', 'Test', '1' , '1')

DROP DATABASE IF EXISTS `feedbackisep`;

CREATE DATABASE feedbackisep;
USE feedbackisep;

CREATE TABLE `users`
(
  id        bigint UNIQUE KEY AUTO_INCREMENT,
  username  varchar(255),
  firstname varchar(255) NOT NULL,
  lastname  varchar(255) NOT NULL,
  status varchar(255),
  isep_id   bigint          NOT NULL,
  mail      varchar(255) NOT NULL,
  password  varchar(255) NOT NULL,
  avatar    varchar(255),
  color     varchar(255),
  parent bigint,
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
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES users (`username`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;

CREATE TABLE users_courses
(
  users_id   bigint NOT NULL,
  courses_id bigint NOT NULL

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
  user   bigint  NOT NULL,
  course bigint  NOT NULL
);

CREATE TABLE course_materials
(
  id   bigint PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE `comments`
(
  id             bigint PRIMARY KEY AUTO_INCREMENT,
  user        bigint          NOT NULL,
  course      bigint          NOT NULL,
  content        VARCHAR(255) NOT NULL,
  date_time     datetime     NOT NULL,
  number_like    int,
  number_dislike int,
  parent_id      bigint
);


CREATE TABLE messages
(
  id             bigint PRIMARY KEY AUTO_INCREMENT,
  conversation bigint          NOT NULL,
  is_from_sender  boolean      NOT NULL,
  content         VARCHAR(255) NOT NULL,
  message_read          boolean      NOT NULL,
  date_time      datetime     NOT NULL
);

CREATE TABLE conversations
(
  id         bigint PRIMARY KEY AUTO_INCREMENT,
  `from`    bigint          NOT NULL,
  `to`      bigint          NOT NULL,
  subject    VARCHAR(255) NOT NULL,
  status     VARCHAR(255) NOT NULL,
  date_time datetime     NOT NULL
);

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'gfessar', 'Gregoire', 'Fessar', 'student','1', 'gregoire.fessard@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKp8lrDQAr4FytEknomklSTAUYtGLVg1IJRC0YtoAZg+XbnGEkabgSlk6R+6AfRqAWjFoxaMGrBiLAAEAAA//8YEgdLUEr9gAAAAABJRU5ErkJggg==',
        '#111111', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'ktan', 'Kevin', 'TAN', 'student','2', 'kevin.tan@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==',
        '#222222', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'acanard', 'Antoine', 'Canard', 'student','3', 'antoine.canard@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#a6e590', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'aveloso', 'Alex', 'Veloso', 'student','4', 'alex.veloso@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#444444', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'ccisse', 'Cameron', 'Cisse', 'student','5', 'cameron.cisse@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#555555', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'mnguyen', 'Mathieu', 'Nguyen','teacher', '6', 'mathieu.nguyen@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#666666', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'zkaziaoul', 'Zakia', 'Kaziaoul', 'teacher','7', 'zakia.kaziaoul@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#777777', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'adubernet', 'Alice', 'Dubernet', 'teacher','8', 'alice.dubernet@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#888888', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'mpepineau', 'Maurice', 'Pepineau', 'teacher','9', 'maurice.pepineau@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#999999', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'jleite', 'Jean Charles', 'Leite', 'teacher','10', 'jeancharles.leite@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#aaaaaa', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'aplatel', 'Adriana', 'Platel', 'teacher','11', 'adriana.platel@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#bbbbbb', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'eabgrall', 'Emma', 'Abgrall', 'teacher','12', 'emma.abgrall@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#cccccc', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'jlemee', 'Jacky', 'Lemee', 'teacher','13', 'jacky.lemee@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#dddddd', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `status`,`isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent`, `enabled`)
VALUES (NULL, 'aadmin', 'admin', 'admin', 'teacher','14', 'admin.admin@isep.fr', '{bcrypt}$2a$10$rAAV9h2YROT29TvBcDu86eNyf5g5e9R1GGB25RHreYfUNdM1Jzwai',
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

INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '6', '2019-06-10 09:00:00', '2019-06-10 12:00:00', '5');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '8', '2019-06-10 17:30:00', '2019-06-10 19:00:00', '4');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '9', '2019-06-11 09:00:00', '2019-06-11 12:00:00', '6');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '7', '2019-06-11 13:00:00', '2019-06-11 16:00:00', '1');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '10', '2019-06-11 16:30:00', '2019-06-11 19:30:00', '3');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '11', '2019-06-12 15:15:00', '2019-06-12 17:15:00', '7');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '12', '2019-06-13 10:30:00', '2019-06-13 12:30:00', '8');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '13', '2019-06-14 09:00:00', '2019-06-14 12:00:00', '2');

INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '6', '2019-06-17 09:00:00', '2019-06-17 12:00:00', '5');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '8', '2019-06-17 17:30:00', '2019-06-17 19:00:00', '4');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '9', '2019-06-18 09:00:00', '2019-06-18 12:00:00', '6');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '7', '2019-06-18 13:00:00', '2019-06-18 16:00:00', '1');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '10', '2019-06-18 16:30:00', '2019-06-18 19:30:00', '3');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '11', '2019-06-19 15:15:00', '2019-06-19 17:15:00', '7');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '12', '2019-06-20 10:30:00', '2019-06-20 12:30:00', '8');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '13', '2019-06-21 09:00:00', '2019-06-21 12:00:00', '2');

INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '6', '2019-06-24 09:00:00', '2019-06-24 12:00:00', '5');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '8', '2019-06-24 17:30:00', '2019-06-24 19:00:00', '4');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '9', '2019-06-25 09:00:00', '2019-06-25 12:00:00', '6');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '7', '2019-06-25 13:00:00', '2019-06-25 16:00:00', '1');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '10', '2019-06-25 16:30:00', '2019-06-25 19:30:00', '3');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '11', '2019-06-26 15:15:00', '2019-06-26 17:15:00', '7');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '12', '2019-06-27 10:30:00', '2019-06-27 12:30:00', '8');
INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '13', '2019-06-28 09:00:00', '2019-06-28 12:00:00', '2');

INSERT INTO `comments` (`id`, `user`, `course`, `content`, `date_time`, `number_like`, `number_dislike`,
                        `parent_id`)
VALUES (NULL, '1', '1', 'Ce cOuRs eSt nUL. jAiMe pAs', '2019-05-21 13:02:00', '35', '0', NULL);

INSERT INTO `conversations` (`id`, `from`, `to`, `subject`, `status`, `date_time`)
VALUES (NULL, '2', '1', 'Mon cours est bien', 'vous êtes virés', '2019-05-21 18:08:07');

INSERT INTO `messages` (`id`, `conversation`, `is_from_sender`, `content`, message_read, `date_time`)
VALUES (NULL, '1', true, 'vous êtes virés', true, '2019-05-21 18:08:07');

INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '1');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '2');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '3');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '4');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '5');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '6');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '7');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '8');

INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '9');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '10');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '11');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '12');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '13');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '14');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '15');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '16');

INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '17');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '18');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '19');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '20');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '21');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '22');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '23');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '24');

INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '25');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '26');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '27');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '28');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '29');
INSERT INTO `users_courses` (`users_id`, `courses_id`)
VALUES ('3', '30');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '31');
INSERT INTO `users_courses` ( `users_id`, `courses_id`)
VALUES ('3', '32');

INSERT INTO `course_documents` VALUES (NULL, 'Name Test', 'Test', '1' , '1')

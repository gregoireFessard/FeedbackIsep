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
VALUES (NULL, 'gfessar', 'Gregoire', 'Fessar', '1', 'greg@gmail.com', '{noop}secret',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKp8lrDQAr4FytEknomklSTAUYtGLVg1IJRC0YtoAZg+XbnGEkabgSlk6R+6AfRqAWjFoxaMGrBiLAAEAAA//8YEgdLUEr9gAAAAABJRU5ErkJggg==',
        '#5b9033', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'ktan', 'Kevin', 'TAN', '2', 'kev@gmail.com', '{noop}secret',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGLp3T+ZgRQwLTuBJPVMJKkmA4xaMGrBqAWjFoxaQA3A+Ej8IUkaHtoJkaR+6AfRqAWjFoxaMGrBiLAAEAAA//8FnwaNkNlVEgAAAABJRU5ErkJggg==',
        '#502fd2', NULL, 1);
INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`,
                     `parent_id`, `enabled`)
VALUES (NULL, 'acanard', 'Antoine', 'Canard', '3', 'kev@gmail.com', '{noop}secret',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==',
        '#a6e590', NULL, 1);


INSERT INTO `authorities` (`username`, `authority`)
VALUES ('gfessar', 'ROLE_STUDENT');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('ktan', 'ROLE_ADMIN');
INSERT INTO `authorities` (`username`, `authority`)
VALUES ('acanard', 'ROLE_TEACHER');

INSERT INTO `course_materials` (`id`, `name`)
VALUES (NULL, 'logiciel');

INSERT INTO `courses` (`id`, `teacher_id`, `date_time`, `date_end`, `material_id`)
VALUES (NULL, '2', '2019-05-21 13:00:00', '2019-05-21 16:00:00', '1');

INSERT INTO `comments` (`id`, `user_id`, `course_id`, `content`, `date_time`, `number_like`, `number_dislike`,
                        `parent_id`)
VALUES (NULL, '1', '1', 'Ce cOuRs eSt nUL. jAiMe pAs', '2019-05-21 13:02:00', '35', '0', NULL);

INSERT INTO `conversations` (`id`, `from_id`, `to_id`, `subject`, `status`, `date_time`)
VALUES (NULL, '2', '1', 'Mon cours est bien', 'vous êtes virés', '2019-05-21 18:08:07');

INSERT INTO `messages` (`id`, `conversation_id`, `is_from_sender`, `content`, message_read, `date_time`)
VALUES (NULL, '1', true, 'vous êtes virés', true, '2019-05-21 18:08:07');

INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '1', '1');
INSERT INTO `user_course` (`id`, `user_id`, `course_id`)
VALUES (NULL, '2', '1');

INSERT INTO `course_documents` VALUES (NULL, 'Name Test', 'Test', '1' , '1')

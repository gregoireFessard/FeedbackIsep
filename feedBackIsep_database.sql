CREATE DATABASE feedbackisep;
USE feedbackisep;

CREATE TABLE `User`(
	id int PRIMARY KEY AUTO_INCREMENT,
	username varchar(255),
	firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	isep_id int NOT NULL,
	mail varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	avatar varchar(255),
	color varchar(255),
	parent_id int,
	enabled boolean							
);

CREATE TABLE UserCourse(
	id int PRIMARY KEY AUTO_INCREMENT,
	user_id int NOT NULL,
	course_id int NOT NULL

);

CREATE TABLE Course(
	id int PRIMARY KEY AUTO_INCREMENT,
	teacher_id int,
	`dateTime` datetime NOT NULL,
	dateEnd datetime NOT NULL,
	material_id int
);

CREATE TABLE CourseDocument(
	id int PRIMARY KEY AUTO_INCREMENT,
	document BLOB NOT NULL,
	user_id int NOT NULL,
	course_id int NOT NULL
);

CREATE TABLE CourseMaterial(
	id int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL
);

CREATE TABLE `Comment`(
	id int PRIMARY KEY AUTO_INCREMENT,
	user_id int NOT NULL,
	course_id int NOT NULL,
	content VARCHAR(255) NOT NULL,
	`dateTime` datetime NOT NULL,
	number_like int,
	number_dislike int,
	parent_id int
);

CREATE TABLE Authorities(
	username VARCHAR(255) PRIMARY KEY,
	authority VARCHAR(255)
);

CREATE TABLE Message(
	id int PRIMARY KEY AUTO_INCREMENT,
	conversation_id int NOT NULL,
	is_from_sender boolean NOT NULL,
	content VARCHAR(255) NOT NULL,
	`read` boolean NOT NULL,
	`dateTime` datetime NOT NULL
);

CREATE TABLE Conversation(
	id int PRIMARY KEY AUTO_INCREMENT,
	from_id int NOT NULL,
	to_id int NOT NULL,
	subject VARCHAR(255) NOT NULL,
	status VARCHAR(255) NOT NULL,
	`dateTime` datetime NOT NULL
);

INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`, `parent_id`, `enabled`) VALUES (NULL, 'greg', 'greg', 'greg', '1', 'greg@gmail.com', 'password', 'randommmmmmmmmmmmmmmmmmm', '4286f4', NULL, NULL);
INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `isep_id`, `mail`, `password`, `avatar`, `color`, `parent_id`, `enabled`) VALUES (NULL, 'kev', 'kev', 'kev', '2', 'kev@gmail.com', 'password2', 'trezerzrze', '3152g8', NULL, NULL);

INSERT INTO `authorities` (`username`, `authority`) VALUES ('greg', 'user');
INSERT INTO `authorities` (`username`, `authority`) VALUES ('kev', 'admin');

INSERT INTO `coursematerial` (`id`, `name`) VALUES (NULL, 'logiciel');

INSERT INTO `course` (`id`, `teacher_id`, `dateTime`, `dateEnd`, `material_id`) VALUES (NULL, '2', '2019-05-21 13:00:00', '2019-05-21 16:00:00', '1');

INSERT INTO `comment` (`id`, `user_id`, `course_id`, `content`, `dateTime`, `number_like`, `number_dislike`, `parent_id`) VALUES (NULL, '1', '1', 'Ce cOuRs eSt nUL. jAiMe pAs', '2019-05-21 13:02:00', '35', '0', NULL);

INSERT INTO `conversation` (`id`, `from_id`, `to_id`, `subject`, `status`, `dateTime`) VALUES (NULL, '2', '1', 'Mon cours est bien', 'vous êtes virés', '2019-05-21 18:08:07');

INSERT INTO `message` (`id`, `conversation_id`, `is_from_sender`, `content`, `read`, `dateTime`) VALUES (NULL, '1', '2', 'vous êtes virés', '0', '2019-05-21 18:08:07');

INSERT INTO `usercourse` (`id`, `user_id`, `course_id`) VALUES (NULL, '1', '1');
INSERT INTO `usercourse` (`id`, `user_id`, `course_id`) VALUES (NULL, '2', '1');

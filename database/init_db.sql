CREATE DATABASE IF NOT EXISTS fastify_pratice;
USE fastify_pratice;

CREATE TABLE `fastify_pratice`.`users` (
    id         INT             NOT NULL   AUTO_INCREMENT,
    name       VARCHAR(255)    NOT NULL,
    email      VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO `fastify_pratice`.`users` (name, email) VALUES ('Test User 1', 'test_user1@abc.com');
INSERT INTO `fastify_pratice`.`users` (name, email) VALUES ('Test User 2', 'test_user2@abc.com');
INSERT INTO `fastify_pratice`.`users` (name, email) VALUES ('Test User 3', 'test_user3@abc.com');
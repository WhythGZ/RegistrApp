create database RegistrApp;

use RegistrApp;

create table usuarios
(
	id int primary key,
    name varchar(40),
    suname varchar(40),
    username varchar(40),
    email varchar(80),
    password varchar(80),
    isAdmin boolean
);

insert into usuarios values (1,'Alister','Gonzalez', 'Whyth', 'ali.gonzalezq@duocuc.cl', '1234', true);

insert into usuarios values (2,'Renata','Quintana', 'RenataQuintana', 'renataquintana@gmail.com', 'asasd', false);

insert into usuarios values (3,'David','Morales', 'DavidMorales', 'davidmorales@gmail.com', '1234567', false);

insert into usuarios values (4,'Nancy','Osorio', 'NancyOsorio', 'nancyosorio@gmail.com', '987654321', false);

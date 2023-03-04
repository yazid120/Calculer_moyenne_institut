-- phpMyAdmin SQL Dump
-- Version information: 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Server version: 10.4.22-MariaDB 
-- php version: 8.2.0
-- Server type: MariaDB
-- Server Charset: UTF-8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
--- CREATION Data Base 'Calculer_Moyenne_Institut' project
--
DROP DATABASE IF EXISTS `Calc_moy_insfp`; 
CREATE DATABASE `Calc_moy_insfp`;

--
-- CREATE `users` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE users(
 `id` bigint(20) NOT NULL,
 `usersName` varchar(128) NOT NULL,
  `usersemail` varchar(128) NOT NULL,
  `userspassword` varchar(128) NOT NULL,
  `Date_user` timestamp,
  `role_id` bigint(20) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `users`
ADD PRIMARY KEY (`id`), 
ADD KEY `role_id` (`role_id`);

ALTER TABLE `users`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- CREATE `etudiant` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `etudiant`; 
CREATE TABLE etudiant(
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `Nom` varchar(128) NOT NULL,
  `Prenom` varchar(128) NOT NULL,
  `Num_inscr` int(11) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `etudiant`
ADD PRIMARY KEY (`id`),
ADD KEY `user_id` (`user_id`);

ALTER TABLE `etudiant`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


--
-- CREATE `Professeur` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `Professeur`; 
CREATE TABLE Professeur(
  `id` int(11) NOT NULL, 
  `Prof_id` int(11) NOT NULL,
  `Nom` varchar(128) NOT NULL, 
  `Prenom` varchar(128) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `Professeur`
ADD PRIMARY KEY (`id`),
ADD KEY `Prof_id` (`Prof_id`);

ALTER TABLE `Professeur`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- CREATE `Admin` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `Admin`;
CREATE TABLE Admin(
  `id` int(11) NOT NULL,
  `Admin_name` Varchar(45) NOT NULL,
  `Admin_mail` varchar(128) NOT NULL, 
  `Admin_password` varchar(128) NOT NULL
); 
ALTER TABLE `Admin` 
ADD PRIMARY KEY (`id`); 

ALTER TABLE `Admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- Optional: Creation of Admin user by sql insertion 
INSERT INTO `Admin` (id , Admin_name ,Admin_mail, Admin_password) VALUES 
  (null,'Admin','Admin@gmail.com',md5('admin123')); 



--
--- CREATE `role` TABLE INSIDE `Calc_moy_insfp` Database
--
DROP TABLE IF EXISTS `role`;
CREATE TABLE role(
 `role_id` bigint(20) NOT NULL, 
 `role_name` varchar(128) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- 
---- SET `role` tables primary key and unique key
-- 
ALTER TABLE `role`
ADD PRIMARY KEY (`role_id`),
ADD UNIQUE KEY (`role_name`);

INSERT INTO `role` (`role_id`,`role_name`) VALUES
(1,'Admin'), 
(2,'Etudiant'), 
(3,'Professeur');


--
--- CREATE `Specialites` TABLE INSIDE `Calc_moy_insfp` Database
-- 

DROP TABLE IF EXISTS `Specialites`; 
CREATE TABLE Specialites(
spe_id int(11) NOT NULL, 
nom_spe varchar(128) NOT NULL,
); 

ALTER TABLE `Specialites`
ADD PRIMARY KEY (`spe_id`); 

INSERT INTO `Specialites`(`spe_id`,`nom_spe`) VALUES(
(1,'Développement WEB'),
(2,'SON'),
(3,'IMAGE'),
(4,'REASEAU SISCO')
);


-- 
--- CREATE `section` TABLE INSIDE `Calc_moy_insfp` Database
-- 
DROP TABLE IF EXISTS  `section`;
CREATE TABLE section(
 id int(12) NOT NULL,
 sec_name varchar(120) NOT NULL, 
 num_max_stag int(2) NOT NULL,
 sec_speciality varchar(120) NOT NULL
);

ALTER TABLE `section`
ADD PRIMARY KEY (`id`); 

ALTER TABLE `section`
MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
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
 `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
 `usersName` varchar(128) NOT NULL,
  `usersemail` varchar(128) NOT NULL,
  `userspassword` varchar(128) NOT NULL,
  `Date_user` timestamp
);

--
-- CREATE `etudiant` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `etudiant`; 
CREATE TABLE etudiant(
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_id` int(11),
   FOREIGN KEY (user_id) REFERENCES users(id),
  `Nom` varchar(128) NOT NULL,
  `Prenom` varchar(128) NOT NULL,
  `Num_inscr` int(11) NOT NULL,
  `Status` varchar(35) NOT NULL
);

--
-- CREATE `Professeur` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `Professeur`; 
CREATE TABLE Professeur(
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  `Prof_id` int(11),
  FOREIGN KEY (Prof_id) REFERENCES users(id),
  `Nom` varchar(128) NOT NULL, 
  `Prenom` varchar(128) NOT NULL,
  `Status` varchar(35) NOT NULL
); 

--
-- CREATE `Admin` TABLE inside `Calc_moy_insfp` database
--
DROP TABLE IF EXISTS `Admin`;
CREATE TABLE Admin(
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `Admin_mail` varchar(128) NOT NULL, 
  `Admin_password` varchar(128) NOT NULL
); 

-- Optional: Creation of Admin user by sql insertion 
INSERT INTO `Admin` (id , Admin_mail, Admin_password) VALUES 
  (null,'Admin@gmail.com',md5('admin123')); 

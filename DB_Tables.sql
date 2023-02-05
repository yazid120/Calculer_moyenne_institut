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
)
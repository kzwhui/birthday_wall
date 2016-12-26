-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema d_birthday_wall
-- -----------------------------------------------------
-- 生日墙祝福语

-- -----------------------------------------------------
-- Schema d_birthday_wall
--
-- 生日墙祝福语
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `d_birthday_wall` DEFAULT CHARACTER SET utf8 ;
USE `d_birthday_wall` ;

-- -----------------------------------------------------
-- Table `d_birthday_wall`.`t_wish_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `d_birthday_wall`.`t_wish_info` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `wish_statement` VARCHAR(128) NOT NULL,
  `mtime` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `ctime` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_wish_unique` (`name` ASC, `wish_statement` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

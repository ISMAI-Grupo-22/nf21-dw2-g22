CREATE SCHEMA `social`;

USE `social`;

CREATE TABLE `Conta` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `emprego` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funcao` varchar(45) NOT NULL,
  `contrato` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `empresa` varchar(45) NOT NULL,
  `contacto` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;



CREATE TABLE `Publicacao` (
  `id` bigint NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `Venda` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `artigo` varchar(45) NOT NULL,
  `contacto` varchar(45) NOT NULL,
  `quantidade` int(2) DEFAULT NULL,
  `valor` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

GRANT ALL PRIVILEGES ON *.* TO 'root'

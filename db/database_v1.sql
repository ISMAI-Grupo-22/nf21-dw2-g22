CREATE SCHEMA `social`;

USE `social`;

CREATE TABLE IF NOT EXISTS `conta` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO `conta` (`id`, `nome`, `email`, `genero`, `senha`) VALUES
(1, 'Ricardo Silva', 'a033845@ismai.pt', 'Masculino', 'teste1'),
(2, 'Rubens Barbosa', 'teste@ismai.pt', 'Masculino', 'teste2'),
(3, 'Pedro Silva', 'teste3@ismai.pt', 'Masculino', 'teste3'),
(4, 'Joana Sousa', 'teste4@ismai.pt', 'Feminino', 'teste4'),
(5, 'Patricia Ferreira', 'teste5@ismai.pt', 'Feminino', 'teste5'),
(6, 'Filipe Coutinho', 'teste6@ismai.pt', 'Masculino', 'teste6'),
(7, 'Diana Chaves', 'teste7@ismai.pt', 'Feminino', 'teste7'),
(8, 'Ana Faria', 'teste8@ismai.pt', 'Feminino', 'teste8'),
(9, 'Teresa Pacheco', 'teste9@ismai.pt', 'Feminino', 'teste9'),
(10, 'Rui Sousa', 'teste10@ismai.pt', 'Masculino', 'teste10'),
(11, 'José Fernandes', 'teste11@ismai.pt', 'Masculino', 'teste11'),
(12, 'Maria Albertina', 'teste12@ismai.pt', 'Feminino', 'teste12'),
(13, 'Diogo Pereira', 'teste13@ismai.pt', 'Masculino', 'teste13'),
(14, 'João Abreu', 'teste14@ismai.pt', 'Masculino', 'teste14'),
(15, 'Maria João', 'teste15@ismai.pt', 'Feminino', 'teste15'),
(16, 'Alberto Abreu', 'teste16@ismai.pt', 'Masculino', 'teste16'),
(17, 'Afonso Pereira', 'teste17@ismai.pt', 'Masculino', 'teste17'),
(18, 'Jorge Aires', 'teste18@ismai.pt', 'Masculino', 'teste18'),
(19, 'Sílvia Aires', 'teste19@ismai.pt', 'Feminino', 'teste19'),
(20, 'Hugo Alves', 'teste20@ismai.pt', 'Masculino', 'teste20');


CREATE TABLE IF NOT EXISTS `emprego` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funcao` varchar(45) NOT NULL,
  `contrato` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `empresa` varchar(45) NOT NULL,
  `contacto` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO `emprego` (`id`, `funcao`, `contrato`, `tipo`, `empresa`, `contacto`) VALUES
(1, 'Programador', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(2, 'Desenvolvedor Front-end', 'Termo incerto', 'Part time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(3, 'Desenvolvedor Back-end', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(4, 'Full Stack Entwickler Web/Angular', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(5, 'Information systems officer', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(6, 'Information systems officer', 'Sem termo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(7, 'Services Specialist', 'Sem certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(8, 'Account Manager', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(9, 'Stock Managing & Purchasing Assistant', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(10, 'Stock Managing & Purchasing Assistant', 'Termo incerto', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(11, 'Stock Managing & Purchasing Assistant', 'Termo certo', 'Part time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(12, 'Services Specialist', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(13, 'Front-end Specialist', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(14, 'Back-end Specialist', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(15, 'Full-stack Specialist', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(16, 'Business developer marketplace', 'Termo certo', 'Full time', 'Click Software', 'cv.emprego@clicksoftware.pt'),
(17, 'Business developer marketplace', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(18, 'Técnico de comunicação audiovisual', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(19, 'Júnior JAVA Developer', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt'),
(20, 'System Analist', 'Termo certo', 'Full time', 'ISMAI Software', 'cv.emprego@ismaisoftware.pt');



CREATE TABLE IF NOT EXISTS `publicacao` (
  `id` bigint NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


INSERT INTO `publicacao` (`id`, `descricao`, `nome`) VALUES
(1, 'Lorem Ipsuma is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 'Ricardo Silva'),
(2, 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries', 'Rubens Barbosa'),
(3, 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s', 'Pedro Silva'),
(4, 'with the release of Letraset sheets containing Lorem', 'Joana Sousa'),
(5, 'Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'Patricia Ferreira'),
(6, 'Contrary to popular belief, Lorem Ipsum is not simply random text', 'Filipe Coutinho'),
(7, 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', 'Diana Chaves'),
(8, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form', 'Ana Faria'),
(9, 'by injected humour, or randomised words which don\'t look', 'Teresa Pacheco'),
(10, 'even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text', 'Rui Sousa'),
(11, 'All the Lorem Ipsum generators on the Internet', 'José Fernandes'),
(12, 'tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable', 'Maria Albertina'),
(13, 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc', 'Diogo Pereira'),
(14, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo', 'João Abreu'),
(15, 'must explain to you how all this mistaken idea of denouncing', 'Maria João'),
(16, 'pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the', 'Alberto Abreu'),
(17, 'great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself', 'Afonso Pereira'),
(18, 'because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself', 'Jorge Aires'),
(19, 'because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure', 'Sílvia Aires'),
(20, 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?', 'Hugo Alves');


CREATE TABLE IF NOT EXISTS `venda` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `artigo` varchar(45) NOT NULL,
  `contacto` varchar(45) NOT NULL,
  `quantidade` int(2) DEFAULT NULL,
  `valor` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


INSERT INTO `venda` (`id`, `artigo`, `contacto`, `quantidade`, `valor`) VALUES
(1, 'Notebook Acer', '935114415', 2, 700),
(2, 'Notebook Asus', '935115684', 1, 432),
(3, 'Audi A4 - 2007', '935514523', 95000, 1),
(4, 'Cadeira gaming Alpha gammer - Branca', '935894123', 205, 1),
(5, 'Painel solar - 750W', '931478965', 350, 4),
(6, 'Teclado Krom Kyra RGB Gaming PT', '914789560', 120, 1),
(7, 'iPhone 13 Pro Max APPLE', '914754789', 1279, 2),
(8, 'Teclado Razer Huntsman PT Preto', '935474178', 150, 1),
(9, 'Saco-cama preto', '914574478', 25, 1),
(10, 'Aspirador de Pó Portátil Rowenta', '965487414', 80, 1),
(11, 'SAMSUNG Galaxy S21 Ultra 5G 256 GB Preto', '935474821', 1099, 5),
(12, 'Rato Óptico Razer DeathAdder Preto', '912547879', 59, 2),
(13, 'iPhone 13 APPLE - Meia-noite)', '915478978', 929, 9),
(14, 'Rato Óptico Logitech G203 RGB Preto', '935474749', 89, 3),
(15, 'Forno HOTPOINT FA2 841 JH IX HA', '915456636', 279, 1),
(16, 'Máquina de Lavar Loiça BECKEN BDW1965N IX', '936545454', 309, 1),
(17, 'Máquina de Café DELONGHI Nespresso Preto', '936545454', 39, 8),
(18, 'Aspirador Robô IROBOT Roomba', '915456878', 289, 2),
(19, 'Placa de Indução HOTPOINT HB 4860B NE', '935456457', 319, 1),
(20, 'Consola Nintendo Switch V2 (32 GB)', '912552547', 269, 2);

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'

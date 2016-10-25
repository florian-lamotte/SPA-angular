-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 25 Octobre 2016 à 23:59
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `todolist`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categorie` varchar(255) NOT NULL,
  `glyphicon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`id`, `categorie`, `glyphicon`) VALUES
(1, 'Travail', 'briefcase'),
(2, 'Loisirs', 'tower'),
(3, 'Culture', 'grain'),
(4, 'Autres', 'tree-deciduous');

-- --------------------------------------------------------

--
-- Structure de la table `importance`
--

CREATE TABLE IF NOT EXISTS `importance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `importance` varchar(255) NOT NULL,
  `ordre` int(2) NOT NULL,
  `titre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `importance`
--

INSERT INTO `importance` (`id`, `importance`, `ordre`, `titre`) VALUES
(1, 'danger', 1, 'Urgent'),
(2, 'success', 4, 'N''importe quand'),
(3, 'warning', 2, 'Important'),
(4, 'info', 3, 'Peut attendre');

-- --------------------------------------------------------

--
-- Structure de la table `todolist`
--

CREATE TABLE IF NOT EXISTS `todolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(255) NOT NULL,
  `categorie` varchar(255) NOT NULL,
  `importance` varchar(255) NOT NULL,
  `glyphicon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Contenu de la table `todolist`
--

INSERT INTO `todolist` (`id`, `texte`, `categorie`, `importance`, `glyphicon`) VALUES
(36, 'texte', 'Autres', 'success', 'tree-deciduous'),
(39, 'texte', 'Travail', 'info', 'briefcase'),
(40, 'texte', 'Travail', 'danger', 'briefcase'),
(41, 'texte', 'Culture', 'success', 'grain'),
(42, 'texte', 'Loisirs', 'info', 'tower'),
(43, 'texte', 'Loisirs', 'danger', 'tower'),
(44, 'texte', 'Loisirs', 'success', 'tower'),
(45, 'texte', 'Loisirs', 'warning', 'tower'),
(47, 'texte', 'Autres', 'danger', 'tree-deciduous'),
(48, 'test', 'Culture', 'success', 'grain');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

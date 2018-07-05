-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2018 at 03:30 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `savings_scheme`
--

-- --------------------------------------------------------

--
-- Table structure for table `ss_addresses`
--

CREATE TABLE `ss_addresses` (
  `address_id` bigint(20) NOT NULL,
  `address_person_id` bigint(20) NOT NULL,
  `address_person_type` tinyint(4) NOT NULL,
  `address_street_1` mediumtext,
  `address_street_2` mediumtext,
  `address_area` varchar(255) DEFAULT NULL,
  `address_district` varchar(255) DEFAULT NULL,
  `address_state` int(11) DEFAULT NULL,
  `address_country` int(11) DEFAULT NULL,
  `address_zip` mediumint(9) DEFAULT NULL,
  `address_status` tinyint(4) NOT NULL DEFAULT '1',
  `address_added_date` datetime DEFAULT NULL,
  `address_modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_addresses`
--

INSERT INTO `ss_addresses` (`address_id`, `address_person_id`, `address_person_type`, `address_street_1`, `address_street_2`, `address_area`, `address_district`, `address_state`, `address_country`, `address_zip`, `address_status`, `address_added_date`, `address_modified_date`) VALUES
(1, 2, 2, 'dfdsf', 'dfdsf', 'dfdsf', 'dfdsf', 0, 0, 0, 0, '2018-07-05 15:20:58', '2018-07-05 15:20:58'),
(2, 3, 2, 'street 1', 'street 1', 'street 1', 'street 1', 0, 0, 0, 0, '2018-07-05 15:25:47', '2018-07-05 15:25:47'),
(3, 4, 2, 'street 1', 'street 1', 'chromepet', '1', 1, 1, 600044, 1, '2018-07-05 15:27:29', '2018-07-05 15:27:29');

-- --------------------------------------------------------

--
-- Table structure for table `ss_countries`
--

CREATE TABLE `ss_countries` (
  `country_id` bigint(20) NOT NULL,
  `country_code` varchar(255) DEFAULT NULL,
  `country_name` varchar(255) DEFAULT NULL,
  `country_status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_countries`
--

INSERT INTO `ss_countries` (`country_id`, `country_code`, `country_name`, `country_status`) VALUES
(1, 'IND', 'india', '1'),
(2, 'UK', 'United Kingdom', '1'),
(3, 'USA', 'United states of America', '1');

-- --------------------------------------------------------

--
-- Table structure for table `ss_customers`
--

CREATE TABLE `ss_customers` (
  `customer_id` bigint(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_mobile` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_password` varchar(255) DEFAULT NULL,
  `customer_status` tinyint(4) NOT NULL DEFAULT '0',
  `customer_added_date` datetime DEFAULT NULL,
  `customer_updated_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_customers`
--

INSERT INTO `ss_customers` (`customer_id`, `customer_name`, `customer_mobile`, `customer_email`, `customer_password`, `customer_status`, `customer_added_date`, `customer_updated_date`) VALUES
(1, 'fdadas', '09362246887', 'asdasdasd@dfgsfsd.dsfdsf', '123456789', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'fdadas', '09362246887', 'asdasdasd@dfgsfsd.dsfd', '123456789', 1, '2018-07-05 15:20:58', '2018-07-05 15:20:58'),
(3, 'alexpandian', '9786353664', 'email2alexpandian@gmail.com', '25f9e794323b453885f5181f1b624d0b', 1, '2018-07-05 15:25:47', '2018-07-05 15:25:47'),
(4, 'alexpandian', '9786353664', 'email2alexpandian1@gmail.com', '25f9e794323b453885f5181f1b624d0b', 1, '2018-07-05 15:27:29', '2018-07-05 15:27:29');

-- --------------------------------------------------------

--
-- Table structure for table `ss_districts`
--

CREATE TABLE `ss_districts` (
  `district_id` bigint(20) NOT NULL,
  `state_id` bigint(20) NOT NULL,
  `district_name` varchar(255) NOT NULL,
  `district_status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_districts`
--

INSERT INTO `ss_districts` (`district_id`, `state_id`, `district_name`, `district_status`) VALUES
(1, 1, 'chennai', '1');

-- --------------------------------------------------------

--
-- Table structure for table `ss_employees`
--

CREATE TABLE `ss_employees` (
  `employee_id` bigint(20) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `employee_role` tinyint(4) NOT NULL,
  `employee_designation` varchar(255) DEFAULT NULL,
  `employee_username` varchar(255) NOT NULL,
  `employee_password` varchar(255) DEFAULT NULL,
  `employee_status` enum('0','1') NOT NULL DEFAULT '1',
  `employee_dynamic_token` mediumtext,
  `employee_static_token` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_employees`
--

INSERT INTO `ss_employees` (`employee_id`, `employee_name`, `employee_role`, `employee_designation`, `employee_username`, `employee_password`, `employee_status`, `employee_dynamic_token`, `employee_static_token`) VALUES
(1, 'admin', 1, 'owner', 'admin', 'admin@123', '1', NULL, 'admin12345');

-- --------------------------------------------------------

--
-- Table structure for table `ss_schemes`
--

CREATE TABLE `ss_schemes` (
  `scheme_id` bigint(20) NOT NULL,
  `scheme_name` varchar(255) NOT NULL,
  `scheme_description` longtext,
  `scheme_due_amount` float NOT NULL DEFAULT '0',
  `scheme_dues_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_schemes`
--

INSERT INTO `ss_schemes` (`scheme_id`, `scheme_name`, `scheme_description`, `scheme_due_amount`, `scheme_dues_total`) VALUES
(1, 'scheme 1', 'scheme 1 scheme 1 scheme 1 scheme 1 scheme 1', 1000, 12);

-- --------------------------------------------------------

--
-- Table structure for table `ss_states`
--

CREATE TABLE `ss_states` (
  `state_id` bigint(20) NOT NULL,
  `country_id` bigint(20) NOT NULL,
  `state_name` varchar(255) NOT NULL,
  `state_status` enum('0','1') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ss_states`
--

INSERT INTO `ss_states` (`state_id`, `country_id`, `state_name`, `state_status`) VALUES
(1, 1, 'tamilnadu', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ss_addresses`
--
ALTER TABLE `ss_addresses`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `ss_countries`
--
ALTER TABLE `ss_countries`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `ss_customers`
--
ALTER TABLE `ss_customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `ss_districts`
--
ALTER TABLE `ss_districts`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `ss_employees`
--
ALTER TABLE `ss_employees`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `ss_schemes`
--
ALTER TABLE `ss_schemes`
  ADD PRIMARY KEY (`scheme_id`);

--
-- Indexes for table `ss_states`
--
ALTER TABLE `ss_states`
  ADD PRIMARY KEY (`state_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ss_addresses`
--
ALTER TABLE `ss_addresses`
  MODIFY `address_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ss_countries`
--
ALTER TABLE `ss_countries`
  MODIFY `country_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ss_customers`
--
ALTER TABLE `ss_customers`
  MODIFY `customer_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ss_districts`
--
ALTER TABLE `ss_districts`
  MODIFY `district_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `ss_employees`
--
ALTER TABLE `ss_employees`
  MODIFY `employee_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `ss_schemes`
--
ALTER TABLE `ss_schemes`
  MODIFY `scheme_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `ss_states`
--
ALTER TABLE `ss_states`
  MODIFY `state_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

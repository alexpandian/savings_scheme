-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2018 at 05:07 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Indexes for table `ss_customers`
--
ALTER TABLE `ss_customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `customer_id` (`customer_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ss_addresses`
--
ALTER TABLE `ss_addresses`
  MODIFY `address_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ss_customers`
--
ALTER TABLE `ss_customers`
  MODIFY `customer_id` bigint(20) NOT NULL AUTO_INCREMENT;
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
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

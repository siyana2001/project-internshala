-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: internshala
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hydrabad`
--

DROP TABLE IF EXISTS `hydrabad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hydrabad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `companyname` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  `ctc` varchar(100) DEFAULT NULL,
  `applyby` varchar(100) DEFAULT NULL,
  `posted` varchar(100) DEFAULT NULL,
  `applicants` varchar(100) DEFAULT NULL,
  `openings` varchar(100) DEFAULT NULL,
  `keys` varchar(6000) DEFAULT NULL,
  `skills` varchar(900) DEFAULT NULL,
  `aboutcompany` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hydrabad`
--

LOCK TABLES `hydrabad` WRITE;
/*!40000 ALTER TABLE `hydrabad` DISABLE KEYS */;
INSERT INTO `hydrabad` VALUES (1,'https://internshala-uploads.internshala.com/logo%2F62ce631e372011657692958.png.webp','Business Development (Sales)','TradeHike Consulting','Hydrabad','1 year','1,00,000 - 2,00,000 /year+incentive','02 Apr\'24','3 days','34','29','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Work on data mining, email campaigns, and cold calling\r\n2. Research and connect with prospective clients\r\n3. Manage and maintain a pipeline of interested prospects and keep them engaged\r\n4. Identify best practices to refine the company\'s lead generation playbook\r\n5. Generate new sales opportunities by reaching out to potential customers on LinkedIn, emails, and calls\r\n6. Seek new business opportunities in the market proactively\r\n7. Set up meetings or calls between (prospective) customers and sales executives\r\n8. Report to the sales manager with weekly, monthly, and quarterly results','\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nSales','We are a complete e-commerce management agency helping e-commerce businesses grow through our data-driven UX design, development, CRO, and marketing services.'),(2,'https://internshala-uploads.internshala.com/logo%2F6324599e6653a1663326622.jpg.webp','Photography','Stareye Media & Entertainment Private Limited','Hydrabad','5 Months','2,00,000 - 3,50,000 /year','8 Mar\'24','2 days','41','12','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Assist in planning and executing photo and video shoots for various projects, events, and campaigns\r\n2. Capture high-quality images and video footage that convey a compelling visual story and are consistent with the company\'s style and brand identity\r\n3. Collaborate with team members to create engaging visual content for online and offline channels\r\n4. Edit and retouch photos to ensure the final images meet quality standards\r\n5. Edit video footage, add effects, and create compelling content\r\n6. Manage and organize photo and video files and assets, maintaining an organized media library','Adobe Photoshop,\r\nAdobe Photoshop Lightroom CC,\r\nPhotography,\r\nVideo Editing,\r\nVideo Making',' Stareye Media & Entertainment Private Limited:\r\nStareye Media is a production and casting house that promotes junior models as well as senior models for e-commerce sites and other platforms too.'),(3,'https://internshala-uploads.internshala.com/logo%2F64a450551390c1688490069.jpg.webp','Human Resources (HR)','Charu Arora','Hydrabad','6 months','1,00,000 - 2,50,000 /year','8 Mar\'24','1 weeks','48','05','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Assist in the maintenance of HR records and documentation systematically.\r\n2. Support the HR team in handling routine administrative tasks.\r\n3. Assist in data entry and maintenance of HRIS (human resources information system).\r\n4. Generate reports and analyze HR data as needed.\r\n5. Assist the HR team with employee background verification.\r\n6. Ensure the accuracy and completeness of background verification reports.\r\n7. Assist the HR team in the recruitment process.','English Proficiency (Spoken),\r\nMS-Excel,\r\nMS-Office','Charu Arora:\r\nAn innovator and a result-oriented strategic HR professional with over 18+ years of\r\nqualitative experience in successfully leading all phases of HR operational practices,\r\nrendering expertise in payroll, workday implementation, employee lifecycle, and driving HR developing standards in emerging markets of India and globally.'),(4,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','Hydrabad','0-4','2,00,000-4,00,000','8 Mar\' 24','6','39','08','Selected intern\'s day-to-day responsibilities include:  1. Understand the product requirements and implement them as per specifications 2. Develop efficient, reusable, and reliable Python-based web service features 3. Build RESTful APIs and work with front-end developers for integration 4. Improve the functionality of existing systems and optimize the performance 5. Research new tools/technologies/processes and adopt them in work  Skills & Requirements:  1. Experience building web applications in Python-based web frameworks such as Django, and Flask 2. REST API experience preferred 3. Have great problem-solving skills and a knack for writing clean Python code 4. Deep understanding of OOPS and software engineering principles 5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data 6. Understanding of fundamentals behind a secure and scalable application 7. Familiarity with Cloud such as AWS and microservices is an advantage 8. B.Tech or M.Tech in computer science or related field (70% more','Django GitHub Linux Python REST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.');
/*!40000 ALTER TABLE `hydrabad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:24

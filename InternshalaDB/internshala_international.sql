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
-- Table structure for table `international`
--

DROP TABLE IF EXISTS `international`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `international` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `companyname` varchar(200) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  `ctc` varchar(100) DEFAULT NULL,
  `applyby` varchar(100) DEFAULT NULL,
  `posted` varchar(100) DEFAULT NULL,
  `applicants` varchar(100) DEFAULT NULL,
  `openings` varchar(100) DEFAULT NULL,
  `keys` varchar(6000) DEFAULT NULL,
  `skills` varchar(600) DEFAULT NULL,
  `aboutcompany` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `international`
--

LOCK TABLES `international` WRITE;
/*!40000 ALTER TABLE `international` DISABLE KEYS */;
INSERT INTO `international` VALUES (1,'https://internshala.com/uploads/logo%2F635fded8b34091667227352.jpeg','Business Development Executive','Expertrons','London','3-5','7,00,000 -8,00,000','\r\n16 Mar\' 24\r\n','2 days','39','01','Key responsibilities:\r\n\r\n1. Promote Expertrons as a valuable tool for professionals to prepare for interviews and secure employment opportunities through referrals\r\n2. Contact potential customers (professionals and students) and have the opportunity to set up meetings and counsel the aspirants\r\n3. Develop and execute sales strategies to achieve revenue targets and growth objectives\r\n\r\nThis hybrid model of sales will give you exposure to the best of inside sales and direct sales.\r\n\r\nPreferred skill sets:\r\n\r\n1. Keen interest in sales & education\r\n2. Strong communication and interpersonal skills\r\n3. Being interested in mentoring students, having a knack for sales, and positioning an idea\r\n\r\nPrerequisites for applying for the position:\r\n\r\n1. Availability for a full-time position\r\n2. Can work from office and can join immediately\r\n3. Comfortable with the \'Bring Your Own Device\' policy\r\n\r\nRewards:\r\n\r\n1. Entrepreneurial exposure\r\n2. Become a part of an elite group of innovators\r\n3. Grow up to 10X in 3 years\r\n\r\nBe a part of our growing team and climb up the ladder of success. So, if you have the expertise, skills, and quirks that can help you add value to Expertrons, then apply with us, now! Let\'s explore synergies foreseeing 10X+ growth in our converging paths!','Effective Communication,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nMS-Excel,\r\nNegotiation & Problem-solving,\r\nSales','Expertrons is one of the world\'s largest AI video bot-assisted platforms, focusing on providing a career transformation journey. It is led by IITB alumni and second-time ed-tech entrepreneurs, Jatin Solanki (previously founded StepApp & EduIsFun) and Vivek Gupta (whose previous venture was acquired by a publicly listed company). Through this platform, we are connecting job-seeking aspirants with Industry leaders aka experts, helping them gain career insights, to settle their career in their desired domains, from elite experts.\r\n\r\nRecently, Expertrons raised a funding of $2.3 million in the pre-series round witnessing investors like Yoga Capital, Venture Catalysts, Auxano Capital, and existing investors LetsVenture, Ivycap Ventures, Iceland Venture Studios, Nikhil Vora (MD, Sixth Sense), and more.'),(2,'https://internshala-uploads.internshala.com/logo%2F5e2fdcc7782c41580195015.png.webp','Sales Officer','WeMakeScholars','Shimla','4 -7','4,90,000 - 8,00,000','\r\n21 Mar\' 24','3 days','71','04','Key responsibilities:\r\n\r\n1. Work on being familiar with the underwriting criteria of our partner banks, which include SBI, BOB, ICICI, Axis Bank, HDFC, etc.\r\n2. Screen the education loan applications, advise students on the documentation, and coordinate with bank staff for smooth processing of the education loan\r\n3. Work on solving students\' queries\r\n4. Manage the process from eligibility to the sanctioning of the loan','English Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nBritish English','WeMakeScholars is a fintech startup based out of Hyderabad. We are a 7-year-old startup & our core business is, we help students get education loans & scholarships by closely working with some of the biggest banks & NBFCs in India like SBI, Axis Bank, ICICI Bank & so on. We don\'t provide education loans from our pocket, but we make the process of applying for an education loan smoother & hassle-free both for students & parents. For eg: A process that might take 2 to 3 months when applied on their own only takes about 15 - 20 days when they applied via WeMakeScholars.\r\n\r\nCurrently, we are the market leaders in the education finance segment and are working with 14+ financial institutions & this number has been growing steadily over the years. Also, last year we disbursed approximately 10,000 cr worth of student loans & this year we are expecting to do more!'),(3,'https://internshala-uploads.internshala.com/logo%2F5e2fdd32a23401580195122.png.webp','Field Sales Executive','Arachnomesh Technologies Private Limited','Surat','3-5','8,00,000 -9,00,000','02 Apr\'24','1 day','25','03','Key responsibilities:\r\n\r\n1. Handling business sales at retail outlets\r\n2. Working on achieving sales targets (and earning sales incentives)\r\n3. Working on making good interpersonal relationships with existing & prospective customers\r\n4. Assisting with capturing necessary information in the mobile application provided for the purpose\r\n5. Performing all assigned activities on the company software\r\n6. Assisting with organizing and managing local community engagement programs','Effective Communication,\r\nNegotiation & Problem-solving,\r\nSales','Arachnomesh Technologies Private Limited is a custom product company for a variety of workflow solutions. Our leading products are Channelier & Glimray among scores of custom-developed web and mobile-based solutions. Over the years, we have built a reputation for providing software development and web development services. We also provide end-to-end software consulting services.'),(4,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','Australia','0-4','2,00,000-4,00,000','8 Mar\' 24','6','39','08','Selected intern\'s day-to-day responsibilities include:  1. Understand the product requirements and implement them as per specifications 2. Develop efficient, reusable, and reliable Python-based web service features 3. Build RESTful APIs and work with front-end developers for integration 4. Improve the functionality of existing systems and optimize the performance 5. Research new tools/technologies/processes and adopt them in work  Skills & Requirements:  1. Experience building web applications in Python-based web frameworks such as Django, and Flask 2. REST API experience preferred 3. Have great problem-solving skills and a knack for writing clean Python code 4. Deep understanding of OOPS and software engineering principles 5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data 6. Understanding of fundamentals behind a secure and scalable application 7. Familiarity with Cloud such as AWS and microservices is an advantage 8. B.Tech or M.Tech in computer science or related field (70% more','Django GitHub Linux Python REST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.');
/*!40000 ALTER TABLE `international` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:20

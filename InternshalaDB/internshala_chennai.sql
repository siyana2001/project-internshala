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
-- Table structure for table `chennai`
--

DROP TABLE IF EXISTS `chennai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chennai` (
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
  `skills` varchar(500) DEFAULT NULL,
  `aboutcompany` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chennai`
--

LOCK TABLES `chennai` WRITE;
/*!40000 ALTER TABLE `chennai` DISABLE KEYS */;
INSERT INTO `chennai` VALUES (1,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','Chennai','0-1\r\n','2,00,000 - 3,00,000','25 May\'24','6 days','30','2','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Understand the product requirements and implement them as per specifications\r\n2. Develop efficient, reusable, and reliable Python-based web service features\r\n3. Build RESTful APIs and work with front-end developers for integration\r\n4. Improve the functionality of existing systems and optimize the performance\r\n5. Research new tools/technologies/processes and adopt them in work\r\n\r\nSkills & Requirements:\r\n\r\n1. Experience building web applications in Python-based web frameworks such as Django, and Flask\r\n2. REST API experience preferred\r\n3. Have great problem-solving skills and a knack for writing clean Python code\r\n4. Deep understanding of OOPS and software engineering principles\r\n5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data\r\n6. Understanding of fundamentals behind a secure and scalable application\r\n7. Familiarity with Cloud such as AWS and microservices is an advantage\r\n8. B.Tech or M.Tech in computer science or related field (70% more aggregate)','Django,\r\nGitHub,\r\nLinux,\r\nPython,\r\nREST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.'),(2,'https://internshala-uploads.internshala.com/logo%2F5e2fdc8ee29391580194958.jpg.webp','Content Writing And WordPress','Anupam Sanghi & Associates','Chennai','7 Months','2,00,000 - 3,50,000 ','12 Apr\'25','2 weeks of','42','29','We are seeking a dynamic and talented content-writing intern to join our team for our tech policy team at TechBridge (https://the-tech-bridge.org: A Think-Tank of Anupam Sanghi & Associates). If you have a passion for blogging, excellent written and spoken English proficiency, knowledge of SEO, and experience with WordPress, then this is the perfect opportunity for you!\r\n\r\nSelected intern\'s day-to-day responsibilities include:\r\n\r\n1. Create engaging and informative blog posts on various topics to attract and engage our target audience\r\n2. Conduct thorough research to gather relevant information and ensure the accuracy and credibility of the content\r\n3. Optimize content for search engines to improve visibility and drive organic traffic to our website\r\n\r\nRequirements:\r\n\r\n1. Strong research skills\r\n2. Must be a social media/blogging enthusiast\r\n3. Must be able to work well with a tight-knit team\r\n4. Disciplined about reporting timings in a virtual/hybrid work routine\r\n\r\nNote: Candidates with prior experience are preferred.\r\n\r\nJoin our team and gain hands-on experience in content writing, SEO, and digital marketing. Be part of a supportive and creative environment that values your growth and ideas. Apply now and unleash your potential with Anupam Sanghi & Associates!','Blogging,\r\nCreative Writing,\r\nDigital Marketing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nSearch Engine Optimization (SEO),\r\nSocial Media Marketing,\r\nWordPress','We are a technology policy think-tank. We frequently write and post technology law-related content/emails on social media platforms and also write on online platforms/newspapers. we are building a robust knowledge management/content research and editing team to create advocacy & training programs for startups and universities/students.'),(3,'https://internshala-uploads.internshala.com/logo%2F5e2fdc9c9e10a1580194972.png.webp','Human Resources (HR)','Absolute People Screen Private Limited','Chennai','7- 8 Months','2,00,000 - 2,50,000','7 May \'24','3weeks','637','10','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Attaining verifications via phone, email, fax, and/or posts according to the predefined quality standards, service level, and productivity targets on assigned cases\r\n2. Obtaining verifications on education checks, employment history checks, performance feedback checks, reference/cross-reference checks, criminal record checks, drug tests, address checks, etc.\r\n3. Analyzing verifications received and quality checks as per the internal parameters\r\n4. Updating online application by the minute on all checks/cases\r\n5. Working on achieving a low turnaround time for completing checks across all categories\r\n6. Creating and maintaining healthy relationships with verification source contacts\r\n7. Drafting screening reports and sending the same to the client relations team for issuance to the client','English Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nMS-Office','Absolute People Screen Private Limited empowers employers with information and data to successfully run an employment screening program. As a specialist provider of employee background checks in the region, we help organizations of all sizes to efficiently implement, manage, and improve employment screening programs. We pride ourselves on understanding the complexity of carrying out background checks across diverse regions & strive to provide solutions that help organizations make smart, wise, and safe hiring decisions. Our technology helps organizations run screening programs in a totally paperless & inkless environment, thereby reducing time & effort and enhancing the candidate experience.'),(4,'https://internshala-uploads.internshala.com/logo%2F607bf27e9422e1618735742.png.webp','Social Media Marketing','Voyse Digital','Chennai','1 year','1,00,000 - 3,50,000 ','8 May\'24','Few hours ','17','2','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Take charge of creating, ideating, scheduling, and managing content for our client\'s social channels\r\n2. Work on organic growth strategies (keywords & hashtags research, bio optimization, and staying updated with an algorithm)\r\n3. Work with the design team to create visually appealing assets for social engagement\r\n4. Prepare daily, weekly, and monthly reports to measure the impact of your contributions\r\n5. Come up with engaging and interesting social media content and description\r\n6. Create, manage, publish, and monitor ads on different social media channels (Facebook, Instagram, LinkedIn, and Google)\r\n7. Work along with a designer to come up with creative and eye-catching ad creative\r\n8. Shoot and Record content for Clients','Content Writing,\r\nCreative Writing,\r\nDigital Marketing,\r\nEmail Marketing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nFacebook Marketing,\r\nInstagram Marketing,\r\nSearch Engine Optimization (SEO),\r\nSocial Media Marketing','Voyse Digital:\r\nOur skilled experts at Voyse Digital believe in providing quality services for the most reasonable industry standard prices. From developing websites to growing an audience for your business, we got it all covered for you.'),(5,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','Chennai','0-4','2,00,000-4,00,000','8 Mar\' 24','6','39','08','Selected intern\'s day-to-day responsibilities include:  1. Understand the product requirements and implement them as per specifications 2. Develop efficient, reusable, and reliable Python-based web service features 3. Build RESTful APIs and work with front-end developers for integration 4. Improve the functionality of existing systems and optimize the performance 5. Research new tools/technologies/processes and adopt them in work  Skills & Requirements:  1. Experience building web applications in Python-based web frameworks such as Django, and Flask 2. REST API experience preferred 3. Have great problem-solving skills and a knack for writing clean Python code 4. Deep understanding of OOPS and software engineering principles 5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data 6. Understanding of fundamentals behind a secure and scalable application 7. Familiarity with Cloud such as AWS and microservices is an advantage 8. B.Tech or M.Tech in computer science or related field (70% more','Django GitHub Linux Python REST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.');
/*!40000 ALTER TABLE `chennai` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:18

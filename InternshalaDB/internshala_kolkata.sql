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
-- Table structure for table `kolkata`
--

DROP TABLE IF EXISTS `kolkata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kolkata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `companyname` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `experience` varchar(100) DEFAULT NULL,
  `ctc` varchar(100) DEFAULT NULL,
  `applyby` varchar(100) DEFAULT NULL,
  `posted` varchar(200) DEFAULT NULL,
  `applicants` varchar(100) DEFAULT NULL,
  `openings` varchar(100) DEFAULT NULL,
  `keys` varchar(6000) DEFAULT NULL,
  `skills` varchar(900) DEFAULT NULL,
  `aboutcompany` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kolkata`
--

LOCK TABLES `kolkata` WRITE;
/*!40000 ALTER TABLE `kolkata` DISABLE KEYS */;
INSERT INTO `kolkata` VALUES (1,'https://internshala-uploads.internshala.com/logo%2Fef9i5oh1q9u-28771.png.webp','Junior Social Media Marketing Manager','Millat Private Limited','Kolkata','\r\n2-4',' 5,00,000 - 7,00,000','29 Mar\' 24','2 days','28','08','We are seeking a creative and strategic social media manager to join our dynamic team at Millat. This role is pivotal in strengthening our online presence, engaging with our audience, and promoting our unique blend of products and services that honor Islamic traditions and values. As the voice of Millat on social media, you will be responsible for creating compelling content, managing our social media accounts, and developing strategies that foster a sense of community and drive engagement.\r\n\r\nKey responsibilities:\r\n\r\n1. Develop and implement a cohesive social media strategy to increase brand visibility and engagement across various platforms (e.g., Instagram, Facebook, Twitter, LinkedIn)\r\n2. Create and curate engaging content that reflects Millat\'s values, including traditional attire, travel assistance, and our commitment to Islamic traditions and compassion\r\n3. Monitor trends in social media tools, applications, channels, design, and strategy to leverage new opportunities for Millat\r\n4. Engage with our community by responding to comments, messages, and reviews in a manner that promotes inclusivity and understanding\r\n5. Collaborate with the marketing team to align social media strategies with overall marketing campaigns and company objectives\r\n6. Analyze and report on the effectiveness of campaigns and social media engagement to drive continuous improvement and strategy refinement\r\n7. Foster partnerships with influencers, community leaders, and other stakeholders who resonate with Millat\'s mission and values','Content Writing,\r\nCreative Writing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nFacebook Marketing,\r\nInstagram Marketing,\r\nSocial Media Marketing','Welcome to Millat, a unique platform dedicated to the global Muslim audience. Our journey began with the aim of integrating faith with a shared sense of purpose to create an extraordinary marketplace.\r\n\r\nMillat is more than a collection of products and services; it\'s a hub for those who embrace Islamic traditions and values. We offer a beautiful selection of attire, including traditional thobes, abayas, and elegant kaftans, each piece reflecting the vibrancy and richness of Islamic culture.\r\n\r\nRooted in India, a land with a significant Islamic heritage, our approach is informed by this cultural depth, fostering an environment of compassion and understanding for everyone.\r\n\r\nAt Millat, we symbolize kindness and goodness, embodying the core values of our faith in all that we offer. Whether it\'s through comprehensive travel assistance or our wide range of products, our goal is to enhance and enrich your experiences.'),(2,'https://internshala-uploads.internshala.com/logo%2F649d3f0dd4dc81688026893.png.webp','Sales And Marketing For Pan India','Z Revolution Tech Private Limited','Kolkata','1-2','2,00,000 - 3,00,000','\r\n21 Apr\' 24','3 days','82','05','Are you passionate about sales and marketing? Are you looking for a dynamic role at a cutting-edge technology company? Look no further! Z Revolution Tech Private Limited is seeking a talented individual to join our team as a Sales and Marketing professional for Pan India.\r\n\r\nIt has to be relevant to the beauty products industry.\r\n\r\nKey responsibilities:\r\n\r\n1. Develop and implement strategic sales and marketing plans to achieve company targets\r\n2. Identify and pursue new business opportunities to expand our customer base\r\n3. Build and maintain strong relationships with existing and potential clients\r\n4. Create and deliver compelling sales presentations to showcase our products and services\r\n5. Collaborate with the marketing team to create innovative campaigns that drive brand awareness and customer engagement\r\n6. Monitor market trends and competitor activities to stay ahead of the curve\r\n7. Provide regular reports on sales performance and contribute to forecasting and budgeting efforts\r\n\r\nIf you have a proven track record in sales and marketing, possess excellent communication skills, and thrive in a fast-paced environment, we want to hear from you! Join us at Z Revolution Tech and be part of our exciting journey towards revolutionizing the tech industry. Apply now!','Sales','A B2B marketplace is a platform that connects businesses with other businesses to buy and sell goods or services. In the case of a B2B marketplace for salon owners, the platform would likely be used by salon owners to find suppliers of products and services related to running a salon, such as furniture, beauty products, fixtures, and equipment. The platform could also potentially be used by salon owners to sell retail products to their clients. Zalon is a platform where salons can buy anything on a single platform and they don\'t have to go to multiple vendors.'),(5,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','kolkata','0-4','2,00,000-4,00,000','8 Mar\' 24','6','39','08','Selected intern\'s day-to-day responsibilities include:  1. Understand the product requirements and implement them as per specifications 2. Develop efficient, reusable, and reliable Python-based web service features 3. Build RESTful APIs and work with front-end developers for integration 4. Improve the functionality of existing systems and optimize the performance 5. Research new tools/technologies/processes and adopt them in work  Skills & Requirements:  1. Experience building web applications in Python-based web frameworks such as Django, and Flask 2. REST API experience preferred 3. Have great problem-solving skills and a knack for writing clean Python code 4. Deep understanding of OOPS and software engineering principles 5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data 6. Understanding of fundamentals behind a secure and scalable application 7. Familiarity with Cloud such as AWS and microservices is an advantage 8. B.Tech or M.Tech in computer science or related field (70% more','Django GitHub Linux Python REST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.');
/*!40000 ALTER TABLE `kolkata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:11

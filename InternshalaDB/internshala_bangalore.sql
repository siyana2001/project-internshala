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
-- Table structure for table `bangalore`
--

DROP TABLE IF EXISTS `bangalore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bangalore` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `companyname` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `location` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `experience` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ctc` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `applyby` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `posted` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `applicants` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `openings` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `keys` varchar(6000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `skills` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `aboutcompany` varchar(6000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bangalore`
--

LOCK TABLES `bangalore` WRITE;
/*!40000 ALTER TABLE `bangalore` DISABLE KEYS */;
INSERT INTO `bangalore` VALUES (1,'https://internshala-uploads.internshala.com/logo%2F607bf27e9422e1618735742.png.webp','Social Media Marketing','Voyse Digital','Bangalore','1 year','2,00,000 - 3,00,000 ','8 may\'24','Few Hours','11','09','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Take charge of creating, ideating, scheduling, and managing content for our client\'s social channels\r\n2. Work on organic growth strategies (keywords & hashtags research, bio optimization, and staying updated with an algorithm)\r\n3. Work with the design team to create visually appealing assets for social engagement\r\n4. Prepare daily, weekly, and monthly reports to measure the impact of your contributions\r\n5. Come up with engaging and interesting social media content and description\r\n6. Create, manage, publish, and monitor ads on different social media channels (Facebook, Instagram, LinkedIn, and Google)\r\n7. Work along with a designer to come up with creative and eye-catching ad creative\r\n8. Shoot and Record content for Clients','Content Writing\r\nCreative Writing\r\nDigital Marketing,\r\nEmail Marketing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nFacebook Marketing,\r\nInstagram Marketing,\r\nSearch Engine Optimization (SEO),\r\nSocial Media Marketing','Voyse Digital:\r\nOur skilled experts at Voyse Digital believe in providing quality services for the most reasonable industry standard prices. From developing websites to growing an audience for your business, we got it all covered for you.'),(2,'https://internshala.com/uploads/logo%2Fbwvudrl1a7a-31696.jpeg','Inside Sales','Max Holidays Private Limited','Bangalore','3 Months','2,00,000 - 3,70,000 ','29 Feb\'24','1 week','126','02','Selected intern\'s day-to-day responsibilities include:\r\n\r\n1. Responding to emails, phone calls, and inquiries from potential customers\r\n2. Providing information about tour packages, itineraries, and travel arrangements\r\n3. Assisting in the booking process for clients, including flights, accommodations, and activities\r\n4. Handling paperwork related to bookings, such as contracts and travel documents\r\n5. Organizing and maintaining client files and records\r\n6. Working closely with other departments, such as marketing and sales, to ensure consistent and accurate information is provided to clients\r\n7. Providing support to clients during their travels, addressing any issues or concerns that may arise\r\n8. Gathering feedback from clients to assess satisfaction levels','American English,\r\nBritish English,\r\nEffective Communication,\r\nEnglish Proficiency (Spoken),\r\nTravel Itinerary Making','Founded in 2004 by Mr. Vishal Gogia, Max Holidays stands as a prominent travel company in India. Mr. Gogia, with over 30 years of profound expertise in the travel industry, is acknowledged as one of the youngest and most adept travel professionals in the country. Max Holidays is dedicated to serving the diverse needs of individual and family travelers, along with providing comprehensive services for leisure and business groups. Our expertise extends to organizing incentives, VIP and CIP services, conferences, and tourist charters, covering all facets of tourism in India.'),(3,'https://internshala-uploads.internshala.com/logo%2F5e2fde677c3fc1580195431.png.webp','Graphic Design','Adstacks Media','Bangalore','4 Months','2,50,000 - 3,50,000 ','21 Mar\'24','2 days','13','23','Selected candidate\'s day-to-day responsibilities include:\r\n\r\n1. Work on design constrains and deadlines.\r\n2. Conceptualize visuals based on requirements\r\n3. Prepare rough drafts and present ideas.\r\n4. Develop illustrations, logos, and other designs using software digitally.\r\n5. Use the appropriate colors and layouts for each graphic.\r\n6. Work with copywriters and creative director to produce the final design.\r\n7. Create and test graphics across various media.\r\n\r\nSkills required:\r\n\r\n1. Design marketing art assets, and illustrations for social media.\r\n2. Push creative projects from concept to final execution.\r\n3. Proficient in User Interface/Experience design and animation.\r\n4. Experience & knowledge in creating 2D art, 3D art, and vector art, including color, lighting, animation basics, and composition.\r\n5. Skill, knowledge, and understanding of multimedia design, production, and implementation.\r\n6. Strong knowledge of Photoshop, Aftereffects, Blender, & Illustrator.\r\n7. Strong knowledge of color theory, composition, realism, texture, color, and design Fundamentals.\r\n8. Experience using video editing.\r\n9. Strong interest in games.\r\n10. Ability to accept constructive feedback from seniors and managers.\r\n11. Ability to work collaboratively with artists and programmers.\r\n','Adobe After Effects\r\nAdobe Creative Suite\r\nAdobe Illustrator\r\nAdobe Photoshop,\r\nAdobe Premiere Pro,\r\nAnimation,\r\nBlender 3D,\r\nCorelDRAW,\r\nFigma,\r\nUI & UX Design,\r\nVideo Editing','Adstacks Media is a digital marketing company. We work as advertisers and publishers, and we have clients from all over the world. We have units in Singapore, China, and India, and we are based out of Gurgaon, India. No matter the medium or scale, we believe that products and brands work when they communicate with customers on a deeper level and create emotional connections that speak louder than words.'),(4,'https://internshala-uploads.internshala.com/logo%2F5ff966d1bd97d1610180305.png.webp','Backend & ML Development','COSGrid Systems Private Limited','Bangalore','0-4','2,00,000-4,00,000','8 Mar\' 24','6','39','08','Selected intern\'s day-to-day responsibilities include:  1. Understand the product requirements and implement them as per specifications 2. Develop efficient, reusable, and reliable Python-based web service features 3. Build RESTful APIs and work with front-end developers for integration 4. Improve the functionality of existing systems and optimize the performance 5. Research new tools/technologies/processes and adopt them in work  Skills & Requirements:  1. Experience building web applications in Python-based web frameworks such as Django, and Flask 2. REST API experience preferred 3. Have great problem-solving skills and a knack for writing clean Python code 4. Deep understanding of OOPS and software engineering principles 5. Strong familiarity with databases: relational DBs, NoSQL DBs, and big data 6. Understanding of fundamentals behind a secure and scalable application 7. Familiarity with Cloud such as AWS and microservices is an advantage 8. B.Tech or M.Tech in computer science or related field (70% more','Django GitHub Linux Python REST API','COSGrid Networks provides one of the leading secure SD-WAN solutions transforming enterprise WAN. Founded by IIT/IIM alumni, we\'ve been associated with many leading institutions such as the National Centre of Excellence (NCoE) for Cybersecurity Technology, NASSCOM, and JioGenNext. We combine in-depth research and deep expertise in networking & cybersecurity to build products that securely connect and defend enterprises, branch offices, remote working employees, cloud, etc. Our product RefleX-WAN is deployed by many enterprises and delivers superior customer experience across India and heading towards global deployments.');
/*!40000 ALTER TABLE `bangalore` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:17

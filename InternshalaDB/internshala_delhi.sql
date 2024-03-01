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
-- Table structure for table `delhi`
--

DROP TABLE IF EXISTS `delhi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delhi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `companyname` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `ctc` varchar(50) DEFAULT NULL,
  `applyby` varchar(50) DEFAULT NULL,
  `posted` varchar(50) DEFAULT NULL,
  `applicants` varchar(50) DEFAULT NULL,
  `openings` varchar(500) DEFAULT NULL,
  `keys` varchar(6000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `skills` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `aboutcompany` varchar(6000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delhi`
--

LOCK TABLES `delhi` WRITE;
/*!40000 ALTER TABLE `delhi` DISABLE KEYS */;
INSERT INTO `delhi` VALUES (1,'https://internshala-uploads.internshala.com/logo%2F30f6hjxq636-3471.png.webp','Senior Developer','Air Light','Delhi','0-4','2,00,000-4,00,000','April-05','7','48','28','Key responsibilities:1. Testing software and fixing problems2. Maintaining systems once they\'re up and running3. Being a part of technical designing','1.Android2.Embedded Systems3.Java4.XML','Recognized as the first inventor and executor of Android-based addressable fire alarms, digital public address, and gas leak alarm systems, the entire range of airtight fire detectors, control panels, speakers, paging units, software applications, etc. are designed, developed, and manufactured using the in-house facility.'),(2,'https://internshala-uploads.internshala.com/logo%2Fjfmn3d4118q-11188.png.webp','Senior Android Developer','BookWater Tech Private Limited','Delhi','0-5','6,00,000-8,50,000','17 Mar\' 24','8','35','16','Android Fullstack Developer: As a Fullstack Android Developer, your key responsibility areas involve working on both the frontend and backend aspects of Android application\r\n\r\n1. Android App Development: You are responsible for developing and maintaining the frontend of Android applications. This includes designing and implementing user interfaces (UI) using XML and Android UI components, implementing navigation and user interactions, and ensuring a smooth and intuitive user experience (UX)\r\n2. Backend Development: Fullstack Android Developers also work on the server-side development of Android applications. This involves designing and implementing APIs, handling HTTP requests and responses, working with databases, and implementing server-side business logic using technologies such as Node.js, Java, or other backend frameworks\r\n3. UI/UX Design: You are responsible for collaborating with UI/UX designers to translate design mockups into functional and visually appealing Android app interfaces. This involves implementing design guidelines, ensuring consistency in UI elements, and optimizing UI components for different screen sizes and orientations\r\n4. Data Storage and Management: Fullstack Android Developers work with databases to store and retrieve data within Android applications. You are responsible for designing database schemas, implementing data models, and using appropriate data storage solutions such as SQLite, Realm, or Firebase Realtime Database\r\n5. API Integration: You are responsible for integrating Android applications with backend APIs and services. This includes consuming and processing data from RESTful or GraphQL APIs, handling authentication and authorization, and implementing data synchronization between the front end and back end\r\n6. Testing and Debugging: Fullstack Android Developers perform testing and debugging activities to ensure the quality and reliability of Android applications. This includes writing and executing unit tests, conducting integration testing, identifying and fixing bugs, and maintaining code quality through code reviews and best practices','1.Java\r\n2.Kotlin\r\n3.Flutter\r\n4.HTML\r\n5.CSS\r\n6.ReactJS','BookWater is the world\'s first IoT-powered and quality-based water delivery platform. BookWater offers the most convenient way to get high-quality & safe drinking water cans delivered to the doorstep. Its patent-pending technology allows you to scan the QR on your water can and discover the quality of water packed in the can through sensors installed at the manufacturing locations.\r\n\r\nFor the first time in the world, BookWater\'s connected cans allow you to also discover the number of times your can has been used and when it will be upcycled just by scanning the QR. Cans used indiscriminately could lead to health hazards owing to the microplastics and microbiological contamination they cause.\r\n\r\nHeadquartered in Chennai, Bookwater is a venture capital-backed and DPIIT-recognized company and is currently expanding to major cities in India by 2023.'),(3,'https://internshala-uploads.internshala.com/logo%2Fe6pfhdh20pm-11256.png.webp','.NET Developer','ValleyPoint Technologies','Delhi','0-5','5,00,000-7,20,000','8 Mar\' 24','6','39','12','Key responsibilities:\r\n\r\n1. Build UI\r\n2. Develop APIs using .NET core 6.0\r\n3. Test the application for release','1.c##\r\n2.DotNet(.Net)\r\n3.Ruby\r\n4.Postman','ValleyPoint is an e-commerce service provider based in Nungambakkam, Chennai. We help retailers to sell their business to third-party marketplaces. Our core departments are e-commerce & IT.'),(4,'https://internshala-uploads.internshala.com/logo%2F1b2urk67ph4-11136.png.webp','Associate Software Developer ','BDNT Labs Private Limited','Delhi','4-5','5,00,000-7,20,000','29 Mar\' 24','2 week of','40 ','19','Key responsibilities:\r\n\r\n1. Develop, and implement holistic solution architectures for homogenous problem domains from both a business and technical perspective\r\n2. Perform a solution definition of a problem domain. Develop overall system and solution architecture, system integration, and implementation strategy\r\n3. Deliver an integrated solution that meets the needs of the customer within the constraints of the contract\r\n4. Work on implementation planning of the technical/business solution from pre-sale through delivery\r\n5. Have excellent attention to high quality and drive it in all projects\r\n6. Participate in reviews and troubleshooting within and outside his/her project team\r\n7. Have the right focus towards best practices like coding standards and other industry standards\r\n8. Ensure creation of reliable internal and end user documentation. Participate in customer interactions. Evaluate application with respect to clients\' business needs','.Net , HTML , Springboot , MVC Architecture','BDNT LABS is a pioneering technology company based in Adilabad. As trailblazers in the tech industry, we continually push the boundaries to deliver cutting-edge solutions. We\'re currently seeking a seasoned architect to champion our software development endeavors.'),(5,'https://internshala-uploads.internshala.com/logo%2F624c0d27a67491649151271.png.webp','Business Development Executive','ConsultBae Private Limited','Delhi','0-3','4,00,000-5,00,000','20 Apr\' 24','3','51','03','Key responsibilities:\r\n\r\n1. Deliver on monthly and quarterly revenue targets/business plans\r\n2. Use the Hunting, Farming, and Harvesting approach to manage the B2B customer pipeline\r\n3. Manage operations, and maintain relationships & thereby grow business revenue with existing B2B customers\r\n4. Approach, convert, and develop new prospective B2B customers in order to sell the organization\'s products & services\r\n5. Ensure TAT is maintained with each B2B customer as per agreed terms with each one of them\r\n6. Ensure timely follow-up on payment receivables with B2B customers and ensure no overdue\r\n7. Ensure margins are maintained for each B2B customer to achieve desired profitability for the organization\r\n8. Handle other roles & businesses along with existing roles as & when required by the company\r\n\r\nRequirements:\r\n\r\n1. Graduate/MBA in Sales & Marketing from a recognized institution with 1-3 years experience in B2B sales/equivalent sales roles\r\n2. Prior experience in handling B2B customers in the Automotive domain is a plus\r\n3. Must be able to travel regularly as & when needed both intra/intercity\r\n4. Excellent interpersonal, completive selling technique, negotiation skills, business acumen, organizational skills, managing complexity, written and oral communication skills\r\n5. Ability to work and thrive in a start-up environment\r\n6. Ability to multi-task\r\n7. Proficiency in Microsoft Office','Sales,\r\nCommunicating well ','We, at ConsultBae, are solving the most significant problem that organizations face today- finding the right talent that can complement an organization\'s culture and growth. ConsultBae blends technology with human intelligence that increases the quality of candidates exponentially and reduces closure TAT.');
/*!40000 ALTER TABLE `delhi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:22

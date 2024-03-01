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
-- Table structure for table `wfh`
--

DROP TABLE IF EXISTS `wfh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wfh` (
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
  `skills` varchar(600) DEFAULT NULL,
  `aboutcompany` varchar(6000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wfh`
--

LOCK TABLES `wfh` WRITE;
/*!40000 ALTER TABLE `wfh` DISABLE KEYS */;
INSERT INTO `wfh` VALUES (1,'https://internshala-uploads.internshala.com/logo%2F62ce631e372011657692958.png.webp','Business Development (Sales)','TradeHike Consulting','Work From Home','0 - 2','3,00,000 - 4,00,000','02 jun\'24','3 days','129','09','Key responsibilities:\r\n\r\n1. Strategic planning: Develop and execute strategic plans to achieve sales targets and expand market share within the e-learning industry\r\n2. Lead generation: Identify and pursue new business opportunities through market research, networking, and prospecting activities\r\n3. Client relationship management: Build and maintain strong relationships with existing and potential clients to understand their needs and provide tailored solutions\r\n4. Proposal development: Prepare and present proposals, quotations, and presentations to prospective clients, highlighting the value proposition of our e-learning solutions\r\n5. Negotiation and closing: Negotiate terms and contracts with clients to secure new business and achieve revenue targets\r\n6. Partnership development: Identify and cultivate strategic partnerships with other organizations, educational institutions, and industry stakeholders to drive business growth and enhance our product offerings\r\n7. Market intelligence: Monitor industry trends, competitor activities, and customer feedback to identify opportunities for innovation and improvement\r\n8. Sales reporting: Prepare regular sales reports, forecasts, and pipeline updates for management review','Business Analysis,\r\nBusiness Research,\r\nDigital Marketing,\r\nEmail Marketing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nMS-Excel,\r\nSocial Media Marketing','TVM E-Learning is an education outsourcing company that focuses on educating clients by providing customized services to fulfill their tutoring needs with the help of technology and experienced tutors. Founded in the year 2018, TVM E-Learning education outsourcing company can help you to achieve your goals. Its outsourcing activities in education give more time to concentrate on the core educational processes which are teaching and research. It also gives access to professional, expert, and high-quality services. Outsourcing with TVM E-Learning offers institutions, online tutoring and teaching companies a competitive advantage as well as enable them to increase productivity in all areas.'),(2,'https://internshala-uploads.internshala.com/logo%2F5e2fdc4814e821580194888.jpg.webp','Backend Integration Engineer','Vitality Living College','\r\nWork from home','2-4',' 7,00,000 ','22 Mar\' 24','4 days','78','02','Key responsibilities:\r\n\r\n1. Design, develop, and maintain high-quality integration solutions between our LXP and various third-party systems (PMS, HRMS, etc.)\r\n2. Work closely with cross-functional teams to gather and interpret integration requirements, translating complex business processes into effective technical solutions\r\n3. Ensure secure data exchange by implementing reliable protocols and complying with data privacy regulations\r\n4. Diagnose and resolve integration issues, offering prompt and efficient support to both internal teams and external partners\r\n5. Proactively recommend and implement enhancements to integration frameworks to boost performance, reliability, and system scalability\r\n6. Document all integration processes thoroughly and create comprehensive user guides for both internal purposes and client assistance\r\n\r\nMust-have skills:\r\n\r\n1. Bachelor\'s degree in computer science, information technology, or a related field\r\n2. Demonstrable experience in software development with a strong focus on system integration\r\n3. Expertise in programming languages such as JavaScript, Python\r\n4. In-depth knowledge of RESTful APIs, web services, and AWS Cloud services\r\n5. Proficiency in data formats (JSON, XML), communication protocols (HTTP, HTTPS), and authentication mechanisms (OAuth, JWT)\r\n6. Strong background in database technologies (SQL, NoSQL) and experience with ETL tools\r\n7. Excellent problem-solving abilities, meticulous attention to detail\r\n8. Effective communication skills, capable of collaborating efficiently across diverse teams\r\n','Amazon Web Services (AWS),\r\nJavaScript,\r\nJSON,\r\nNoSQL,\r\nPython,\r\nREST API,\r\nSQL,\r\nXML,','AntWalk is a platform that helps high-growth companies in creating an intelligent workplace with empowered knowledge workers. The platform equips professionals with the right skills in line with the business objectives of the organization. Professionals are provided easy access to insights by global professionals who have walked the talk.\r\n\r\nOur platform is powered by 3,000+ experts from 500+ global brands to provide professionals with an arsenal of short knowledge bytes, live group classes, and 1:1 interactions with experts. These enable them to learn in the flow of work, develop a growth mindset, and propel their career to the. AntWalk has been started by a team of Mckinsey/ISB alums and life-long passionate teachers. We are a series-A funded startup backed by amazing investors like Y-Combinator, a valley-based ed-tech VC, and Matrix Partners.'),(3,'https://internshala-uploads.internshala.com/logo%2Fef9i5oh1q9u-28771.png.webp','Junior Social Media Marketing Manager','Millat Private Limited','\r\nWork from home','1 -2','5,00,000 - 7,00,000','29 Mar\' 24','2 days','45','09','We are seeking a creative and strategic social media manager to join our dynamic team at Millat. This role is pivotal in strengthening our online presence, engaging with our audience, and promoting our unique blend of products and services that honor Islamic traditions and values. As the voice of Millat on social media, you will be responsible for creating compelling content, managing our social media accounts, and developing strategies that foster a sense of community and drive engagement.\r\n\r\nKey responsibilities:\r\n\r\n1. Develop and implement a cohesive social media strategy to increase brand visibility and engagement across various platforms (e.g., Instagram, Facebook, Twitter, LinkedIn)\r\n2. Create and curate engaging content that reflects Millat\'s values, including traditional attire, travel assistance, and our commitment to Islamic traditions and compassion\r\n3. Monitor trends in social media tools, applications, channels, design, and strategy to leverage new opportunities for Millat\r\n4. Engage with our community by responding to comments, messages, and reviews in a manner that promotes inclusivity and understanding\r\n5. Collaborate with the marketing team to align social media strategies with overall marketing campaigns and company objectives\r\n6. Analyze and report on the effectiveness of campaigns and social media engagement to drive continuous improvement and strategy refinement\r\n7. Foster partnerships with influencers, community leaders, and other stakeholders who resonate with Millat\'s mission and values','Content Writing,\r\nCreative Writing,\r\nEnglish Proficiency (Spoken),\r\nEnglish Proficiency (Written),\r\nFacebook Marketing,\r\nInstagram Marketing,\r\nSocial Media Marketing','Welcome to Millat, a unique platform dedicated to the global Muslim audience. Our journey began with the aim of integrating faith with a shared sense of purpose to create an extraordinary marketplace.\r\n\r\nMillat is more than a collection of products and services; it\'s a hub for those who embrace Islamic traditions and values. We offer a beautiful selection of attire, including traditional thobes, abayas, and elegant kaftans, each piece reflecting the vibrancy and richness of Islamic culture.\r\n\r\nRooted in India, a land with a significant Islamic heritage, our approach is informed by this cultural depth, fostering an environment of compassion and understanding for everyone.\r\n\r\nAt Millat, we symbolize kindness and goodness, embodying the core values of our faith in all that we offer. Whether it\'s through comprehensive travel assistance or our wide range of products, our goal is to enhance and enrich your experiences.');
/*!40000 ALTER TABLE `wfh` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:03:14

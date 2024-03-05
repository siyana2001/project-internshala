import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Main.css';

import img1 from  '../assets/carousel/img1.png';
import img2 from  '../assets/carousel/img2.png';
import img3 from  '../assets/carousel/img3.png';
import img4 from  '../assets/carousel/img4.png';
import img5 from  '../assets/carousel/img5.png';

import searchs from  '../assets/other/white-search-icon-png-19.jpg';

import bang from "../assets/city/bangalore.svg";
import che from "../assets/city/chennai.svg";
import del from "../assets/city/delhi_ncr.svg" ;
import mum from "../assets/city/mumbai.svg";
import work from "../assets/city/work_from_home.svg";
import inter from "../assets/city/international.svg";
import hyd from "../assets/city/hyderabad.svg";
import kol from "../assets/city/kolkata.svg";

import des from "../assets/categories/design.svg"
import eng from "../assets/categories/engineering.svg"
import hum from "../assets/categories/humanities.svg"
import mba from "../assets/categories/mba.svg"
import medi from "../assets/categories/media.svg"
import ngo from "../assets/categories/ngo.svg"
import part from "../assets/categories/part_time.svg"
import sci from "../assets/categories/science.svg"

import advanced_excel from "../assets/trainings/advanced_excel.svg"
import autocad from "../assets/trainings/autocad.svg"
import creative_writing from "../assets/trainings/creative_writing.svg"
import digital_marketing from "../assets/trainings/digital_marketing.svg"
import ethical_hacking from "../assets/trainings/ethical_hacking.svg"
import machine_learning from "../assets/trainings/machine_learning.svg"
import programming_with_python from "../assets/trainings/programming_with_python.svg"
import web_development from "../assets/trainings/web_development.svg"

import google from "../assets/socials/icons8-google-play.svg"
import instagram from "../assets/socials/icons8-instagram-logo.svg"
import linkedin from "../assets/socials/icons8-linkedin-2.svg"
import twitter from "../assets/socials/icons8-twitter.svg"
import youtube from "../assets/socials/youtube.png"

import ctc from "../assets/Jobs/ctc.svg"
import dream from "../assets/Jobs/dream.svg"
import verified from "../assets/Jobs/verified.svg"
import { Coursecard } from '../../Components/Course/Coursecard';

export const Mains = () => {
  // useEffect(() => {
  //   // Initialize Bootstrap components
  //   // For dropdowns
  //   const dropdownMenuList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  //   dropdownMenuList.map(function (dropdownToggleEl) {
  //     return new bootstrap.Dropdown(dropdownToggleEl);
  //   });

  //   // For carousels
  //   const carouselEl = document.getElementById('carouselExampleIndicators');
  //   new bootstrap.Carousel(carouselEl);
  // }, []);

  return (
  <>
 
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="logo" /></a>
        <button className="navbar-toggler collapsed navbar-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Internships</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Online trainings <span>CONTEST</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Fresher jobs</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#"><button type="button" className="btn btn-outline-primary">Login</button></a>
            </li> */}
            <li className="nav-item dropdown">
              <a id="Reg_button" className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Register
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">As a student</a></li>
                <li><a className="dropdown-item" href="#">As an employer</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search"></input>
  <button className="btn btn-outline-success" type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={searchs} alt="search" style={{ height: '25px', width: '25px' }} />
  </button>
</form>


<div className="container" style={{ marginLeft: '70px'}}>
  <div className="row justify-content-end">
    <div className="col-lg-12">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item active">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="Slide 5" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>


    <div className="container">
  <h2>Internships</h2>
  <div className="container">
    <div className="row">
      <div className="col">
        <p>Apply to 10,000+ internships for free</p>
      </div>
      <div className="col">
        <span>View all internships <span>&#10132;</span></span>
      </div>
    </div>
  </div>
</div>

<h4>Popular cities</h4>
<div className="cities">
  <a className="cityitem" href="/wfhs">
    <div className="cityimage">
      <img src={work} alt="" />
    </div>
    <div className="citytext">
      Work from home
    </div>
  </a>
  <a className="cityitem" href="/dels">
    <div className="cityimage">
      <img src={del} alt="" />
    </div>
    <div className="citytext">
      Delhi/NCR
    </div>
  </a>
  <a className="cityitem" href="/bangs">
    <div className="cityimage">
      <img src={bang} alt="" />
    </div>
    <div className="citytext">
      Bangalore
    </div>
  </a>
  {/* <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={mum} alt="" />
    </div>
    <div className="citytext">
      Mumbai
    </div>
  </a> */}
  <a className="cityitem" href="/hydras">
    <div className="cityimage">
      <img src={hyd} alt="" />
    </div>
    <div className="citytext">
      Hyderabad
    </div>
  </a>
  <a className="cityitem" href="/ches">
    <div className="cityimage">
      <img src={che} alt="" />
    </div>
    <div className="citytext">
      Chennai
    </div>
  </a>
  <a className="cityitem" href="/kolkas">
    <div className="cityimage">
      <img src={kol} alt="" />
    </div>
    <div className="citytext">
      Kolkata
    </div>
  </a>
  <a className="cityitem" href="/inters">
    <div className="cityimage">
      <img src={inter} alt="" />
    </div>
    <div className="citytext">
      International
    </div>
  </a>
</div>

<h4>Popular categories</h4>
<div className="cities">
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={part} alt="" />
    </div>
    <div className="citytext">
      Part-time
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={eng} alt="" />
    </div>
    <div className="citytext">
      Engineering
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={ngo} alt="" />
    </div>
    <div className="citytext">
      NGO
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={mba} alt="" />
    </div>
    <div className="citytext">
      MBA
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={des} alt="" />
    </div>
    <div className="citytext">
      Design
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={sci} alt="" />
    </div>
    <div className="citytext">
      Science
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={medi} alt="" />
    </div>
    <div className="citytext">
      Media
    </div>
  </a>
  {/* <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={hum} alt="" />
    </div>
    <div className="citytext">
      Humanities
    </div>
  </a> */}
</div>

<h2 id="itrain">Internshala Trainings</h2>
<div className="row">
  <div className="col">
    <p>Learn new-age skills on the go</p>
  </div>
  <div className="col">
    <span>View all trainings <span>&#10132;</span></span>
  </div>
</div>

<div>
  <Coursecard/>
</div>

<div className="cities">
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={programming_with_python} alt="" />
    </div>
    <div className="citytext">
      Programming <br /> with Python
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={digital_marketing} alt="" />
    </div>
    <div className="citytext">
      Digital <br /> Marketing
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={web_development} alt="" />
    </div>
    <div className="citytext">
      Web <br /> Development
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={machine_learning} alt="" />
    </div>
    <div className="citytext">
      Machine <br /> Learning
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={advanced_excel} alt="" />
    </div>
    <div className="citytext">
      Advanced Excel
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={ethical_hacking} alt="" />
    </div>
    <div className="citytext">
      Ethical Hacking
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={autocad} alt="" />
    </div>
    <div className="citytext">
      AUTOCAD
    </div>
  </a>
  <a className="cityitem" href="#">
    <div className="cityimage">
      <img src={creative_writing} alt="" />
    </div>
    <div className="citytext">
      Creative Writing
    </div>
  </a>
</div>

<h2 id="fjobs">Fresher Jobs <span>New</span></h2>
<div className="row">
  <div className="col">
    <p>Premium fresher jobs on your fingertips</p>
  </div>
  <div className="col">
    <span>View all jobs <span>&#10132;</span></span>
  </div>
</div>

    


    <div className="cities1">
  <a className="cityitem1" href="#">
    <div className="cityimage1">
      <img src={ctc} alt="" />
    </div>
    <div className="citytext1">
      Minimum CTC of 3 LPA
    </div>
  </a>
  <a className="cityitem1" href="#">
    <div className="cityimage1">
      <img src={dream} alt="" />
    </div>
    <div className="citytext1">
      Dream companies
    </div>
  </a>
  <a className="cityitem1" href="#">
    <div className="cityimage1">
      <img src={verified} alt="" />
    </div>
    <div className="citytext1">
      100% verified jobs
    </div>
  </a>
</div>


<footer id="foo" className="container-fluid">
  <div className="foocon">
    <div className="foocol">
      <div className="foolist">
        <h5>Internships by places</h5>
        <div className="listitm"><a href="">Internship in India</a></div>
        <div className="listitm"><a href="">Internship in Delhi</a></div>
        <div className="listitm"><a href="">Internship in Bangalore</a></div>
        <div className="listitm"><a href="">Internship in Hyderabad</a></div>
        <div className="listitm"><a href="">Internship in Mumbai</a></div>
        <div className="listitm"><a href="">Internship in Chennai</a></div>
        <div className="listitm"><a href="">Internship in Gurgaon</a></div>
        <div className="listitm"><a href="">Internship in Kolkata</a></div>
        <div className="listitm"><a href="">Virtual Internship</a></div>
      </div>
    </div>
    <div className="foocol">
      <div className="foolist">
        <h5>Internship by Stream</h5>
        <div className="listitm"><a href="">Computer Science Internship</a></div>
        <div className="listitm"><a href="">Electronics Internship</a></div>
        <div className="listitm"><a href="">Mechanical Internship</a></div>
        <div className="listitm"><a href="">Civil Internship</a></div>
        <div className="listitm"><a href="">Marketing Internship</a></div>
        <div className="listitm"><a href="">Chemical Internship</a></div>
        <div className="listitm"><a href="">Finance Internship</a></div>
        <div className="listitm"><a href="">Summer Research Fellowship</a></div>
        <div className="listitm"><a href="">Campus Ambassador Program</a></div>
      </div>
    </div>
    <div className="foocol">
      <div className="foolist">
        <h5>Online Trainings <span>CONTEST</span></h5>
        <div className="listitm"><a href="">Programming with Python</a></div>
        <div className="listitm"><a href="">Digital Marketing</a></div>
        <div className="listitm"><a href="">Web Development</a></div>
        <div className="listitm"><a href="">Machine Learning</a></div>
        <div className="listitm"><a href="">Advanced Excel</a></div>
        <div className="listitm"><a href="">Ethical Hacking</a></div>
        <div className="listitm"><a href="">AutoCAD</a></div>
        <div className="listitm"><a href="">Creative Writing</a></div>
      </div>
    </div>
    <div className="foocol">
      <div className="foolist">
        <h5>About Internshala</h5>
        <div className="listitm"><a href="">About us</a></div>
        <div className="listitm"><a href="">We're hiring</a></div>
        <div className="listitm"><a href="">Hire interns for your company</a></div>
        <div className="listitm"><a href="">Team Diary</a></div>
        <div className="listitm"><a href="">Blog</a></div>
        <div className="listitm"><a href="">Our Services</a></div>
        <div className="listitm"><a href="">Terms & Conditions</a></div>
        <div className="listitm"><a href="">Privacy</a></div>
        <div className="listitm"><a href="">Contact us</a></div>
      </div>
    </div>
  </div>
  <div className="foo2">
    <a href="https://play.google.com/store/apps/details?id=com.internshala.app&referrer=utm_source%3Dplay_footer">
      <div className="andlistitm">
        <img src={google} alt="" />
        <span>Get Android App</span>
      </div>
    </a>
    <div className="socialsbox">
      <a href="#"><img className="socimg" src={instagram} alt="" /></a>
      <a href="#"><img className="socimg" src={twitter} alt="" /></a>
      <a href="#"><img className="socimg" src={youtube} alt="" /></a>
      <a href="#"><img className="socimg" src={linkedin} alt="" /></a>
    </div>
    
  </div>
  <div>
    <br />
    <br />
    <div id="me">Made by <a href="https://github.com/code-reaper08">Hajralsiyana29</a></div>
    <br />
    <br />
  </div>
</footer>
  </>
  )
}

import React, { useEffect } from 'react';
import './footer.css'
import Aos from "aos"
import 'aos/dist/aos.css';
import gal1 from "../Zuck/img/course-1.jpg";
import gal2 from "../Zuck/img/course-2.jpg";
import gal3 from "../Zuck/img/course-3.jpg";




function Footer() {
    useEffect(()=>{

        Aos.init();
    
       },[])

  return (
   <>
     <div className="container-fluid bg-dark text-light footer pt-5 mt-5  aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="container py-5">
                <div className="row g-5">
                <div className="col-lg-3 col-md-6">
    <h4 className="text-white mb-3">Quick Link</h4>
    <a className="btn btn-link text-decoration-none" href="">About Us</a>
    <a className="btn btn-link text-decoration-none" href="">Contact Us</a>
    <a className="btn btn-link text-decoration-none" href="">Privacy Policy</a>
    <a className="btn btn-link text-decoration-none" href="">Terms & Condition</a>
    <a className="btn btn-link text-decoration-none" href="">FAQs & Help</a>
</div>

<div className="col-lg-3 col-md-6">
    <h4 className="text-white mb-3">Internships by places</h4>
    <a className="btn btn-link text-decoration-none" href="">Internship in Delhi</a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Bangalore </a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Hyderabad </a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Kolkata</a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Chennai</a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Mumbai</a>
    <a className="btn btn-link text-decoration-none" href="">Internship in Noida</a>
    <a className="btn btn-link text-decoration-none" href="">Internship in work from home</a>
    
</div>
<div className="col-lg-3 col-md-6">
    <h4 className="text-white mb-3">Internships by stream</h4>
    <a className="btn btn-link text-decoration-none" href="">Computer Science Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Electronics Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Mechanical Internship </a>
    <a className="btn btn-link text-decoration-none" href="">Civil Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Marketing Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Chemical Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Finance Internship</a>
    <a className="btn btn-link text-decoration-none" href="">Campus Ambassador Program</a>
    
</div>
<div className="col-lg-3 col-md-6">
    <h4 className="text-white mb-3">Online Trainings </h4>
    <a className="btn btn-link text-decoration-none" href="">Programming with Python</a>
    <a className="btn btn-link text-decoration-none" href="">Digital Marketing </a>
    <a className="btn btn-link text-decoration-none" href="">Web Development </a>
    <a className="btn btn-link text-decoration-none" href="">Machine Learning</a>
    <a className="btn btn-link text-decoration-none" href="">Advanced Excel</a>
    <a className="btn btn-link text-decoration-none" href="">AutoCAD</a>
    <a className="btn btn-link text-decoration-none" href="">Ethical Hacking</a>
    <a className="btn btn-link text-decoration-none" href="">Creative Writing</a>
    
</div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3  aos-animate" data-aos="fade-left" data-aos-delay="100">Contact</h4>
                        <p className="mb-2"><i className="fas fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fas fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="row mt-4">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3  aos-animate" data-aos="fade-left" data-aos-delay="300">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={gal1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 ">Newsletter</h4>
                        <p>Internshala is India's no.1 internship jobs and training platform with 40000+ paid internships All streams.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <div className="input-group mb-3">
                                <input className="form-control border-0 py-3 ps-4" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-1">SignUp</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Internnshala  </a> &nbsp;
                            All Right Reserved &nbsp;|&nbsp;@2024Mar <a className="border-bottom" href="#"> HS</a><br /><br />
                          Designed &<a className="border-bottom" href="https://github.com/siyana2001">&nbsp;Copyrights By HS</a> 
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Footer
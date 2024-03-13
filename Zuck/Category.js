import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './category.css';
import OwlCarousel from 'react-owl-carousel';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import cat1 from "../Zuck/img/cat-1.jpg"
import cat2 from "../Zuck/img/cat-2.jpg"
import cat3 from "../Zuck/img/cat-3.jpg"
import cat4 from "../Zuck/img/cat-4.jpg"

import cor1 from "../Zuck/img/fsd-min.webp"
import cor2 from "../Zuck/img/dm-min.webp"
import cor3 from "../Zuck/img/ev-min.webp"

import test1 from "../Zuck/img/testimonial-1.jpg"
import test2 from "../Zuck/img/testimonial-2.jpg"
import test3 from "../Zuck/img/testimonial-3.jpg"
import test4 from "../Zuck/img/testimonial-4.jpg"







function Category() {
    useEffect(() => {
        Aos.init();
    
    },[]);
  return (
   <>
<div className="container-xxl py-5 category  aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-info px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                    <div className="col-lg-12 col-md-12 aos-animate" data-aos="fade-down" data-aos-delay="100">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat1} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 className="m-0">Web Design</h5>
                                    <small className="text-info">29 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 aos-animate" data-aos="fade-down" data-aos-delay="250">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat2} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 className="m-0">Graphic Design</h5>
                                    <small className="text-info">19 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 aos-animate" data-aos="fade-down" data-aos-delay="300">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src={cat3} alt="" />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                                    <h5 className="m-0">Video Editing</h5>
                                    <small className="text-info">14 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 aos-animate" data-aos="fade-down" data-aos-delay="400">
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src={cat4} alt="" style={{ objectFit: 'cover' }} />
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3">
                            <h5 className="m-0">Online Marketing</h5>
                            <small className="text-info">17 Courses</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>


         
 <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center aos-animate" data-aos="fade-up" data-aos-delay="250">
            <h6 className="section-title bg-white text-center text-info px-3">Courses</h6>
            <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 aos-animate" data-aos="fade-down" data-aos-delay="250">
            <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src={cor1} alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">₹ 79,500</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small>(11083)</small>
                                </div>
                                <h5 className="mb-4">FullStack Development Course for Beginners</h5>
                            </div>
                            <div className='ms-3'>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-graduation-cap text-info me-1"></i>Caroline king</small>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-clock text-info me-1 "></i>2.30 Hrs</small>
                                <small className="flex-fill text-center p-2"><i className="fa fa-user text-info me-1 "></i>35 Students</small>
                            </div>
                        </div>
            </div>
       
    

            <div className="col-lg-4 col-md-6 aos-animate" data-aos="fade-down" data-aos-delay="250">
            <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src={cor2} alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">₹ 59,500</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small>(30983)</small>
                                </div>
                                <h5 className="mb-4">Data Structure Course for Beginners</h5>
                            </div>
                            <div className='ms-3'>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-graduation-cap text-info me-1"></i>Paul Wesley</small>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-clock text-info me-1 "></i>1.40 Hrs</small>
                                <small className="flex-fill text-center p-2"><i className="fa fa-user text-info me-1 "></i>32 Students</small>
                            </div>
                        </div>
            </div>
       
            <div className="col-lg-4 col-md-6 aos-animate" data-aos="fade-down" data-aos-delay="250">
            <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src={cor3} alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-info px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">₹ 49,500</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small className="fa fa-star text-info"></small>
                                    <small>(20983)</small>
                                </div>
                                <h5 className="mb-4">Electric Vehicle industry Course for Beginners</h5>
                            </div>
                            <div className='ms-3'>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-graduation-cap text-info me-1"></i>Elijah Nickalson</small>
                                <small className="flex-fill text-center border-end p-2"><i className="fa fa-clock text-info me-1 "></i>1.30 Hrs</small>
                                <small className="flex-fill text-center p-2"><i className="fa fa-user text-info me-1 "></i>30 Students</small>
                            </div>
                        </div>
            </div>
      
        </div>
    </div>
    </div>

{/* testimonil */}


<div className="container-xxl py-5 aos-animate" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-info px-3">Testimonial</h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <OwlCarousel className="owl-carousel testimonial-carousel position-relative" items={1} loop autoplay autoplayHoverPause nav>
          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={test1} style={{ width: '80px', height: '80px' }} alt="Client Name" />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>

          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={test2} style={{ width: '80px', height: '80px' }} alt="Client Name" />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>

          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={test3} style={{ width: '80px', height: '80px' }} alt="Client Name" />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>

          <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={test4} style={{ width: '80px', height: '80px' }} alt="Client Name" />
            <h5 className="mb-0">Client Name</h5>
            <p>Profession</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>





          </OwlCarousel>
      </div>
    </div>
   </>
  )
}

export default Category
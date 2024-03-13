import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './contact.css';
import Aos from "aos"
import 'aos/dist/aos.css';

function Contact() {
    useEffect(()=>{

        Aos.init();
    
       },[])

  return (
    <>
    
  <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <h6 className="section-title bg-white text-center text-info px-3">Contact Us</h6>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6 aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <h5>Get In Touch</h5>
                        <p className="mb-3">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a  style={{ color:'cyan'}} href="#">Download Now</a>.</p>
                        <div className=" mb-1">
                            <div className=" flex-shrink-0 bg-info text-center m-0 p-3" style={{ width: '50px', height: '50px' }}>
                                <i className="fa fa-user text-white"></i>
                            </div>
                            <div className="">
                                <h5 className="text-info">Office</h5>
                                <p className="mb-0">123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className="">
                            <div className=" flex-shrink-0 bg-info text-center m-0 p-3" style={{ width: '50px', height: '50px' }}>
                                <i className="fa fa-phone text-white"></i>
                            </div>
                            <div className="">
                                <h5 className="text-info">Mobile</h5>
                                <p className="mb-0">+012 345 67890</p>
                            </div>
                        </div>
                        <div className="">
                            <div className=" flex-shrink-0 bg-info text-center m-0 p-3" style={{ width: '50px', height: '50px' }}>
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="">
                                <h5 className="text-info">Email</h5>
                                <p className="mb-0">info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0" style={{ minHeight: '200px', border: '0' }} allowFullScreen="" aria-hidden="false"
                            tabIndex="0"></iframe>
                    </div>
                    <div className="col-lg-4 col-md-12   aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <form >
                            <div className="row g-3">
                                <div className="col-md-6 me-2">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 me-2">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject"  style={{ height: '107px' }}placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <button className="btn btn-info w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
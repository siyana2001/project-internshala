import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

import Aos from "aos"
import 'aos/dist/aos.css';
import './skill.css';
function Skilled() {
    useEffect(()=>{

        Aos.init();
    
       },[])
    return (
        <div className="container-xxl py-5"  style={{marginTop:"4rem"}}>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 aos-animate" data-aos="fade-down" data-aos-delay="100">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap  mb-4"></i>
                            <h5 className="mb-3">Skilled Instructors</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 aos-animate" data-aos="fade-down" data-aos-delay="250">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe  mb-4"></i>
                            <h5 className="mb-3">Online Classes</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 aos-animate" data-aos="fade-down" data-aos-delay="300">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home  mb-4"></i>
                            <h5 className="mb-3">Home Projects</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 aos-animate" data-aos="fade-down" data-aos-delay="400">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book mb-4"></i>
                            <h5 className="mb-3">Book Library</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skilled;

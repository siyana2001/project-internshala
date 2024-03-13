import React, { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './team.css'
import Aos from "aos"
import 'aos/dist/aos.css';
import damon from "../Zuck/img/gent1.png"
import elena from "../Zuck/img/new1.png"
import stefen from "../Zuck/img/new3.png"
import caro from "../Zuck/img/gent2.png"




const TeamCard = ({ name, designation, image }) => {
    useEffect(()=>{

        Aos.init();
    
       },[])

  return (
    <div className="col-lg-3 col-md-6 aos-animate" data-aos="fade-down" data-aos-delay="100">
      <div className="team-item bg-light">
      <div className="overflow-hidden" style={{ width: "100%", height: "270px" }}>
          <img className="img-fluid" src={image} alt={name} style={{ width: "100%", height: "100%"}} />
        </div>
        <div className="position-relative " style={{ marginTop: "-23px" }}>
          <div className="bg-light tech pt-3 px-3 ">
            <a className="btn btn-sm-square btn-info mx-3"  href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square btn-info mx-3"  href=""><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square btn-info mx-3"  href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="text-center p-4">
          <h5 className="mb-0 text-dark">{name}</h5>
          <small className="mb-0 text-secondary">{designation}</small>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center aos-animate" data-aos="fade-up" data-aos-delay="100">
          <h6 className="section-title bg-white text-center text-info px-3">Instructors</h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          <TeamCard name="Damon Salvatore" designation="FullStack" image={damon} />
          <TeamCard name="Elena Gilbert" designation="DataStructure" image={elena} />
          <TeamCard name="Caroline Forbes" designation="HumanReasource" image={stefen} />
          <TeamCard name="Stefan Salvatore" designation="UI/UX Web" image={caro} />
        </div>
      </div>
    </div>
  );
};

export default Team;

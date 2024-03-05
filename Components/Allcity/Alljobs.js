import React from 'react';
import { BsGeoAlt, BsCurrencyRupee, BsBriefcase } from 'react-icons/bs';
import Slider from 'react-slick';
import jobimage1 from "../assets/fake/logo_jfmn3d4118q-11188.png.png";
import jobimage2 from "../assets/fake/logo_e6pfhdh20pm-11256.png.png"; 
import jobimage3 from "../assets/fake/logo_6g0jgmfwo5z-623202.jpg.jpg";
import jobimage4 from "../assets/fake/logo_62ebcae80ddd31659620072.jpg.webp"; 
import jobimage5 from "../assets/fake/logo_5ff966d1bd97d1610180305.png.webp"; 
import jobimage6 from "../assets/fake/logo_30f6hjxq636-3471.png.png"; 
import jobimage7 from "../assets/fake/logo_1j2p2x8u2ml-67133.png.png"; 

function JobCard({ image, title, companyName, location, salary, experience }) {
  return (
    <div className="card" style={{ position: 'relative', margin: '10px', marginBottom: '20px' }}>
      <img src={image} className="card-img-top rounded-circle" alt="Job Image" style={{ position: 'absolute', top: '0', right: '0', maxWidth: '50px', height: 'auto' }} />
      <div className="card-body container">
        <h6 className="card-text text-body-dark" style={{ fontWeight: 'bold', color: 'dark' }}>{title}</h6>
        <p className="card-title" style={{ color: 'grey' }}>{companyName}</p>
        <p className="card-text text-body-secondary"><BsGeoAlt /> {location}</p>
        <p className="card-text text-body-secondary"> {salary}</p>
        <p className="card-text text-body-secondary"><BsBriefcase /> {experience}</p>
        <p className="card-text" style={{ color: 'blue' }}><small>View more -&gt;</small></p>
      </div>
    </div>
  );
}

function Alljobs() {
  const jobData = [
    { image: jobimage1, title: "Senior Android App Developer", companyName: "BookWater Tech Private Limited", location: "Chennai", salary: "₹ 6,00,000 - 8,40,000 /year", experience: "0-3 years" },
    { image: jobimage2, title: ".NET Developer", companyName: "Valley Point Technologies", location: "Kolkata,Delhi,Agra,Thirisur", salary: "₹ 45,000  /month", experience: "8 months"  },
    { image: jobimage3, title: "Software Developer", companyName: "Brid Tech solutions", location: "Ahmedabad,Chandigarh", salary: "₹ 6,00,000 - 8,00,000/year" , experience: "3-5 years" },
    { image: jobimage4, title: "ASP.NET Developer", companyName: "KiVi Private limited", location: "Raipur", salary: "₹ 3,00,000 /year" , experience: "5 months" },
    { image: jobimage5, title: "Backend Developer", companyName: "COSGrid technologies pvt lmt", location: "Kochi,Ludhaiana", salary: "₹ 6,00,000 - 8,40,000 /year", experience: "0-2 years"  },
    { image: jobimage6, title: "Full Stack Developer", companyName: "AirLight Info Tech", location: "Chennai", salary: "₹ 86,000 /month", experience: "3-4 year"  },
    { image: jobimage7, title: "Artificial Intelligence(AI)", companyName: "AVaari Technologies", location: "Chennai,Bangalore", salary: "₹ 26,000 /month", experience: "3 months"  },
    { image: jobimage7, title: "Machine Learning(ML)", companyName: "AVaari Technologies", location: "Bangalore,Noida", salary: "₹ 26,000 /month", experience: "3 months"  },


  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, textAlign: "center", marginTop: "6rem" }}>
        Recommended for you
      </h1>
      <div style={{ textAlign: "center",marginBottom: "3rem" }}>
       <h5> <span style={{ fontFamily: 'Poppins, sans-serif' }}>as per your </span>
       <span style={{ fontFamily: 'inherit', color: 'blue' }}>preferences</span></h5>
      </div>
      <Slider {...settings}>
        {jobData.map((job, index) => (
          <JobCard 
            key={index}
            image={job.image}
            title={job.title}
            companyName={job.companyName}
            location={job.location}
            salary={job.salary}
            experience={job.experience}
       
          />
        ))}
      </Slider>
    </>
  );
}

export default Alljobs;

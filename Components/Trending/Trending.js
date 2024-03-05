import React from "react";
import Slider from "react-slick";
import './Trend.css';
import img1 from "../assets/photos/full_stack_development_course.png";
import img2 from "../assets/photos/bogo_mar24_fh-student.png.webp";
import img3 from "../assets/photos/britannia_1_day-student.png.webp";
import img4 from "../assets/photos/aditya_birla_capital-student.png.webp";
import img5 from "../assets/photos/int_opps-student.png.webp";
import img6 from "../assets/photos/is_jobs-student.png.webp";
import img7 from "../assets/photos/isp_41-student.png.webp";

function Trending() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  // Array of image URLs
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];

  return (
    <div className="trending-container">
    <h2 style={{ fontFamily: 'Madimi One, sans-serif', fontWeight: 600, marginBottom:'7rem' }}>
      <strong style={{ color: 'dark' }}>Hi, Hajral!</strong> 
      <span style={{ display: 'inline-block', animation: 'shake 0.5s infinite', transformOrigin: '50% 50%', animationTimingFunction: 'ease-in-out' }}>
        👋
      </span>
      <br />
      <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', textAlign: 'center' }}>
        Let's help you land your dream career
      </span>
    </h2>
    <h2 style={{ fontWeight: 'bold' }}>
      Trending on Internshala 
      <span role="img" aria-label="fire emoji">&#x1F525;</span>
    </h2>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "380px", height: "300px", borderRadius: "20px", marginLeft: "30px" }}
          />
        </div>
      ))}
    </Slider>
  </div>
    
  );
}

export default Trending;

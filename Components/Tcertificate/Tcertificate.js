
import React from 'react'
import cimage1 from "../assets/Tcerti/web-development.png.webp";
import cimage2 from "../assets/Tcerti/python.png.webp";
import cimage3 from "../assets/Tcerti/data-science.png.webp";
import cimage4 from "../assets/Tcerti/digital-marketing.png.webp";



function Tcertificate() {
  return (
    <>
    <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 ,textAlign:"center", marginBottom: "4rem", marginTop:"4rem"}}>
     Certification courses for you
       </h1>
    <div className="card-group">
   
      <div className="card" style={{ margin: '10px', marginBottom: '20px' }}>
        <img src={cimage1} className="card-img-top" alt="Card 1" />
        <div className="card-body container">
          <p className="card-title" style={{ color: 'grey' }}>8 weeks</p>
          <h6 className="card-text text-body-dark" style={{ fontWeight: 'bold', color: 'dark' }}>Web Development</h6>
          <p className="card-text text-body-secondary"><span style={{ color: 'yellow' }}>&#9733;</span>4.1 | 108943</p>
          <p className="card-text" style={{ color: 'blue' }}><small>Know more -&gt;</small></p>
        </div>
      </div>
      <div className="card" style={{ margin: '10px', marginBottom: '20px' }}>
        <img src={cimage2} className="card-img-top" alt="Card 2" />
        <div className="card-body container">
          <p className="card-title" style={{ color: 'grey' }}>6 weeks</p>
          <h6 className="card-text text-body-dark" style={{ fontWeight: 'bold', color: 'dark' }}>Programming With Python</h6>
          <p className="card-text text-body-secondary"><span style={{ color: 'yellow' }}>&#9733;</span>4.1 | 81672</p>
          <p className="card-text" style={{ color: 'blue' }}><small>Know more -&gt;</small></p>
        </div>
      </div>
      <div className="card" style={{ margin: '10px', marginBottom: '20px' }}>
        <img src={cimage3} className="card-img-top" alt="Card 3" />
        <div className="card-body container">
          <p className="card-title" style={{ color: 'grey' }}>6 weeks</p>
          <h6 className="card-text text-body-dark" style={{ fontWeight: 'bold', color: 'dark' }}>Data Science</h6>
          <p className="card-text text-body-secondary"><span style={{ color: 'yellow' }}>&#9733;</span>4.1 | 34568</p>
          <p className="card-text" style={{ color: 'blue' }}><small>Know more -&gt;</small></p>
        </div>
      </div>
      <div className="card" style={{ margin: '10px', marginBottom: '20px' }}>
        <img src={cimage4} className="card-img-top" alt="Card 4" />
        <div className="card-body container">
          <p className="card-title" style={{ color: 'grey' }}>8 weeks</p>
          <h6 className="card-text text-body-dark" style={{ fontWeight: 'bold', color: 'dark' }}>Digital Marketing</h6>
          <p className="card-text text-body-secondary" style={{ color: 'grey' }}><span style={{ color: 'yellow' }}>&#9733;</span> 4.5 | 68943</p>
          <p className="card-text" style={{ color: 'blue' }}><small>Know more -&gt;</small></p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Tcertificate
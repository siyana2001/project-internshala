import React from 'react'
import './Navbar.css';


function Navbar() {
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
              {/* <a id="Reg_button" className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Register
              </a> */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">As a student</a></li>
                <li><a className="dropdown-item" href="#">As an employer</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
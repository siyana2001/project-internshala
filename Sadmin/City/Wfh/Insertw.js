import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-bootstrap'; 

export const Insertw = () => {
  function inserting(event) {
    event.preventDefault();

    var image = document.getElementById("image").value;
    var name = document.getElementById("name").value;
    var companyname = document.getElementById("companyname").value;
    var location = document.getElementById("location").value;
    var experience = document.getElementById("experience").value;
    var ctc = document.getElementById("ctc").value;
    var applyby = document.getElementById("applyby").value;
    var posted = document.getElementById("posted").value;
    var applicants = document.getElementById("applicants").value;
    var openings = document.getElementById("openings").value;
    var keys = document.getElementById("keys").value;
    var skills = document.getElementById("skills").value;
    var aboutcompany = document.getElementById("aboutcompany").value;
  
    var data = {
      "image": image,
      "name": name,
      "companyname": companyname,
      "location": location,
      "experience": experience,
      "ctc": ctc,
      "applyby": applyby,
      "posted": posted,
      "applicants": applicants,
      "openings": openings,
      "keys": keys,
      "skills": skills,
      "aboutcompany": aboutcompany
    };

    if (name === "") {
      alert("Please enter the name");
    } else if (companyname === "") {
      alert("Please enter the company name");
    } else if (location === "") {
      alert("Please enter the location");
    } else if (experience === "") {
      alert("Please enter the experience");
    } else if (ctc === "") {
      alert("Please enter the CTC");
    } else if (applyby === "") {
      alert("Please enter the apply by date");
    } else if (posted === "") {
      alert("Please enter the posted date");
    } else if (applicants === "") {
      alert("Please enter the number of applicants");
    } else if (openings === "") {
      alert("Please enter the number of openings");
    } else if (keys === "") {
      alert("Please enter the keys");
    } else if (skills === "") {
      alert("Please enter the skills");
    } else if (aboutcompany === "") {
      alert("Please enter about the company");
    } else {
      axios.post("http://localhost:3009/insertwfh", data)
        .then((response, error) => {
          if (error) {
            alert("Data are not inserted");
          } else if (response.data.status === "inserted") {
            alert("Data are inserted successfully");
            window.location.href = "/wfhs";
          }
        });
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <center>
          <h3 className="mb-9">Insertion</h3>
          <form onSubmit={inserting} style={{ border: '1px solid #ccc', width: '400px', padding: '20px' }}>
            <div className="mb-3">
              <input type='text' id='image' name='image' placeholder='Enter the URL' className='form-control' />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" required placeholder="Enter the name" />
            </div>
            <div className="mb-3">
              <label htmlFor="companyname" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="companyname" name="companyname" placeholder="Enter company name" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" id="location" name="location" placeholder="Enter location" />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">Experience</label>
              <input type="text" className="form-control" id="experience" name="experience" placeholder="Enter experience" />
            </div>
            <div className="mb-3">
              <label htmlFor="ctc" className="form-label">CTC</label>
              <input type="text" className="form-control" id="ctc" name="ctc" placeholder="Enter CTC" />
            </div>
            <div className="mb-3">
              <label htmlFor="applyby" className="form-label">Apply By</label>
              <input type="text" className="form-control" id="applyby" name="applyby" placeholder="Enter apply by date" />
            </div>
            <div className="mb-3">
              <label htmlFor="posted" className="form-label">Posted</label>
              <input type="text" className="form-control" id="posted" name="posted" placeholder="Enter posted date" />
            </div>
            <div className="mb-3">
              <label htmlFor="applicants" className="form-label">Applicants</label>
              <input type="text" className="form-control" id="applicants" name="applicants" placeholder="Enter number of applicants" />
            </div>
            <div className="mb-3">
              <label htmlFor="openings" className="form-label">Openings</label>
              <input type="text" className="form-control" id="openings" name="openings" placeholder="Enter number of openings" />
            </div>
            <div className="mb-3">
              <label htmlFor="keys" className="form-label">About the job</label>
              <input type="text" className="form-control" id="keys" name="keys" placeholder="Enter keys" />
            </div>
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">Skills</label>
              <input type="text" className="form-control" id="skills" name="skills" placeholder="Enter skills required" />
            </div>
            <div className="mb-3">
              <label htmlFor="aboutcompany" className="form-label">About Company</label>
              <input type="text" className="form-control" id="aboutcompany" name="aboutcompany" placeholder="Enter about company" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className='enroll btn btn-dark' type="submit">Submit</button>
              <Link to="/wfhs" className="enroll btn btn-dark">Back</Link>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
};


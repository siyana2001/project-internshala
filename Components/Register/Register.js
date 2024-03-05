import axios from "axios";
import React from "react";
import './Register.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import intern from '../../Login/internshala.png'


 export function Register() {

    function insert(event) {
        event.preventDefault();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phno = document.getElementById("phno").value;
        var experience = document.getElementById("experience").value;
        var salary = document.getElementById("salary").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var pincode = document.getElementById("pincode").value;
        var skills = document.getElementById("skills").value;
        var location = document.getElementById("location").value;
        var need = document.getElementById("need").value;
        var mode = document.getElementById("mode").value;
    
        var data = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "phno": phno,
            "experience": experience,
            "salary": salary,
            "address": address,
            "city": city,
            "state": state,
            "pincode": pincode,
            "skills": skills,
            "location": location,
            "need": need,
            "mode": mode
        };
    
        if (fname === '') {
            alert("First Name is empty");
        } else if (lname === '') {
            alert("Last Name is empty");
        } else if (email === '') {
            alert("Email is empty");
        } else if (phno === '') {
            alert("Phone number is empty");
        } else if (experience === '') {
            alert("Experience is empty");
        } else if (salary === '') {
            alert("Salary is empty");
        } else if (address === '') {
            alert("Address is empty");
        } else if (city === '') {
            alert("City is empty");
        } else if (state === '') {
            alert("State is empty");
        } else if (pincode === '') {
            alert("Pincode is empty");
        } else if (skills === '') {
            alert("Skills is empty");
        } else if (location === '') {
            alert("Location is empty");
        } else if (need === '') {
            alert("Need is empty");
        } else if (mode === '') {
            alert("Mode is empty");
        } else {
            axios.post("http://localhost:3009/register", data)
                .then(response => {
                    if (response.data.status === "proceeded") {
                        alert("Your Details has been submitted successfully.");
                        window.location.href="/student"
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert("Details are not inserted");
                });
        }
    }
  return (
  <>
   <div className="text-center">
        <img src={intern} alt="Intern" style={{ width: '250px', height: '150px', display: 'block', margin: 'auto' }} />
      </div>
 <h2 className="text-center text-dark mb-4">Apply here your personal details</h2>
<div className="container mt-1">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={insert}>
                <div className="mb-3 text-dark">
                    <label htmlFor="fname" className="form-label text-dark">
                        <span className="font-bold-italic">First Name</span>
                    </label>
                    <input type="text" className="form-control" id="fname" name="fname" placeholder="Enter the First Name"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="lname" className="form-label text-dark">
                        <span className="font-bold-italic">Last Name</span>
                    </label>
                    <input type="text" className="form-control" id="lname" name="lname" placeholder="Enter the Last Name"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="email" className="form-label text-dark font-bold-italic">
                        Email ID
                    </label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter the email"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="phno" className="form-label text-dark font-bold-italic">
                        Phone Number
                    </label>
                    <input type="text" className="form-control" id="phno" name="phno" placeholder="Enter the Phone number"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="experience" className="form-label text-dark font-bold-italic">
                        Current years of Work Experience
                    </label>
                    <input type="text" className="form-control" id="experience" name="experience" placeholder="eg: 0, 1.7, 2......10"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="salary" className="form-label text-dark font-bold-italic">
                        Current Annual Salary
                    </label>
                    <input type="text" className="form-control" id="salary" name="salary" placeholder="eg: 0, 2,00,000"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="address" className="form-label text-dark font-bold-italic">
                        Residential Address
                    </label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter the Address"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="city" className="form-label text-dark font-bold-italic">
                        City
                    </label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="Enter the city"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="state" className="form-label text-dark font-bold-italic">
                        State
                    </label>
                    <input type="text" className="form-control" id="state" name="state" placeholder="Enter the state"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="pincode" className="form-label text-dark font-bold-italic">
                        Pincode
                    </label>
                    <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Enter the pincode"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="skills" className="form-label text-dark font-bold-italic">
                        Skills
                    </label>
                    <input type="text" className="form-control" id="skills" name="skills" placeholder="eg: JAVA, HTML....."  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="location" className="form-label text-dark font-bold-italic">
                        Location you want work
                    </label>
                    <input type="text" className="form-control" id="location" name="location" placeholder="Enter the Location"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="need" className="form-label text-dark font-bold-italic">
                        Expectation of your CTC
                    </label>
                    <input type="text" className="form-control" id="need" name="need" placeholder="Enter the CTC"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="mode" className="form-label text-dark font-bold-italic">
                        Mode of Work
                    </label>
                    <input type="text" className="form-control" id="mode" name="mode" placeholder="eg: wfh,wfo,hybrid"  />
                </div>

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
</div>

  </>
  )
}


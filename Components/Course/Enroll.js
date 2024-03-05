import axios from "axios";
import React from "react";
import './Enroll.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import intern from '../../Login/internshala.png'



export function Enroll() {

    function insert(event) {
        event.preventDefault();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var coursename = document.getElementById("coursename").value;
        var coursemode = document.getElementById("coursemode").value;
        var qualification = document.getElementById("qualification").value;
        var cgpa = document.getElementById("cgpa").value;
        var tenth = document.getElementById("10th").value;
        var twelth = document.getElementById("12th").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
    
        var data = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "phone": phone,
            "coursename": coursename,
            "coursemode": coursemode,
            "qualification": qualification,
            "cgpa": cgpa,
            "10th": tenth,
            "12th": twelth,
            "address": address,
            "city": city,
            "state": state
        };
    
        if (fname === '') {
            alert("First Name is empty");
        } else if (lname === '') {
            alert("Last Name is empty");
        } else if (email === '') {
            alert("Email is empty");
        } else if (phone === '') {
            alert("Phone number is empty");
        } else if (coursename === '') {
            alert("Course Name is empty");
        } else if (coursemode === '') {
            alert("Course Mode is empty");
        } else if (qualification === '') {
            alert("Qualification is empty");
        } else if (cgpa === '') {
            alert("CGPA is empty");
        } else if (tenth === '') {
            alert("10th percentage is empty");
        } else if (twelth === '') {
            alert("12th percentage is empty");
        } else if (address === '') {
            alert("Address is empty");
        } else if (city === '') {
            alert("City is empty");
        } else if (state === '') {
            alert("State is empty");
        } else {
            axios.post("http://localhost:3009/enroll", data)
                .then(response => {
                    if (response.data.status === "enrolled") {
                        alert("Your Application has been submitted successfully.");
                        window.location.href="/coursefull"
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
<h2 className="text-center text-dark mb-4">Register here to enroll in our course</h2>
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
                    <label htmlFor="phone" className="form-label text-dark font-bold-italic">
                        Phone Number
                    </label>
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter the Phone number"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="coursename" className="form-label text-dark font-bold-italic">
                        Course Name
                    </label>
                    <input type="text" className="form-control" id="coursename" name="coursename" placeholder="Enter the Course Name"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="coursemode" className="form-label text-dark font-bold-italic">
                        Course Mode
                    </label>
                    <input type="text" className="form-control" id="coursemode" name="coursemode" placeholder="Eg.online/offline"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="qualification" className="form-label text-dark font-bold-italic">
                        Qualification
                    </label>
                    <input type="text" className="form-control" id="qualification" name="qualification" placeholder="Enter the Qualification"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="cgpa" className="form-label text-dark font-bold-italic">
                        CGPA
                    </label>
                    <input type="text" className="form-control" id="cgpa" name="cgpa" placeholder="Enter the CGPA"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="10th" className="form-label text-dark font-bold-italic">
                        10th Percentage
                    </label>
                    <input type="text" className="form-control" id="10th" name="10th" placeholder="Enter the 10th Percentage"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="12th" className="form-label text-dark font-bold-italic">
                        12th Percentage
                    </label>
                    <input type="text" className="form-control" id="12th" name="12th" placeholder="Enter the 12th Percentage"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="address" className="form-label text-dark font-bold-italic">
                        Address
                    </label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter the Address"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="city" className="form-label text-dark font-bold-italic">
                        City
                    </label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="Enter the City"  />
                </div>

                <div className="mb-3 text-dark">
                    <label htmlFor="state" className="form-label text-dark font-bold-italic">
                        State
                    </label>
                    <input type="text" className="form-control" id="state" name="state" placeholder="Enter the State"  />
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

 
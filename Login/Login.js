import React from 'react';
import './Login.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from "axios";
import { Link } from 'react-router-dom';
import google from "../Login/download.png"
import intern from '../Login/internshala.png'

export function Login() {
    function handlelogin(event){
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var data = {
            "email": email,
            "password": password
        };

        if(email === ""){
            alert("EmailID must be filled");
        } else if(password === ""){
            alert("Password must be filled");
        } else {
            axios.post("http://localhost:3009/logins", data)
            .then((res) => {
                if(res.data.status === "success"){
                    let id = res.data.id;
                    let category = res.data.category;
                    if(category === "admin"){
                        window.location.href = '/admin';
                    } else if(category === "student"){
                        window.location.href = '/student';
                    }
                } else if(res.data.status === "invalid"){
                    alert("Check your data");
                } else if(res.data.status === "empty-set"){
                    alert("EmailId is not found");
                } else if(res.data.status === "error"){
                    alert("Kindly contact your admin");
                }
            });
        }
    }

    return (
        <div className="background-container">
            <div className="login-form-container">
                <form onSubmit={handlelogin} className="login-form">
                <div className="text-center">
                <img src={intern} alt="Intern" style={{ width: '250px', height:"150px", display: 'block', margin: 'auto' }} />
            </div>
                    {/* <h1>Hello!! <span role="img" aria-label="Wave">&#x1F44B;&#128519;</span></h1> */}
                    <div className="text-center mb-3">
                    <p>Internshala are happy to have you here <span role="img" aria-label="Heart">&#x1F495;</span></p>
                    </div>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email address" />
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password" />
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="formCheck" />
                        <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                    </div>
                    <div className="text-center gap-2">
    <button type="submit" className="btn btn-primary" style={{ width: '200px' }}>Login</button>
</div>
                    <div className="text-center my-3">
                        <button className="btn btn-light">
                            <img src={google} alt="Google" style={{ width: '15px', height:"15px" }} className="me-2" />
                            <small>Sign In with Google</small>
                        </button>
                    </div>
                    <div className="text-center">
                        <small>Don't have an account? <Link to="/sign">Sign Up</Link></small>
                    </div>
                </form>
            </div>
        </div>
    );
}

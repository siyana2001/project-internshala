import axios from "axios";
import React from "react";
import './Sign.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import intern from '../Login/internshala.png'


export function Sign(){
    function insert(event){
        event.preventDefault();
        var name=document.getElementById("name").value
        var category=document.getElementById("category").value
        var email=document.getElementById("email").value
        var password= document.getElementById("password").value


        var data={
            
            "name":name,
            "category":category,
            "email":email,
            "password":password,
        }
        if(name===''){
            alert("Name is empty")
        }
        else if (category === '') {
            alert('Category is empty');
        }
        else if (email === '') {
            alert('Email is empty');
        }
        else if (password === '') {
          alert('Password is empty');
      }


        else{
            axios.post("http://localhost:3009/insertsign",data)
            .then((response,error)=>{
                if(error){
                    alert("Data are not inserted")
                }
                else  if(response.data.status==="inserted"){
                    alert("Data are inserted successfully")
                    window.location.href="/login"
                }
            })
    }
    }
    return(
        <>
         <div className="container mt-1">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="text-center">
        <img src={intern} alt="Intern" style={{ width: '250px', height: '150px', display: 'block', margin: 'auto' }} />
      </div>
      <h2 className="text-center text-dark mb-4">Register to shine in future</h2>
      <form onSubmit={insert}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter the Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input type="text" className="form-control" id="category" placeholder="Admin or student" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter the email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter the Password" />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


    </>
        
    );
    }
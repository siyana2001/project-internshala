import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function Updatei() {
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [location, setLocation] = useState('');
    const [experience, setExperience] = useState('');
    const [ctc, setCtc] = useState('');
    const [applyby, setApplyby] = useState('');
    const [posted, setPosted] = useState('');
    const [applicants, setApplicants] = useState('');
    const [openings, setOpenings] = useState('');
    const [keys, setKeys] = useState('');
    const [skills, setSkills] = useState('');
    const [aboutcompany, setAboutCompany] = useState('');

    useEffect(() => {
        fetch("http://localhost:3009/getupdateinter/" + id)
            .then(res => res.json())
            .then((data) => {
                setImage(data[0].image);
                setName(data[0].name);
                setCompanyname(data[0].companyname);
                setLocation(data[0].location);
                setExperience(data[0].experience);
                setCtc(data[0].ctc);
                setApplyby(data[0].applyby);
                setPosted(data[0].posted);
                setApplicants(data[0].applicants);
                setOpenings(data[0].openings);
                setKeys(data[0].keys);
                setSkills(data[0].skills);
                setAboutCompany(data[0].aboutcompany);
               
            });
    }, []);
    const updates = (event) => {
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
            "image":image,
            "name":name,
            "companyname":companyname,
            "location":location,
            "experience":experience,
            "ctc":ctc,
            "applyby":applyby,
            "posted":posted,
            "applicants":applicants,
            "openings":openings,
            "keys":keys,
            "skills":skills,
            "aboutcompany":aboutcompany,
            
        }
        if (image === '') {
            alert('URL is empty');
        } else if (name === '') {
            alert("Name is empty");
        } else if (companyname === '') {
            alert('Company name is empty');
        } else if (location === '') {
            alert('Location is empty');
        } else if (experience === '') {
            alert('Experience is empty');
        } else if (ctc === '') {
            alert('CTC is empty');
        } else if (applyby === '') {
            alert('Apply by is empty');
        } else if (posted === '') {
            alert('Posted is empty');
        } else if (applicants === '') {
            alert('Applicants is empty');
        } else if (openings === '') {
            alert('Openings is empty');
        } else if (keys === '') {
            alert('Keys is empty');
        } else if (skills === '') {
            alert('Skills is empty');
        } else if (aboutcompany === '') {
            alert('About Company is empty');
        } else {
            axios.put('http://localhost:3009/updateinter/' + id, data)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data are not updated");
                    } else if (res.data.status === "updated") {
                        alert("Data are updated successfully");
                        window.location.href = "/inters";
                    }
                });
        }
    }

  return (
   <>
  <div className="container">
            <h1>Update</h1>
            <form onSubmit={updates}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter the URL" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyname" value={companyname} onChange={(e) => setCompanyname(e.target.value)} placeholder="Enter the Company Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter the Location" />
                </div>
                <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input type="text" className="form-control" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Enter the Experience" />
                </div>
                <div className="mb-3">
                    <label htmlFor="ctc" className="form-label">CTC</label>
                    <input type="text" className="form-control" id="ctc" value={ctc} onChange={(e) => setCtc(e.target.value)} placeholder="Enter the CTC" />
                </div>
                <div className="mb-3">
                    <label htmlFor="applyby" className="form-label">Apply By</label>
                    <input type="text" className="form-control" id="applyby" value={applyby} onChange={(e) => setApplyby(e.target.value)} placeholder="Enter the Apply By date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="posted" className="form-label">Posted</label>
                    <input type="text" className="form-control" id="posted" value={posted} onChange={(e) => setPosted(e.target.value)} placeholder="Enter the Posted days" />
                </div>
                <div className="mb-3">
                    <label htmlFor="applicants" className="form-label">Applicants</label>
                    <input type="text" className="form-control" id="applicants" value={applicants} onChange={(e) => setApplicants(e.target.value)} placeholder="Enter the number of Applicants" />
                </div>
                <div className="mb-3">
                    <label htmlFor="openings" className="form-label">Openings</label>
                    <input type="text" className="form-control" id="openings" value={openings} onChange={(e) => setOpenings(e.target.value)} placeholder="Enter the number of Openings" />
                </div>
                <div className="mb-3">
                    <label htmlFor="keys" className="form-label">Keys</label>
                    <input type="text" className="form-control" id="keys" value={keys} onChange={(e) => setKeys(e.target.value)} placeholder="Enter the Keys" />
                </div>
                <div className="mb-3">
                    <label htmlFor="skills" className="form-label">Skills</label>
                    <input type="text" className="form-control" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Enter the Skills" />
                </div>
                <div className="mb-3">
                    <label htmlFor="aboutcompany" className="form-label">About Company</label>
                    <input type="text" className="form-control" id="aboutcompany" value={aboutcompany} onChange={(e) => setAboutCompany(e.target.value)} placeholder="Enter the About Company" />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
   </>
  )
};

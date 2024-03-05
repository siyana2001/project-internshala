import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { BsGeoAlt, BsCalendar, BsBriefcase, BsFileText, BsBuilding, BsCashCoin, BsClock, BsPeople, BsCurrencyRupee } from 'react-icons/bs'; // Import icons from Bootstrap Icons
// import { FaFontAwesomeAlt } from 'react-icons/fa'; 
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


export const Kolkaid = () => {
    
    const { id } = useParams();
    const [getdata, setGetdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3009/getbyidk/${id}`);
                setGetdata(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

  return (
    <>

<section id="c" style={{ display: 'flex', flexWrap: 'wrap', margin: '60px', gap: '50px', justifyContent: 'center' }}>
            {getdata.map((value, index) => (
                <div key={index} style={{ margin: '10px', width: 'auto', borderRadius: '10px', textAlign: 'center' }}>
                    <h1 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>{value.name}</h1>
                    <Card style={{ width: 'fit-content', position: 'relative' }}>
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div style={{ color: '#6c757d' }}><h3>{value.companyname}</h3><br />
                                <h4> <BsGeoAlt />{value.location}</h4>
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <BsCurrencyRupee/> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>CTC :</span> {value.ctc} -/Annual  &nbsp;&nbsp;&nbsp;&nbsp; 
                                <BsBriefcase /> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Experience:</span> {value.experience} years &nbsp;&nbsp;&nbsp;&nbsp; 
                                <BsCalendar /> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Apply By:</span> {value.applyby}
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <BsClock/> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Posted by</span> {value.posted} days ago &nbsp;&nbsp;&nbsp;&nbsp; 
                                <BsPeople /> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}></span> {value.applicants} applicants
                            </div>
                            <div style={{ marginBottom: '10px' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Skills:</span><br/>
                            {value.skills}</div>
                            <div style={{ marginBottom: '10px' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>About The Job:</span><br/>
                            {value.keys}</div>
                            <div style={{ marginBottom: '10px' }}><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>About The Company:</span><br/>
                            {value.aboutcompany}</div>
                            
                           <h5> <BsPeople /> <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}></span> {value.applicants} applicants </h5>
                            <div><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Openings:</span> {value.openings}</div>


                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="/kolka" className="btn btn-primary text-light" style={{ width: 'fit-content' }}>
                               &lt;- Back
                             </Link>
                             <Link to="/register" className="btn btn-primary text-light" style={{ width: 'fit-content' }}>
                             Apply This
                             </Link>

                                </div>
                        </Card.Body>
                        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '50px', height: '50px' }}>
                            <Card.Img
                                variant="top"
                                src={value.image}
                                alt=" "
                                className="rounded-circle"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </Card>
                    {/* Add your delete and update buttons here */}
                </div>
            ))}
        </section>
    </>
  )
}


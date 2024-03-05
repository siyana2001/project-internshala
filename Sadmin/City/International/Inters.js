import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import {  BsCurrencyRupee, BsTools,BsHouse ,BsGeoAlt } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';


export const Inters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3009/getallinter")
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

   

  return (
    <>
    <Navbar/>
  <Link to="/admin" style={{ position: 'absolute', top: '30px', left: '20px', zIndex: '1000', marginTop:"40px", fontWeight: 'bold', textDecoration: 'none', color: 'blue' }}>
                <BsHouse /> Back to Home
            </Link>
 <section id="c" style={{ display: 'flex', flexWrap: 'wrap', margin: '60px', gap: '50px', justifyContent: 'center' }}>
            {data.map((value, index) => (
                <div key={index} style={{ margin: '10px', width: '450px', height: '350px', borderRadius: '10px', textAlign: 'center' }}>
                    <Card style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <Card.Body style={{ padding: '20px' }}>
                            <div style={{ display: 'flex',  justifyContent: 'space-between' }}>
                                <div>
                                    <h5>{value.name}</h5>
                                    <p style={{ color: '#6c757d' }}>{value.companyname}</p>
                                </div>
                                <Card.Img
                                    variant="top"
                                    src={value.image}
                                    alt=" "
                                    className="rounded-circle"
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </div>
                            <hr />
                            <div style={{ textAlign: 'left' }}>
                                <p><BsGeoAlt /> {value.location}</p>
                                <p style={{fontStyle:'oblique'}}>CTC: <BsCurrencyRupee/>{value.ctc}</p>
                                <p style={{fontStyle:'italic'}}> <BsTools /> Skills: {value.skills}</p>
                            </div>
                            <div style={{ position: 'absolute', bottom: '10px', right: '15px' }}>
    <Link to={`/getinters/${value.id}`} style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'blue', textDecoration: 'none' }}>View more<span>&rarr;</span></Link>
</div>

                        
                        </Card.Body>
                    </Card>
                    {/* Add your delete and update buttons here */}
                </div>
            ))}
        </section>

        <Link to="/insertinter" style={{ position: 'absolute', top: '30px', right: '20px', zIndex: '1000', marginTop: "40px", fontWeight: 'bold', textDecoration: 'none', color: 'blue' }}>
                Insert
            </Link>
    </>
  )
}

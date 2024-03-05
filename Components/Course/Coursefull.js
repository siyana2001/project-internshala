import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { BsCurrencyRupee, BsClock, BsBriefcase, BsCalendar, BsLaptop } from 'react-icons/bs';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Coursefull = () => {
    const { id } = useParams();
    const [getdata, setGetdata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3009/getbyidcourse/${id}`);
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
                            <img src={value.image} alt="" style={{ width: '700px', height: '350px', margin: '0 auto' }} />
                                <p style={{ fontStyle: 'bold', fontFamily:'cursive', color: 'black' }}><BsClock  style={{ color: 'blue' }} />  Course Duration: {value.duration}</p><br/>
                                <p style={{ fontStyle: 'bold', fontFamily:'cursive', color: 'black' }}><BsLaptop  style={{ color: 'blue' }} />Class Mode: {value.mode}</p><br/>
                                
                                <p style={{ fontStyle: 'bold', fontFamily:'cursive', color: 'black' }}><BsCalendar  style={{ color: 'blue' }} /> Admission closes On: {value.closeon}</p><br/>
                                <p style={{ fontStyle: 'bold', fontFamily:'cursive', color: 'black' }}><BsCurrencyRupee  style={{ color: 'blue' }} /> Course Fees: {value.coursefees}</p><br/>
                                <h3 >{value.name}</h3>
                                <p > Details of our course:<br/>{value.detail}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/student" className="btn btn-primary text-light" style={{ width: 'fit-content' }}>
                                        &lt;- Back
                                    </Link>
                                    <Link to="/enrolling" className="btn btn-primary text-light" style={{ width: 'fit-content' }}>
                                        Apply This
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </section>
        </>
    );
}

import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGeoAlt, BsCurrencyRupee, BsClock, BsBriefcase } from 'react-icons/bs'; // Import icons
import { Link } from 'react-router-dom';

export const Coursecard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3009/getallcourse")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setData(data);
                } else {
                    setData([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <section id="c">
    <Slider {...settings}>
        {data.slice(0, 8).map((value, index) => (
            <div key={index} style={{ margin: '10px' }}>
                <div style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }}>
                    <Card style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <Card.Body style={{ padding: '10px' }}>
                            <div style={{ display: 'flex',  flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img src={value.image} alt=" " style={{ maxWidth: '100%', maxHeight: '200px' , display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} />
                                </div>
                                <h4 style={{ textAlign: "center" }}>{value.name}</h4>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ fontStyle: 'italic', color: 'grey' }}><BsClock style={{ color: 'blue' }} /> {value.duration}</p>
                                    <p style={{ fontStyle: 'italic', color: 'grey' }}><BsCurrencyRupee style={{ color: 'blue' }} /> {value.cost}</p>
                                    <p style={{ fontStyle: 'italic', color: 'grey' }}><BsBriefcase style={{ color: 'blue' }} /> {value.opportunity}</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div style={{ position: 'absolute', bottom: '10px', right: '15px' }}>
                            <Link to={`/coursefull/${value.id}`} style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'blue', textDecoration: 'none' }}>Know more<span>&rarr;</span></Link>
                        </div>
                    </Card>
                </div>
            </div>
        ))}
    </Slider>
</section>

        </>
    );
}

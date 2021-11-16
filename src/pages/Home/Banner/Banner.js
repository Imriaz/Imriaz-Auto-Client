import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/XxTFBqJ/banner-1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: 'black' }}>Biggest Discount Sell 11.11</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/Fxw2GL0/banner-2.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 style={{ color: 'black' }}>Apache RTR 160</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/SPVfv9B/banner-3.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 style={{ color: 'black' }}>TVS Radeon</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/NLmrZQ5/banner-4.jpg'
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h2 style={{ color: 'black' }}>TVS Metro Plus</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
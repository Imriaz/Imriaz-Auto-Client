import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import Footer from '../Home/Shared/Footer/Footer';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <Navigation />
            <div className='avoid-margin'>
                <h1>Your Trusted Bike Shop: <span className='company-title'>Imriaz Auto</span></h1>
                <p>Imriaz Auto is a renowned and Trusted Bike Shop with successfully over 2 years running. Now it's time to introduce our website Imriaz Auto. Now you can know update about our upcoming all Bike from our website & also buy bike for you. For buying bike in our website at first you need to logging with a gmail account or create an account with User name, email and password. Then just hit Buy Now button and provide Date, Address & Mobile number then Confirm Purchase by hitting 4-5 times. You can also manage your order from Dashboard and give us review. You can also see the review in the home page, as well as renowned and popular Blog Site abour motor bike.</p>

                <h2>Contact Address:</h2>
                <h3>Show Room: Mirpur-10, Dhaka, Bangladesh</h3>
                <h3><a href='https://www.google.com/maps/place/Mirpur+10+Roundabout,+Dhaka+1216/@23.8069245,90.3665091,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c0d6f6b8c2ff:0x3b138861ee9c8c30!8m2!3d23.8069245!4d90.3686978'>Location</a></h3>
                <h3>Mobile: 01521227844</h3>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
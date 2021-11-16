import Button from '@restart/ui/esm/Button';
import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid p-5 bg-dark text-white">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <h5><img src="https://i.ibb.co/hdfwfCr/Imriaz-Auto-logo.png" width="100"
                        height="100"
                        className="d-inline-block align-top " alt='' /><br />Imriaz Auto</h5>
                    <p>Your Trusted Bike Shop</p>
                    <p> about@imriazauto.com</p>
                    <p> +8801521227844</p>
                    <p> Mirpur-10, Dhaka</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Recent Updated Bike</h5>
                    <br />
                    <p>Suzuki Hayabusa</p>
                    <p>BMW F 900 R</p>
                    <p>Kawasaki Ninja H2</p>
                    <p>TVS Apache RR 310</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Subscribe to our Newsletter</h5>
                    <p>Subscribe our newsletter for notify update of our future tour program and choose your best one.</p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <br />
                    <br />
                    <Button variant="outline-info">Subcribe</Button>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Instagram</h5>
                    <h5>Our Facebook</h5>
                    <p>Imriaz Auto is a renowned and Trusteed Bike Shop, successfully over 2 years running. Now it's time to introduce our website Imriaz Auto.</p>
                </div>
            </div>
            <div>
                <small>Powered by @ Imriaz 2021</small>
            </div>
        </div>
    );
};

export default Footer;
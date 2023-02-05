import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FooterLogo from '../../assets/logo/carriers-bangladesh-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer_bg ">
            <div className="row">
                <div className="col-12 col-md-4  d-flex  flex-column justify-content-center align-items-center">
                    <div className=' d-flex justify-content-center'>
                        <Link to="/"> <img className='footer_logo' src={FooterLogo} alt="" /></Link>
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2 careers_title_two '>Carriers Bangladesh</h3>
                    <h5 className=' text-center mt-2'>Providing reliable job solution</h5>
                </div>
                <div className="col-6 col-md-2 mt-3 ">
                    <h5>Services</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mt-3 ">
                    <h5>Hot Link</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mt-3 ">
                    <h5>Legal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-md-2 mt-3">
                    <h5>Legal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        <li className="nav-item "><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                    </ul>
                </div>


            </div>

            <hr />

            <div className=" d-flex justify-content-center">
                <Link to="#" className=' social_icon'> <FaFacebookF /> </Link>
                <Link to="#" className=' social_icon'> <FaTwitter /> </Link>
                <Link to="#" className=' social_icon'> <FaLinkedinIn /> </Link>
            </div>

            <div className="">
                <p className='text-center'>Copyright @ 2023, All right reserved by Careers Bangladesh Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;
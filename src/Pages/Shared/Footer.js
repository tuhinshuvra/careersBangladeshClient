import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FooterLogo from '../../assets/logo/carreers-bangladesh-small.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
            <footer className="mt-5">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 d-flex  flex-column justify-content-center align-items-center">
                        <div className=' d-flex justify-content-center'>
                            <Link to="/"> <img className='footer_logo' src={FooterLogo} alt="" /></Link>
                        </div>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" classNameName="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
                        <h3 className='text-lg font-bold text-center mt-2 careers_title_two '>Carriers Bangladesh</h3>
                        <h5 className=' text-center mt-2'>Providing reliable job solution</h5>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>HOT LINK</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>


                </div>

                <hr />

                <div className=" d-flex justify-content-center my-3">
                    <Link to="#" className=' social_icon'> <FaFacebookF /> </Link>
                    <Link to="#" className=' social_icon'> <FaTwitter /> </Link>
                    <Link to="#" className=' social_icon'> <FaLinkedinIn /> </Link>
                </div>

                <div className="">
                    <p className='text-center'>Copyright @ 2023, All right reserved by Careers Bangladesh Ltd</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
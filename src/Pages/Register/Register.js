import React from 'react';
import Logo from '../../assets/logo/cb-logo.png';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import '../Signin/Signin.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <section className="gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card text-black">
                                <div className="row g-0  rounded-5">
                                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo-area" style={{ backgroundColor: "#505b79" }}>
                                        <div className="px-3 py-lg-4 p-md-5  mx-auto">
                                            <img className='logo' src={Logo} alt="" />
                                        </div>
                                        <h2 className=" mb-lg-4 text-white text-center">Careers Bangladesh</h2>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="card-body login-form" style={{ backgroundColor: "#EEF1F6" }}>
                                            {/* <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{ width: " 185px" }} alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div> */}

                                            <form className=' rounded rounded-2 bg-sm p-5 '>
                                                <div className=''>
                                                    <h5 className='mb-4 '>Please create your account</h5>

                                                    <div className="form-outline mb-3">
                                                        <label className="form-label" htmlFor="username">Full Name</label>
                                                        <input type="username" id="username" className="form-control"
                                                            placeholder="Enter your full name" />
                                                    </div>

                                                    <div className="form-outline mb-3">
                                                        <label className="form-label" htmlFor="username">Username</label>
                                                        <input type="email" id="username" className="form-control"
                                                            placeholder="Enter phone number or email address" />
                                                    </div>

                                                    <div className="form-outline mb-3">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" placeholder='Enter password' id="password" className="form-control" />
                                                    </div>

                                                    <div className="text-center pt-1 mb-4">
                                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button">
                                                            Register
                                                        </button>
                                                        {/* <a className="text-muted m-2 " href="#!">Forgot password?</a> */}
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                                        <p className="mb-0 me-2">Already have an account?</p>
                                                        <Link to="/signin"><button type="button" className="btn btn-outline-primary">Go SignIn</button></Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <p>or sign up with:</p>
                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            {/* <i className="fab fa-facebook-f"></i> */}
                                                            <FaFacebook />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            {/* <i className="fab fa-google"></i> */}
                                                            <FaGoogle />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            {/* <i className="fab fa-twitter"></i> */}
                                                            <FaTwitter />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            {/* <i className="fab fa-github"></i> */}
                                                            <FaGithub />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
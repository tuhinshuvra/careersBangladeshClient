import React from 'react';
import Logo from '../../assets/logo/cb-logo.png';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import './Signin.css';
import { Link } from 'react-router-dom';

const Singin = () => {
    return (
        <div>
            <section class="  gradient-form" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-xl-10">
                            <div class="card text-black">
                                <div class="row g-0  rounded-5">
                                    <div class="col-lg-5 d-flex flex-column justify-content-center align-items-center logo-area" style={{ backgroundColor: "#505b79" }}>
                                        <div class="px-3 py-lg-4 p-md-5  mx-auto">
                                            <img className='logo' src={Logo} alt="" />
                                        </div>
                                        <h2 class=" mb-lg-4 text-white text-center">Careers Bangladesh</h2>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="card-body login-form" style={{ backgroundColor: "#EEF1F6" }}>
                                            {/* <div class="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{ width: " 185px" }} alt="logo" />
                                                <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div> */}

                                            <form className=' rounded rounded-2 bg-sm p-5 '>
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="username">Username</label>
                                                        <input type="email" id="username" class="form-control"
                                                            placeholder="Phone number or email address" />
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <label class="form-label" for="password">Password</label>
                                                        <input type="password" id="password" class="form-control" placeholder='Enter password' />
                                                    </div>

                                                    <div class="text-center pt-1 mb-5 pb-1">
                                                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">
                                                            Sign In
                                                        </button>
                                                        <a class="text-muted m-2 " href="#!">Forgot password?</a>
                                                    </div>

                                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                                        <p class="mb-0 me-2">Don't have an account?</p>
                                                        <Link to="/register"><button type="button" class="btn btn-outline-primary">Create new</button></Link>
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

export default Singin;
import React from 'react';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Signin = () => {
    return (
        <div>

            {/* <div className=" text-center text-lg-start" > */}
            {/* <h1 style={{ color: "red" }}>Hello Style!</h1> */}
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 bg-secondary">
                        {/* <div className="col-lg-6" style={{ backgroundColor: "#061540" }}> */}
                        <img className=' w-25 ' src={Logo} alt="" />
                        <h1 className=" text-white ">Careers Bangladesh</h1>
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p> */}
                    </div>

                    <div className="col-lg-6">
                        {/* <div className="card border-0 bg-white  "> */}
                        <div className="card-body   bg-body-tertiary rounded rounded-2 p-5 ">
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control" />
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                    <label className="form-check-label" for="form2Example33">
                                        Subscribe to our newsletter
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Log In
                                </button>

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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}

            {/* <div classNameName="card lg:card-side bg-base-100 shadow-xl my-10 h-[600px]">
                <div classNameName=''>
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                </div>

                <div classNameName="card-body mx-auto bg-slate-300 flex justify-center ">
                    <div classNameName=' m-10 bg-slate-500  rounded rounded-sm lg:p-48' >
                        <h2 classNameName="card-title text-white font-bold text-2xl">Log into your <br />  Account</h2>
                        <div classNameName="form-control">
                            <label classNameName="label">
                                <span classNameName="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Type here" classNameName="input input-bordered w-full" />
                        </div>
                        <div classNameName="form-control w-full">
                            <label classNameName="label">
                                <span classNameName="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" classNameName="input input-bordered w-full" />
                        </div>
                        <div classNameName="card-actions justify-start">
                            <button classNameName="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >

    );
};

export default Signin;
import React from 'react';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';

const Signin = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10 h-[600px]">
                <div className=''>
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                </div>

                <div className="card-body mx-auto bg-slate-300 flex justify-center ">
                    <div className=' m-10 bg-slate-500  rounded rounded-sm lg:p-48' >
                        <h2 className="card-title text-white font-bold text-2xl">Log into your <br />  Account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signin;
import React from 'react';

const JobAlert = () => {
    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-8 capitalize'>GET RELEVANT JOB ALERT</h2>
            <div className="hero  bg-base-200  mb-40">
                <div className="hero-content flex-col  lg:flex-row-reverse">

                    <div className="card flex-shrink-0 columns-6 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">JOB ALERT</button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left lg:w-1/2">
                        <p className="py-6 text-3xl font-bold">Get your job alert and always be one step ahead from others</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobAlert;
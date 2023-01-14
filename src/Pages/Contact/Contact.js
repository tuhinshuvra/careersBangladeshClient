import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w1/2">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="textarea" rows="4" cols="50" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-3xl font-bold mb-5">Get in Touch!</h1>
                        <p>Address: H-20, Shah Makdum Avenue, Uttara-11, Dhaka</p>
                        <p>Email: abedefth@gmail.com</p>
                        <p>WhatsApp +8801123456789</p>
                        <p>Linkedin: @abcdefgh</p>
                        <p>Facebook @abcdefghijk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
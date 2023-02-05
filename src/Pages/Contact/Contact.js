import React from 'react';
import useTitle from '../Hooks/useTitle';

const Contact = () => {

    useTitle('Contact');

    return (
        <div>
            <div className="col-lg-12 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-5 text-center text-lg-start">
                        <div className="">
                            <h1 className="text-3xl font-bold mb-5">Get in Touch!</h1>
                            <p>Address: H-20, Shah Makdum Avenue, Uttara-11, Dhaka</p>
                            <p>Email: abedefth@gmail.com</p>
                            <p>WhatsApp +8801123456789</p>
                            <p>Linkedin: @abcdefgh</p>
                            <p>Facebook @abcdefghijk</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Input full name" />
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="0123456789" />
                                <label htmlFor="floatingInput">Phone No</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="message" className="form-control" id="floatingInput" placeholder="Input message" />
                                <label htmlFor="floatingInput">Message</label>
                            </div>

                            {/* <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div> */}
                            <button className="w-100 custom_btn" type="submit">Submit</button>
                            {/* <hr className="my-4" /> */}
                            {/* <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small> */}
                        </form >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Contact;
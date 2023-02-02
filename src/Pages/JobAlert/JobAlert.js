import React from 'react';

const JobAlert = () => {
    return (
        // <div className=' common-margin '>
        <div className="py-5 common-margin col-lg-10 mx-auto">
            <h2 className=' text-center fw-bold careers_title_one'>GET RELEVANT JOB ALERT</h2>
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-5 text-center text-lg-start">
                    <h2 className="fw-bold lh-1 mb-3 careers_title_two">Get your job alert and always be one step ahead from others</h2>
                    {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="custom_btn " type="submit">Sign up</button>
                        <hr className="my-4" />
                        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
            </div >
        </div >
        // </div>
    );
};

export default JobAlert;
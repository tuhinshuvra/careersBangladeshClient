import React from 'react';
import './JobAlert.css';
import { HiBell } from 'react-icons/hi';

const JobAlert = () => {
    return (
        <div className="jobAlert_bg">
            <div className=' col-lg-10 mx-auto pt-5'>
                <h2 className='careers_title_one'><HiBell className=' mx-1'></HiBell> GET RELEVANT JOB ALERT</h2>
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-5 text-center text-lg-start">
                        <h2 className="fw-bold lh-1 mb-3  text-white ">Get your job alert and always be one step ahead from others</h2>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 px-md-3 py-md-5 border rounded-3  d-flex justify-content-between">

                            <input className='input form-control' id="email" name="email" type="email" placeholder='Email Address' />
                            {/* <button className="custom_btn ms-2" type="submit">SignUp</button> */}
                            <button type="submit" className="fw-bold custom_btn ms-2">SignUp</button>

                        </form>
                    </div>
                </div>
            </div >
        </div >
        // </div>
    );
};

export default JobAlert;
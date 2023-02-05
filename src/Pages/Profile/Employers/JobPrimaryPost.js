import React from 'react';

const JobPrimaryPost = () => {
    return (
        <div>
            <h2 className=" text-center text-2xl font-medium my-10">
                Primary Job Information
            </h2>

            <form action="">
                <div className="row">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div className=' col-lg-4'>
                        <input className='input form-control' id="job-title" type="text" placeholder='Enter Job Title' />
                    </div>

                    <div className=' col-lg-4'>
                        <input className='input form-control' id="no-of-vacancies" type="text" placeholder='No of Vacancies' />
                    </div>

                    <div className=' col-lg-4'>
                        <input className='input form-control' id="job-category" type="text" placeholder='Job Category' />
                    </div>
                </div>

                <div className="row my-lg-4">
                    <div className=' col-lg-4'>
                        <select className=" form-select ">
                            <option disabled selected>Employment Status</option>
                            <option value={0}>Full Time</option>
                            <option value={1}>Part Time</option>
                            <option value={2}>Contactual Time</option>
                            <option value={3}>Internship</option>
                            <option value={4}>Freelance</option>
                        </select>
                    </div>

                    <div className=' col-lg-4 d-flex'>
                        <span >Dead Line</span>
                        <input className='input form-control' id="application-deadline" type="date" placeholder='Application Deadline' />
                    </div>

                    <div className=' col-lg-4'>
                        <select className=" form-select">
                            <option disabled selected>Employment Status</option>
                            <option value={0}>Apply Online</option>
                            <option value={1}>Email</option>
                            <option value={2}>Heard Copy</option>
                            <option value={3}>Wolk in Interview</option>
                        </select>
                    </div>
                </div>

                <div className=" my-lg-4">
                    <label className="label">
                        <span className=" fw-bold">Special Instruction for Job Seekers</span>
                    </label>
                    <div>
                        <textarea className='input form-control' id='business-description' type="text" placeholder='write business description' />
                    </div>
                </div>

                <div className=' d-flex justify-content-between my-lg-3'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Continue</button>
                </div>
            </form>
        </div >
    );
};

export default JobPrimaryPost;
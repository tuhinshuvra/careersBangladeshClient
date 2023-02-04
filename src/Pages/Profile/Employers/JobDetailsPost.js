import React from 'react';

const JobDetailsPost = () => {
    return (
        <div>
            <h2 className=" text-center fw-bold"> Job Details </h2>

            <form action="">
                <div className=" row my-lg-4 ">
                    <div className=' col-lg-4'>
                        <select className="form-select">
                            <option disabled selected>Job Level</option>
                            <option value={0}>Entry</option>
                            <option value={1}>Mid</option>
                            <option value={2}>Top</option>
                        </select>
                    </div>

                    <div className=' col-lg-4'>
                        <select className="form-select">
                            <option disabled selected>Work Place</option>
                            <option value={0}>Work at Office</option>
                            <option value={1}>Work from Home</option>
                            <option value={2}>Hybrid</option>
                        </select>
                    </div>
                </div>

                <textarea className='input form-control my-lg-3' id='job-context' type="text" placeholder='Enter job Context' />
                <textarea className='input form-control my-lg-3' id='job-responsibilities' type="text" placeholder='Job Responsibilities' />



                <div>
                    <input className='input form-control' id='job-location' type="text" placeholder='Enter job location' />
                </div>

                <div className=' row my-lg-3'>

                    <div className=" col-lg-4">
                        <div className='d-flex justify-content-between align-items-center'>
                            <label className="label">
                                <span className=" fw-bold me-lg-2 ">Salary</span>
                            </label>
                            <input type="text" id='salary-from' placeholder="Salary From" className="input form-control" />
                            <label className=' fw-bold mx-1'>to</label>
                            <input type="text" id='salary-to' placeholder="Salary To" className="input form-control" />
                        </div>
                    </div>

                    <div className=" col-lg-4 ">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <select className=" form-select">
                                <option disabled selected>Yearly Bonus</option>
                                <option value={0}>2</option>
                                <option value={1}>3</option>
                                <option value={2}>4</option>
                            </select>
                        </div>
                    </div>

                    <div className=' col-lg-4'>
                        <select className="form-select">
                            <option disabled selected>Salary Review</option>
                            <option value={0}>Yearly</option>
                            <option value={1}>Halt Yearly</option>
                        </select>
                    </div>
                </div>

                <textarea className='input form-control my-lg-3' id='others' type="text" placeholder='Enter Others' />


                <div className=' d-flex justify-content-between my-lg-3 '>
                    <button className="btn btn-warning">Cancel</button>
                    <button type='submit' name='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div >
    );
};

export default JobDetailsPost;
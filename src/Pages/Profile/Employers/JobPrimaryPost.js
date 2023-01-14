import React from 'react';

const JobPrimaryPost = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>
                <h2 className=" text-center text-2xl font-medium my-10">
                    Primary Job Information
                </h2>

                <form action="">

                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Job Title*</span>
                            </label>
                            <input type="text" id='first-name' placeholder="Enter Job Title" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">No of Vacancies</span>
                            </label>
                            <input type="text" id='last-name' placeholder="Enter no of vacancies" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Job Category</span>
                            </label>
                            <input type="text" id='fathers-name' placeholder="Enter Job Catagory" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Employment Status</span>
                            </label>
                            <select className="select select-bordered w-[229px]">
                                <option value={0}>Full Time</option>
                                <option value={1}>Part Time</option>
                                <option value={2}>Contactual Time</option>
                                <option value={3}>Internship</option>
                                <option value={4}>Freelance</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Application Deadline</span>
                            </label>
                            <input type="date" id='applicaton-dead-line' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Resume Receiving Option</span>
                            </label>
                            <select className="select select-bordered w-[229px]">
                                <option value={0}>Apply Online</option>
                                <option value={1}>Email</option>
                                <option value={2}>Heard Copy</option>
                                <option value={3}>Wolk in Interview</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Special Instruction for Job Seekers</span>
                        </label>
                        <div>
                            <textarea className='input input-bordered w-full' id='business-description' type="text" placeholder='write business description' />
                        </div>
                    </div>

                    <div className=' flex justify-between my-10 w-full'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Continue</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default JobPrimaryPost;
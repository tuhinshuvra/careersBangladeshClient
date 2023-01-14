import React from 'react';

const JobDetailsPost = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>
                <h2 className=" text-center text-2xl font-medium my-10">
                    Job Details
                </h2>

                <form action="">
                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Job Level</span>
                            </label>
                            <select className="select select-bordered w-[229px]">
                                <option value={0}>Entry</option>
                                <option value={1}>Mid</option>
                                <option value={2}>Top</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Work Place</span>
                            </label>
                            <select className="select select-bordered w-[229px]">
                                <option value={0}>Work at Office</option>
                                <option value={1}>Work from Home</option>
                                <option value={2}>Hybrid</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Job Context</span>
                        </label>
                        <div>
                            <textarea className='input input-bordered w-full' id='job-context' type="text" placeholder='Enter job Context' />
                        </div>
                    </div>
                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Job Responsibilities</span>
                        </label>
                        <div>
                            <textarea className='input input-bordered w-full' id='job-responsibilites' type="text" placeholder='Enter job responsibilites ' />
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Job Location</span>
                        </label>
                        <div>
                            <input className='input input-bordered w-full' id='job-location' type="text" placeholder='Enter job location' />
                        </div>
                    </div>

                    <div className=" mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Salary</span>
                            </label>
                            <div className=' flex justify-between'>
                                <input type="text" id='salary-from' placeholder="Salary From " className="input input-bordered w-full max-w-xs" />
                                <label className=' mx-5'>to</label>
                                <input type="text" id='salary-to' placeholder="Salary To" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Bouns</span>
                            </label>
                            <select className="select select-bordered w-[229px]">
                                <option value={0}>2</option>
                                <option value={1}>3</option>
                                <option value={2}>4</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Salary Review</span>
                            </label>
                            <select className="select select-bordered w-full">
                                <option value={0}>Yearly</option>
                                <option value={1}>Halt Yearly</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Others</span>
                        </label>
                        <div>
                            <textarea className='input input-bordered w-full' id='job-context' type="text" placeholder='Enter business description' />
                        </div>
                    </div>

                    <div className=' flex justify-between my-10 w-full'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default JobDetailsPost;
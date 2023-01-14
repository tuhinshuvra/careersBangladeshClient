import React from 'react';

const CarrerAndApplication = () => {
    return (
        <div>
            <div className='mx-52 my-16'>
                <h2 className=" text-center text-2xl font-medium">
                    Carrer and Application Information
                </h2>

                <label className="label">
                    <span className="label-text text-md font-bold  ">Objective</span>
                </label>

                <form action="">
                    <textarea id='objective' className="textarea w-full input input-bordered"  ></textarea>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div>
                            <label className="label"> <span className="label-text text-md font-bold ">Present Salary</span> </label>
                            <input type="text" id='present-salary' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text-alt">TK/ Month</span> </label>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-md font-bold ">Expected Salary</span></label>
                            <input type="text" id='expected-salary' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text-alt">TK/ Month</span> </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div>
                            <label className="label"> <span className="label-text text-md font-bold ">Looking for (Job Level)</span> </label>
                            <div className=' grid grid-cols-3'>
                                <div className=' flex items-center'>
                                    <label for="html">Entry Level</label><input className=' ml-1' type="radio" id="entry-level" name="entry-level" value="entry-level" />
                                </div>
                                <div className=' mx-5 flex items-center'>
                                    <label for="html">Mid Level</label><input className=' ml-1' type="radio" id="mid-level" name="mid-level" value="mid-level" />
                                </div>
                                <div className=' flex items-center'>
                                    <label for="html">Top Level</label><input className=' ml-1' type="radio" id="top-level" name="top-level" value="top-level" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-md font-bold ">Available for (Job Nature)</span></label>
                            <div className=' grid grid-cols-4 '>
                                <div className=' flex items-center'>
                                    <label for="html">Full time</label><input className=' ml-1' type="radio" id="full-time" name="full-time" value="full-time" />
                                </div>
                                <div className='flex items-center'>
                                    <label for="html">Part time</label><input className=' ml-1' type="radio" id="part-time" name="part-time" value="part-time" />
                                </div>
                                <div className=' flex items-center'>
                                    <label for="html">Contract</label><input className=' ml-1' type="radio" id="contact" name="contact" value="contact" />
                                </div>
                                <div className=' flex items-center'>
                                    <label for="html">Internship</label><input className=' ml-1' type="radio" id="internship" name="internship" value="internship" />
                                </div>
                                <div className=' flex items-center'>
                                    <label for="html">Freelance</label><input className=' ml-1' type="radio" id="freelance" name="freelance" value="freelance" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=' flex justify-between my-10]'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Save</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CarrerAndApplication;
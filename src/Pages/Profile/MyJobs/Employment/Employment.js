import React from 'react';

const Employment = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>
                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className=" text-center text-2xl font-medium my-5">
                    Employment History
                </h2>

                <form action="">

                    {/* <div className="collapse-content"> */}
                    {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Company Name</span>
                            </label>
                            <input type="text" id='first-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Company Business</span>
                            </label>
                            <input type="text" id='last-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Designation</span>
                            </label>
                            <input type="text" id='fathers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Department</span>
                            </label>
                            <input type="text" id='mothers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <label className="label">
                            <span className="label-text text-md font-bold ">Employment Period</span>
                        </label>
                        <div className=' grid lg:grid-cols-2 lg:gap-5'>
                            <input type="date" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                            <input type="date" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Responsibilities</span>
                            </label>
                            <textarea type="text" id='responsibilities' placeholder="Write Responsibilities" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Company Location</span>
                            </label>
                            <input type="text" id='company-location' placeholder="Write Company Location" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Others</span>
                            </label>
                            <textarea type="text" id='emplyment-others' placeholder="Write if have any others" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className=' flex justify-between my-10'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Employment;
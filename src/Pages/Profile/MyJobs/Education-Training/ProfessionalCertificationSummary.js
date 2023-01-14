import React from 'react';

const ProfessionalCertificationSummary = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>

                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className=" text-center text-2xl font-medium mb-10">
                    Professional Certification
                </h2>
                <form action="">
                    {/* <div className="collapse-content"> */}
                    {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold">Certification</span>
                            </label>
                            <input type="text" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold">Institute</span>
                            </label>
                            <input type="text" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold">Location</span>
                            </label>
                            <input type="text" id='location' className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Duration</span>
                            </label>

                            <div className=' flex gap-3'>
                                <input type="date" id='duration' className="input input-bordered" />
                                <input type="date" id='duration' className="input input-bordered" />
                            </div>
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

export default ProfessionalCertificationSummary;
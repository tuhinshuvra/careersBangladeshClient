import React from 'react';



const PersonalDetails = () => {
    return (
        <div className=' mx-52  my-16'>
            {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
            <h2 className=" text-center text-2xl font-medium">
                Personal Details
            </h2>

            <form action="">

                {/* <div className="collapse-content"> */}
                {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">First Name</span>
                        </label>
                        <input type="text" id='first-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Last Name</span>
                        </label>
                        <input type="text" id='last-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Father's Name</span>
                        </label>
                        <input type="text" id='fathers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Mother's Name</span>
                        </label>
                        <input type="text" id='mothers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Date of Birth</span>
                        </label>
                        <input type="date" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Gender</span>
                        </label>
                        <select className="select select-bordered w-[229px] ">
                            <option disabled selected>Select</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Religion</span>
                        </label>
                        <select className="select select-bordered w-[229px] ">
                            <option disabled selected>Select</option>
                            <option value={0}>Buddhism</option>
                            <option value={1}>Hinduism</option>
                            <option value={2}>Islam</option>
                            <option value={3}>Christianity</option>
                            <option value={4}>Judaism</option>
                            <option value={5}>Irreligion</option>
                            <option value={6}>Folk religions</option>
                            <option value={99}>Others</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Marital Status</span>
                        </label>
                        <select className="select select-bordered w-[229px] ">
                            <option disabled selected>Select</option>
                            <option value={0}>Married</option>
                            <option value={1}>Unmarried</option>
                            <option value={2}>Single</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Nationality</span>
                            <span className=" text-md -mr-40">Bangladeshi</span>
                            <input type="checkbox" className="checkbox" />
                        </label>

                        {/* <label className="label cursor-pointer"> </label> */}

                        <input type="text" id='nationality' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">National ID</span>
                        </label>
                        <input type="text" id='national-id' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Number</span>
                        </label>
                        <input type="text" id='passport-number' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Issue Date</span>
                        </label>
                        <input type="date" id='passport-issue-date' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Primary Mobile</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Secondary Mobile</span>
                        </label>
                        <input type="text" id='secondary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Emergency Contact</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Change User ID</span>
                        </label>
                        <input type="email" id='user-id' placeholder="Email ID" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Alternate Email</span>
                        </label>
                        <input type="email" id='alternate-email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Blood Group</span>
                        </label>
                        <select className="select select-bordered w-[229px] ">
                            <option disabled selected>Select</option>
                            <option value={0}>A(+ve)</option>
                            <option value={1}>A(-ve)</option>
                            <option value={2}>B(+ve)</option>
                            <option value={3}>B(-ve)</option>
                            <option value={4}>O(+ve)</option>
                            <option value={5}>O(-ve)</option>
                            <option value={6}>AB(+ve)</option>
                            <option value={7}>AB(-ve)</option>
                        </select>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Height (Inch)</span>
                        </label>
                        <input type="text" id='height' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Weight(kg)</span>
                        </label>
                        <input type="text" id='weight' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className=' flex justify-between my-10'>
                    <button className="btn btn-warning">Cancel</button>
                    <button type='submit' name='submit' className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>

    );
};
export default PersonalDetails;
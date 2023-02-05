import React from 'react';
import './FormDesign.css';


const PersonalDetails = () => {
    return (
        <div className=' mx-52  my-16'>
            <h2 className=" text-center text-2xl font-medium">
                Personal Details
            </h2>

            <form action="">

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">First Name</span>
                        </label>
                        <input type="text" id='first-name' placeholder="Type here" className="input form-control  " />
                    </div>

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Last Name</span>
                        </label>
                        <input type="text" id='last-name' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Father's Name</span>
                        </label>
                        <input type="text" id='fathers-name' placeholder="Type here" className="input form-control  " />
                    </div>
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Mother's Name</span>
                        </label>
                        <input type="text" id='mothers-name' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>

                <div className="row my-4">
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Date of Birth</span>
                        </label>
                        <input type="date" id='birth-dath' className="input form-control  " />
                    </div>
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Gender</span>
                        </label>
                        <select className="form-select" aria-label="gender">
                            <option selected>Select</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                </div>

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Religion</span>
                        </label>
                        <select className="form-select select-bordered  ">
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
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Marital Status</span>
                        </label>
                        <select className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>Married</option>
                            <option value={1}>Unmarried</option>
                            <option value={2}>Single</option>
                        </select>
                    </div>
                </div>

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Nationality</span>
                            <span className=" ms-5">Bangladeshi</span>
                            <input className="form-check-input mx-3" type="checkbox" value="" id="flexCheckChecked" />
                        </label>

                        <input type="text" id='nationality' placeholder="Type here" className="input form-control  " />
                    </div>
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">National ID</span>
                        </label>
                        <input type="text" id='national-id' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>


                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Number</span>
                        </label>
                        <input type="text" id='passport-number' placeholder="Type here" className="input form-control  " />
                    </div>
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Issue Date</span>
                        </label>
                        <input type="date" id='passport-issue-date' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>


                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Primary Mobile</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input form-control  " />
                    </div>

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Secondary Mobile</span>
                        </label>
                        <input type="text" id='secondary-mobile' placeholder="880 1123456789" className="input form-control  " />
                    </div>

                </div>

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Emergency Contact</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input form-control  " />
                    </div>

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Change User ID</span>
                        </label>
                        <input type="email" id='user-id' placeholder="Email ID" className="input form-control  " />
                    </div>

                </div>

                <div className="row my-4">

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Alternate Email</span>
                        </label>
                        <input type="email" id='alternate-email' placeholder="Email address" className="input form-control  " />
                    </div>

                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Blood Group</span>
                        </label>
                        <select className="form-select select-bordered  ">
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

                <div className="row my-4">
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Height (Inch)</span>
                        </label>
                        <input type="text" id='height' placeholder="Type here" className="input form-control  " />
                    </div>
                    <div className='col-lg-5 my-lg-0 margin-sm'>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Weight(kg)</span>
                        </label>
                        <input type="text" id='weight' placeholder="Type here" className="input form-control  " />
                    </div>
                </div>

                <div className='d-flex justify-content-between my-5 col-lg-10'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>

            </form>
        </div>

    );
};
export default PersonalDetails;
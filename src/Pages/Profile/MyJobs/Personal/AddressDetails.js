import React from 'react';

const AddressDetails = () => {
    return (
        <div>
            <div className=''>
                <h2 className=" text-center text-2xl font-medium">
                    Address Details
                </h2>

                <form action="">
                    <div className="">
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Present Address</span>
                            </label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="inside-bangladesh" id="inside-bangladesh" />
                                <label className="form-check-label" htmlFor="inside-bangladesh">Inside Bangladesh</label>
                                <input className="form-check-input  ms-3 " type="radio" name="outside-bangladesh" id="outside-bangladesh" /><label htmlFor="">Outside Bangladesh</label>
                            </div>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>

                    </div>

                    <div className="row my-4">
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select District</option>
                                <option value={0}>Bagerhat</option>
                                <option value={1}>Barishal</option>
                                <option value={2}>Comilla</option>
                                <option value={3}>Dhaka</option>
                                <option value={4}>Rangpur</option>
                            </select>
                        </div>
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select Thana</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select P.O.</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                    </div>
                    <input className='input form-control' id="present-address" type="text" placeholder='Type your house no/road/village' />

                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Permanent Address</span>
                            </label>
                            <input type="radio" name="inside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Inside Bangladesh</label>
                            <input type="radio" name="outside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Outside Bangladesh</label>
                        </div>
                    </div>


                    <div className="row my-4">
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select District</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select Thana</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div className=' col-lg-4 '>
                            <select className="form-select">
                                <option disabled selected>Select P.O.</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                    </div>

                    <input className='input form-control' id="permanent-address" type="text" placeholder='Type your house no/road/village' />

                    <div className='d-flex justify-content-between my-5'>
                        <button className="btn btn-warning fw-bold">Cancel</button>
                        <button type='submit' name='submit' className="custom_btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressDetails;
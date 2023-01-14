import React from 'react';

const AddressDetails = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>
                <h2 className=" text-center text-2xl font-medium">
                    Address Details
                </h2>

                <form action="">
                    <div class="">
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Present Address</span>
                            </label>
                            <input type="radio" name="inside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Inside Bangladesh</label>
                            <input type="radio" name="outside-bangladesh" className="radio radio-primary ml-5" /> <label htmlFor="">Outside Bangladesh</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select District</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select Thana</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select P.O.</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                    </div>
                    <input className='input input-bordered w-full my-5 ' type="text" placeholder='Type your house no/road/village' />

                    <div class="grid md:grid-cols-2 md:gap-6 mt-4">
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Permanent Address</span>
                            </label>
                            <input type="radio" name="inside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Inside Bangladesh</label>
                            <input type="radio" name="outside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Outside Bangladesh</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select District</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select Thana</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered w-56 ">
                                <option disabled selected>Select P.O.</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                                <option value={2}>Others</option>
                            </select>
                        </div>
                    </div>
                    <input className='input input-bordered w-full my-5 ' type="text" placeholder='Type your house no/road/village' />

                    <div className=' flex justify-between my-10'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressDetails;
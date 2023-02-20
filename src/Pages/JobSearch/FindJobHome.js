import React from 'react';
import { FaSearchDollar, FaChartLine, FaRegBuilding } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import './FindJobHome.css';
import { Link } from 'react-router-dom';


const FindJobHome = () => {
    // const jobTitle = 

    return (
        <div className='my-5 col-lg-10 mx-auto'>
            <h2 className='careers_title_one my-5'><FaSearchDollar className='mx-1'></FaSearchDollar>LETS FIND YOUR JOB</h2>
            <div className="d-flex  justify-content-center mt-4">
                <input

                    type="text"
                    id="phone-search"
                    placeholder="Keyword"
                    className="form-control  w-25"
                    aria-describedby="kewordHelp"
                />

                <select
                    // {...register("orgaType")}
                    name='orgaType'
                    className="form-select w-25 mx-2">
                    <option disabled selected>Company Type</option>
                    <option value="Government">Government</option>
                    <option value="Semi Government">Semi Government</option>
                    <option value="NGO">NGO</option>
                    <option value="Private Firm">Private Firm</option>
                    <option value="International Agencies">International Agencies</option>
                    <option value="Others">Others</option>
                </select>
                <input type="text" id="phone-search" placeholder="Location" className="form-control  w-25" aria-describedby="locationHelp" />

                {/* <Link to={`/jobs/${jobTitle}`} className=' text-decoration-none custom_btn ms-2'>Search</Link> */}
            </div>

            <div className=" my-5">

                <div className="row justify-content-center">

                    <div className=" col-md-3 ">
                        <div className="counter-box ">
                            <FaChartLine className='  text-secondary fs-1 mt-1'></FaChartLine>
                            <span className="counter">21471</span>
                            <p>Live Jobs</p>
                        </div>
                    </div>
                    <div className=" col-md-3 ">
                        <div className="counter-box ">
                            <FaRegBuilding className='  text-secondary fs-1 mt-1'></FaRegBuilding>
                            <span className="counter">2343</span>
                            <p>Companies</p>
                        </div>
                    </div>
                    <div className=" col-md-3 ">
                        <div className="counter-box ">
                            <BsPeopleFill className='  text-secondary fs-1 mt-1'></BsPeopleFill>
                            <span className="counter">2147</span>
                            <p>Employers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindJobHome;
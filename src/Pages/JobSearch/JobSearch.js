import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import './JobSearch.css';

const JobSearch = () => {
    const coffee = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className='my-5'>
            <h2 className=' text-center fw-bold'>LETS FIND YOUR JOB</h2>
            <div className="d-flex  justify-content-center mt-4">
                <input type="text" placeholder="Keyword" className="form-control  w-25 " id="keword" aria-describedby="kewordHelp" />
                <input type="text" placeholder="Organization Type" className="form-control seach  mx-2 w-25" id="organization-type" aria-describedby="locationHelp" />
                <input type="text" placeholder="Location" className="form-control  w-25" id="location" aria-describedby="locationHelp" />
                <button className='btn btn-primary mx-2'>Search</button>
            </div>

            <div class=" my-5">

                <div class="row justify-content-center">

                    <div class=" col-md-3 gap-2 ">
                        <div class="counter-box ">
                            <i class="fa fa-thumbs-o-up"></i>
                            <i>{coffee} </i>
                            <span class="counter">21471</span>
                            <p>Live Jobs</p>
                        </div>
                    </div>
                    <div class=" col-md-3 gap-2">
                        <div class="counter-box ">
                            <i class="fa fa-thumbs-o-up"></i>
                            <i>{coffee} </i>
                            <span class="counter">2343</span>
                            <p>Companies</p>
                        </div>
                    </div>
                    <div class=" col-md-3 gap-2">
                        <div class="counter-box ">
                            <i class="fa fa-thumbs-o-up"></i>
                            <i>{coffee} </i>
                            <span class="counter">2147</span>
                            <p>Employers</p>
                        </div>
                    </div>

                </div>
            </div>




            {/* <div className=" d-flex justify-content-center ">
                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h5 className="">Live Jobs</h5>
                    <h2 className="stat-value">23452</h2>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Companies</div>
                    <div className="stat-value">2154</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Employers</div>
                    <div className="stat-value">1,207</div>
                </div>

            </div> */}
        </div>
    );
};

export default JobSearch;
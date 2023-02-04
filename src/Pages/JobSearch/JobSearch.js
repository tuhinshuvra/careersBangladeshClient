import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser, faChair, faPerson } from '@fortawesome/free-solid-svg-icons'
import './JobSearch.css';
import useTitle from '../Hooks/useTitle';

const JobSearch = () => {
    const company = <FontAwesomeIcon icon={faBuildingUser} />
    const person = <FontAwesomeIcon icon={faPerson} />
    const chair = <FontAwesomeIcon icon={faChair} />
    // useTitle('Job Search');

    return (
        <div className='my-5 col-lg-10 mx-auto'>
            <h2 className=' text-center fw-bold careers_title_one'>LETS FIND YOUR JOB</h2>
            <div className="d-flex  justify-content-center mt-4">
                <input type="text" placeholder="Keyword" className="form-control  w-25 " id="keword" aria-describedby="kewordHelp" />
                <input type="text" placeholder="Organization Type" className="form-control seach  mx-2 w-25" id="organization-type" aria-describedby="locationHelp" />
                <input type="text" placeholder="Location" className="form-control  w-25" id="location" aria-describedby="locationHelp" />
                <button className='custom_btn mx-2'>Search</button>
            </div>

            <div className=" my-5">

                <div className="row justify-content-center">

                    <div className=" col-md-3  ">
                        <div className="counter-box ">
                            <i>{chair} </i>
                            <span className="counter">21471</span>
                            <p>Live Jobs</p>
                        </div>
                    </div>
                    <div className=" col-md-3 ">
                        <div className="counter-box ">
                            <i>{company} </i>
                            <span className="counter">2343</span>
                            <p>Companies</p>
                        </div>
                    </div>
                    <div className=" col-md-3 ">
                        <div className="counter-box ">
                            <i>{person} </i>
                            <span className="counter">2147</span>
                            <p>Employers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobSearch;
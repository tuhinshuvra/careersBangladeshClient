import React from 'react';
import { Link } from 'react-router-dom';
import './HotJobs.css';

const HotJobsDisplay = ({ job }) => {
    const { _id, jobTitle, companyLogo, organization } = job;

    return (
        <div>
            <div className="card ">
                <Link to={`/dashboard/jobs/${_id}`} className=" fw-bold text-decoration-none  category_link">
                    <div className=' d-flex'>
                        <img className='hotjobImg' src={companyLogo} alt="" />

                        <div className="card-body">
                            <p>{organization} </p>
                            <p>&#10148;{jobTitle} </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HotJobsDisplay;
import React from 'react';
import { Link } from 'react-router-dom';
import './HotJobs.css';

const HotJobsDisplay = ({ category }) => {
    const { jobTitle, categoryName, organization, img } = category;

    return (
        <div>
            <div className="card ">
                <Link to="/" className=" fw-bold text-decoration-none  category_link">
                    <div className=' d-flex'>
                        <img className='hot_job_image' src={img} alt="" />

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
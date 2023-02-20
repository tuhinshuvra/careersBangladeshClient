import React from 'react';
import { Link } from 'react-router-dom';
import './JobCategory.css';

const JobCategoryDisplay = ({ category }) => {
    const { _id, name } = category;

    return (
            <div className="card ">
                <Link
                    to={`/jobs/${_id}`}
                    className=" fw-bold text-decoration-none  category_link">
                    <div className="card-body"> &#10148; {name} </div>
                </Link>
            </div>
    );
};

export default JobCategoryDisplay;
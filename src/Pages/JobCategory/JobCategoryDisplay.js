import React from 'react';
import { Link } from 'react-router-dom';
import './JobCategory.css';

const JobCategoryDisplay = ({ category }) => {
    const { name } = category;
    return (
        <div>
            <div className="card ">
                <Link to="/" className=" fw-bold text-decoration-none  category_link">
                    <div className="card-body"> &#10148; {name} </div>
                </Link>
            </div>
        </div>
    );
};

export default JobCategoryDisplay;
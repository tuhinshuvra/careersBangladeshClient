import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import FindCategoryJobs from '../JobSearch/FindCategoryJobs';
import FindJob from '../JobSearch/FindJob';
import './JobCategory.css';

const JobCategoryDisplay = ({ category }) => {
    const { setCategoryId } = useContext(AuthContext);
    const { _id, name } = category;
    return (
        <div>
            <div className="card ">
                <Link
                    onClick={() => setCategoryId(_id)}
                    to={`/findJobs`}
                    className=" fw-bold text-decoration-none  category_link">
                    <div className="card-body"> &#10148; {name} </div>
                </Link>
            </div>
        </div>
    );
};

export default JobCategoryDisplay;
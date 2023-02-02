import React from 'react';
import { Link } from 'react-router-dom';
import '../JobCategory/JobCategory.css';

const JobCategoryDisplay = ({ category }) => {
    const { id, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = category;
    return (
        <div>
            <div className="card ">
                <div className="card-body">
                    <Link to="/" className=" fw-bold text-decoration-none category_link ">&#10148; {name}</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryDisplay;
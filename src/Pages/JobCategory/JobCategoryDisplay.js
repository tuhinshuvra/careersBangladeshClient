import React from 'react';
import { Link } from 'react-router-dom';
import './JobCategory.css';

const JobCategoryDisplay = ({ category }) => {
    const { id, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = category;
    return (
        <div>
            <Link to='/'>
                {/* <div className='text-md bg-base-100 font-bold shadow-2xl  hover:text-primary  hover:-rotate-1'>
                    <div className=' bg-slate-300 rounded rounded-md'>
                        <p className=' p-4 '>&#10148; {name}</p>
                        </div>
                    </div> */}

                <div className="card ">
                    <div className=" card-body">
                        <Link><p>&#10148; {name}</p></Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCategoryDisplay;
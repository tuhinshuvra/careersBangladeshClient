import React, { useEffect, useState } from 'react';
import JobCategoryDisplay from './JobCategoryDisplay';
import { FaCompass, FaCompressArrowsAlt, FaHotjar } from 'react-icons/fa';
import './JobCategory.css';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    let newcategory = categories.slice(0, 24)


    const [categoryToShow, setCategoryToShow] = useState(newcategory);

    useEffect(() => {
        // fetch('job-categories.json')
        fetch('http://localhost:5000/jobCategories')
            .then(response => response.json())
            .then(data => {
                setCategories(data)
                // console.log("Product Data:", data)
            })
    }, [])

    return (
        <div className=' common-margin '>
            <h2 className='my-5 careers_title_one'><FaCompressArrowsAlt className=' mx-1'></FaCompressArrowsAlt>  JOB CATEGORIES</h2>
            <div className=' job-category'>
                {
                    newcategory.map(category => <JobCategoryDisplay
                        key={category._id}
                        category={category}
                    ></JobCategoryDisplay>)
                }
            </div>
            <div className=' text-center my-3'>
                {/* <button className=' custom_btn '>Show All</button> */}
            </div>
        </div>
    );
};

export default JobCategory;
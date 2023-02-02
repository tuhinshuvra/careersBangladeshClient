import React, { useEffect, useState } from 'react';
import JobCategoryDisplay from './JobCategoryDisplay';
import './JobCategory.css';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 28)

    useEffect(() => {
        fetch('job-categories.json')
            .then(response => response.json())
            .then(data => {
                setCategories(data)
                console.log("Product Data:", data)
            })
    }, [])

    return (
        <div className=' common-margin '>
            <h2 className=' text-center fw-bold my-5 careers_title_one'>JOB CATEGORIES</h2>
            <div className=' job-category'>
                {newCategories.map(category => <JobCategoryDisplay
                    key={category.id}
                    category={category}
                ></JobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default JobCategory;
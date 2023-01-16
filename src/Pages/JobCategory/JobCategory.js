import React, { useEffect, useState } from 'react';
import JobCategoryDisplay from './JobCategoryDisplay';
import './JobCategory.css';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 28)
    // fetch('https://jsonplaceholder.typicode.com/albums')

    useEffect(() => {
        fetch('job-categories.json')
            .then(response => response.json())
            .then(data => {
                setCategories(data)
                console.log("Product Data:", data)
            })
    }, [])

    return (
        <div>
            <h2 className=' text-center fw-bold my-5'>JOB CATEGORIES</h2>
            {/* <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-2 lg:mx-0 sm:mx-16 mb-40'> */}
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
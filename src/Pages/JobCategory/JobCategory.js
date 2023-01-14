import React, { useEffect, useState } from 'react';
import JobCategoryDisplay from './JobCategoryDisplay';

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
            <h2 className=' text-center text-2xl font-bold my-8 capitalize'>JOB CATEGORIES</h2>
            <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-2 lg:mx-0 sm:mx-16 mb-40'>
                {newCategories.map(category => <JobCategoryDisplay
                    key={category.id}
                    category={category}
                ></JobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default JobCategory;
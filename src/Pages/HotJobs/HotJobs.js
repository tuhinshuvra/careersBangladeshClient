import React, { useEffect, useState } from 'react';
import '../JobCategory/JobCategory.css';
import HotJobCategoryDisplay from './HotJobCategoryDisplay';

const HotJobs = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 12)
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
        <div className=' common-margin '>
            <h2 className=' text-center fw-bold my-5'>HOT JOBS</h2>
            {/* <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-2 lg:mx-0 sm:mx-16 mb-40'> */}
            <div className=' job-category'>
                {newCategories.map(category => <HotJobCategoryDisplay
                    key={category.id}
                    category={category}
                ></HotJobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default HotJobs;
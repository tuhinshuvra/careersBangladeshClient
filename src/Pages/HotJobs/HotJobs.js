import React, { useEffect, useState } from 'react';
import HotJobCategoryDisplay from './HotJobCategoryDisplay';
import '../JobCategory/JobCategory.css';

const HotJobs = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 12)

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
            <h2 className=' text-center fw-bold my-5 careers_title_one'>HOT JOBS</h2>
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
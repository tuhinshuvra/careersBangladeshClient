import React, { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import JobCategoryDisplay from '../JobCategory/JobCategoryDisplay';
import '../JobCategory/JobCategory.css';

const NewJobs = () => {
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
            <h2 className=' text-center fw-bold my-5 careers_title_one'><MdOutlineWbSunny className=' mx-1'></MdOutlineWbSunny>NEW JOBS</h2>
            <div className=' job-category'>
                {newCategories.map(category => <JobCategoryDisplay
                    key={category.id}
                    category={category}
                ></JobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default NewJobs;
import React, { useEffect, useState } from 'react';
import HotJobsDisplay from './HotJobsDisplay';
import { FaHotjar } from 'react-icons/fa';
import './HotJobs.css';

const HotJobs = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 12)

    useEffect(() => {
        fetch('allJobs.json')
            .then(response => response.json())
            .then(data => {
                setCategories(data)
                console.log("Product Data:", data)
            })
    }, [])

    return (
        <div className=' common-margin '>
            <h2 className='my-5 careers_title_one'><FaHotjar className='mx-1'></FaHotjar>HOT JOBS</h2>
            <div className='hot_job_category'>
                {newCategories.map(category => <HotJobsDisplay
                    key={category.id}
                    category={category}
                ></HotJobsDisplay>)}
            </div>
        </div>
    );
};
export default HotJobs;
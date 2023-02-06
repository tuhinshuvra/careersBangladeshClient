import React, { useEffect, useState } from 'react';
import { FaHotjar, FaSun } from 'react-icons/fa';
import NewJobsDisplay from './NewJobsDisplay';
import './NewJobs.css';

const NewJobs = () => {
    const [categories, setCategories] = useState([]);
    let newCategories = categories.slice(0, 9)

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
            <h2 className='my-5 careers_title_one'><FaSun className='mx-1'></FaSun>NEW JOBS</h2>
            <div className='hot_job_category'>
                {newCategories.map(category => <NewJobsDisplay
                    key={category.id}
                    category={category}
                ></NewJobsDisplay>)}
            </div>
        </div>
    );
};
export default NewJobs;
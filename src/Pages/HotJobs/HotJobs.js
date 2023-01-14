import React, { useEffect, useState } from 'react';
import HotJobCategoryDisplay from './HotJobCategoryDisplay';

const HotJobs = () => {
    const [categories, setCategory] = useState([]);
    let newCategories = categories.slice(0, 12)

    useEffect(() => {
        fetch('job-categories.json')
            .then((response) => response.json())
            .then((data) => setCategory(data))
    }, []);


    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-8 capitalize'>HOT JOBS</h2>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-2 sm:mx-16 mb-40'>
                {newCategories.map(category => <HotJobCategoryDisplay
                    key={category.id}
                    category={category}
                ></HotJobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default HotJobs;
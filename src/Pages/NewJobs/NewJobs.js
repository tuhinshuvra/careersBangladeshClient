import React, { useEffect, useState } from 'react';
import { FaHotjar, FaSun } from 'react-icons/fa';
import NewJobsDisplay from './NewJobsDisplay';
import './NewJobs.css';
import { useQuery } from '@tanstack/react-query';

const NewJobs = () => {
    const { data: jobs = [], refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const respone = await fetch('https://careers-bangladesh-server.vercel.app/jobs');
            const data = respone.json();
            return data;
        }
    })

    let newJobs = jobs.slice(0, 6)

    return (
        <div className=' common-margin pb-3 '>
            <div className=' common-margin '>
                <h2 className='my-5 careers_title_one'><FaSun className='mx-1'></FaSun>NEW JOBS</h2>
                <div className='hot_job_category'>
                    {newJobs.map(job => <NewJobsDisplay
                        key={job.id}
                        job={job}
                    ></NewJobsDisplay>)}
                </div>
            </div>
        </div>
    );
};
export default NewJobs;
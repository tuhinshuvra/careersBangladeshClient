import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';

const AppliedJobList = () => {
    // const { applicationList } = useLoaderData();
    const { user } = useContext(AuthContext)

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch(`https://careers-bangladesh-server.vercel.app/jobseekerapply?email=${user?.email}`, {
            headers: {}
        })
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [user?.email])

    console.log("applications : ", applications)


    return (
        <div>
            <h2 className=' text-center font-bold my-3 '>Applied Job List</h2>
            <div className="overflow-x-auto">
                {/* <table className="table w-full"> */}
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className=''>
                            <th>SL</th>
                            <th>Position</th>
                            <th>Organizaiton</th>
                            <th>Applied</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* postersEmail  jobTitle organization category applicationDate email name  */}
                        {
                            applications.map((app, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{app.jobTitle}</td>
                                    <td>{app.organization}</td>
                                    <td>{app.applicationDate}</td>
                                    <td className=' fw-bold'>
                                        <Link className=' text-decoration-none' to={`/dashboard/jobs/${app.jobId}`}>Details</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AppliedJobList;
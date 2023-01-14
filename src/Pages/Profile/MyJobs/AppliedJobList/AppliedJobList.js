import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobList = () => {
    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-10 '>Applied Job List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className=''>
                            <th>SL</th>
                            <th>Position</th>
                            <th>Organizaiton</th>
                            <th>Applied Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover'>
                            <th>1</th>
                            <td>Full Stack Web Developer</td>
                            <td>Gorgeous Bangladesh Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>2</th>
                            <td>MERN Stack Web Developer</td>
                            <td>GPA Developer Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>3</th>
                            <td>Front End Web Developer</td>
                            <td>ABC Tech Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>4</th>
                            <td>ReactJS Web Developer</td>
                            <td>Mamun Tech Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>5</th>
                            <td>Back End Wdb Developer</td>
                            <td>Systech Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>6</th>
                            <td>IT Manager</td>
                            <td>Grameen Phone Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                        <tr className='hover'>
                            <th>7</th>
                            <td>IT Manager</td>
                            <td>Prime Bank Ltd</td>
                            <td>10/01/2023</td>
                            <td><button className=' btn btn-primary btn-sm'><Link>Edit</Link></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AppliedJobList;
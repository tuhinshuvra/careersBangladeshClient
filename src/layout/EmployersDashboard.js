import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import useTitle from '../Pages/Hooks/useTitle';

const EmployersDashboard = () => {
    useTitle('Employers')
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='row'>
                <div className="col-lg-3 mt-lg-3">
                    <ul className=" list-group">
                        <li className='list-group-item'><Link className=' nav_btn' to='/dashboardEmployers/employerDetails'>Employer Details</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardEmployers/employerProfile'>Employer Profile</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardEmployers/jobpost'>Job Post</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardEmployers/postedJobDetails'>Posted Job Details</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardEmployers/jobList'>Posted Job List</Link></li>
                    </ul>
                </div>

                <div className=" col-lg-9  drawer-content">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EmployersDashboard;
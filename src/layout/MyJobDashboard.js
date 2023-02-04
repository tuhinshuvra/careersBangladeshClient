import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import useTitle from '../Pages/Hooks/useTitle';

const MyJobDashboard = () => {
    useTitle('My Jobs');
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>

            <div className='row'>
                <div className=" col-lg-3 mt-lg-3">
                    <ul className=" list-group">
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardMyJobs/personal'>Personal</Link></li>
                        <li className='list-group-item   my-1'><Link className=' nav_btn' to='/dashboardMyJobs/education'>Education/Training</Link></li>
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardMyJobs/employment'>Employment</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardMyJobs/other-information'>Other Information</Link></li>
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardMyJobs/photograph'>Photograph</Link></li>
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardMyJobs/myProfile'>MyCV</Link></li>
                        <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboardMyJobs/applied'>Applied Job List</Link></li>
                    </ul>
                </div>

                <div className=" col-lg-9">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyJobDashboard;
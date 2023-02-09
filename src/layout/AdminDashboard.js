import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import useTitle from '../Pages/Hooks/useTitle';

const AdminDashboard = () => {
    useTitle('My Jobs');
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>

            <div className='row'>
                <div className=" col-lg-3 mt-lg-3">
                    <ul className=" list-group">
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardAdmin/jobseekerList'>Job Seeker List</Link></li>
                        <li className='list-group-item   my-1'><Link className=' nav_btn' to='/dashboardAdmin/employeeList'>Employers List</Link></li>
                        <li className='list-group-item '><Link className=' nav_btn' to='/dashboardAdmin'>All User</Link></li>
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

export default AdminDashboard;
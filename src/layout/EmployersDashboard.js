import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const EmployersDashboard = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className='row'>

                        <div className="drawer-side col-lg-3">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                                <li><Link to='/dashboardEmployers/employerDetails'>Employer Details</Link></li>
                                <li className=' my-1'><Link to='/dashboardEmployers/jobprimarypost'>Job Primary Post</Link></li>
                                <li className=' my-1'><Link to='/dashboardEmployers/jobdetailspost'>Job Details</Link></li>
                                <li className=' my-1'><Link to='/dashboardEmployers/jobList'>Posted Job List</Link></li>
                            </ul>
                        </div>

                        <div className=" col-lg-9  drawer-content">
                            <Outlet></Outlet>
                            {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default EmployersDashboard;
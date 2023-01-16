import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const MyJobDashboard = () => {
    return (
        <div>
            <div className=' container mx-auto'>
                <Navbar></Navbar>
                <div className="drawer drawer-mobile  columns-2 ">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                    <div className=' row'>

                        <div className="drawer-side col-lg-3">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                                <li><Link to='/dashboardMyJobs/personal'>Personal</Link></li>
                                <li className=' my-1'><Link to='/dashboardMyJobs/education'>Education/Training</Link></li>
                                <li><Link to='/dashboardMyJobs/employment'>Employment</Link></li>
                                <li className=' my-1'><Link to='/dashboardMyJobs/other-information'>Other Information</Link></li>
                                <li><Link to='/dashboardMyJobs/photograph'>Photograph</Link></li>
                                <li className=' my-1'><Link to='/dashboardMyJobs/applied'>Applied Job List</Link></li>
                            </ul>
                        </div>

                        <div className="drawer-content col-lg-9">
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

export default MyJobDashboard;
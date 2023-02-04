import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar2 from '../Pages/Shared/Navbar2';

const MyJobDashboard2 = () => {
    return (
        <div>
            <div className='w-[1200px] mx-auto'>
                <Navbar2></Navbar2>
                <div className="drawer drawer-mobile  columns-2 ">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        {/* <label  htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    </div>

                    <div className="drawer-side">
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
                </div>
                <Footer></Footer>

                {/* <div className="breadcrumbs columns-8 mx-auto">
                    <ul>
                        <li>
                            <Link to='/dashboard/personal'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Personal</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/education">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Education/Training</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/employment">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Employment</h2>

                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/other-information">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Other Information</h2>

                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/photograph">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <h2 className=' text-lg font-bold'>Photograph</h2>
                            </Link>
                        </li>

                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default MyJobDashboard2;
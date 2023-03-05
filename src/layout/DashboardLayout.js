import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import useTitle from '../hooks/useTitle';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Pages/Authentication/AuthProvider';
import useEmployer from '../hooks/useEmployer';
import useJobSeeker from '../hooks/useJobSeeker';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);


    const [isAdmin] = useAdmin(user?.email);
    const [isEmployer] = useEmployer(user?.email);
    const [isJobSeeker] = useJobSeeker(user?.email);

    useTitle('My Jobs');
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>

            <div className='row'>
                <div className=" col-lg-3 mt-lg-3">
                    <ul className=" list-group">
                        {
                            isAdmin && <>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/admin'>All User</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/jobseekerList'>Job Seeker List</Link></li>
                                <li className='list-group-item  my-1'><Link className=' nav_btn' to='/dashboard/employeeList'>Employers List</Link></li>
                                <li className='list-group-item  my-1'><Link className=' nav_btn' to='/dashboard/subscriberList'>Subscriber List</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/JobCategoryEntry'>Job Category Entry</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/JobCategoryList'>Job Category List</Link></li>
                            </>
                        }

                        {
                            isEmployer && <>
                                <li className='list-group-item'><Link className=' nav_btn' to='/dashboard/employerProfileEntry'>Entry Profile</Link></li>
                                <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboard/employerProfile'>Company Profile</Link></li>
                                <li className='list-group-item'><Link className=' nav_btn' to={`/dashboard/employerProfileManage/${user?.email}`}>Manage Profile</Link></li>
                                <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboard/newJobPost'>New Job Post</Link></li>
                                {/* <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboard/postedJobDetails'>Posted Job Details</Link></li> */}
                                <li className='list-group-item my-1'><Link className=' nav_btn' to='/dashboard/postedJobList'>Posted Job List</Link></li>
                            </>
                        }

                        {
                            isJobSeeker && <>
                                <li className='list-group-item'><Link className='nav_btn' to='/dashboard/jobSeekerProfileEntry'>Create Profile</Link></li>
                                {/* <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/jobSeekersPersonalDetailsEntry'>Employee's Personal Details</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/employeesExperienceDataEntry'>Employee's Experience Data</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/employeesAcademicAndTrainingEntry'>Employee's AcademicsAndTraining</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/employeesCareersAndSkillEntry'>Employee's Careers & Skill Data</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/employeesLanguageAndReferenceEntry'>Employee's LanguageAndReference Data</Link></li> */}
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/jobSeekerProfile'>My Profile</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/employeesProfileManage'>Manage Profile</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/savedJobs'>Saved Job List</Link></li>
                                <li className='list-group-item '><Link className=' nav_btn' to='/dashboard/appliedJobs'>Applied Job List</Link></li>
                            </>
                        }
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

export default DashboardLayout;
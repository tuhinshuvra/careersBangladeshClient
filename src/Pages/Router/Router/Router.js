import React, { useContext } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import MainLayout from '../../../layout/MainLayout';
import PostedJobList from '../../Profile/Employers/PostedJobList';
import EmployerProfileEntry from '../../Profile/Employers/EmployerProfileEntry';
import WrongRoute from '../../Shared/ErrorDisplay/WrongRoute';
import Login from '../../Login/Login';
import PostedJobDetails from '../../Profile/Employers/PostedJobDetails';
import JobPost from '../../Profile/Employers/JobPost';
import UserList from '../../Profile/Admin/AllUser';
import UpdateUser from '../../Profile/Admin/UpdateUser';
import EmployerList from '../../Profile/Admin/EmployerList';
import JobSeekerList from '../../Profile/Admin/JobSeekerList';
import PrivateRoute from '../PrivateRoute';
import DashboardLayout from '../../../layout/DashboardLayout';
import EmployersProfile from '../../Profile/Employers/EmployeersProfile';
import ELearning from '../../ELearning/ELearning';
import JobCategoryEntry from '../../JobCategory/JobCategoryEntry';
import JobCategoryList from '../../JobCategory/JobCategoryList';
import ApplicantList from '../../Profile/Employers/ApplicantList';
import CommonDashboard from '../../../layout/CommonDashboard';
import EducationTraining from '../../Profile/JobSeekers/Education-Training/EducationTraining';
import Employment from '../../Profile/JobSeekers/Employment/Employment';
import OtherInformation from '../../Profile/JobSeekers/OtherInformation';
import Photograph from '../../Profile/JobSeekers/Photograph/Photograph';
import AppliedJobList from '../../Profile/JobSeekers/AppliedJobList/AppliedJobList';
import JobSeekerProfileEntry from '../../Profile/JobSeekers/JobSeekerProfileEntry';
import JobSeekerProfile from '../../Profile/JobSeekers/JobSeekerProfile';
import SavedJobList from '../../Profile/JobSeekers/SavedJobList/SavedJobList';
import FindJobsByCategory from '../../JobSearch/FindJobsByCategory';
import FindAllJob from '../../JobSearch/FindAllJob';

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/findAllJob',
                element: <FindAllJob></FindAllJob>
            },
            {
                path: '/jobs/:categoryId',
                element: <FindJobsByCategory></FindJobsByCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobbycategory?category=${params.categoryId}`)
            },
            {
                path: '/elearning',
                element: <ELearning></ELearning>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: ([

            // job seeker dashboard section


            {
                path: '/dashboard',
                element: <CommonDashboard></CommonDashboard>,
            },

            {
                path: '/dashboard/jobSeekerProfileEntry',
                element: <JobSeekerProfileEntry></JobSeekerProfileEntry>
            },
            {
                path: '/dashboard/jobSeekerProfile',
                element: <JobSeekerProfile></JobSeekerProfile>
            },

            {
                path: '/dashboard/education',
                element: <EducationTraining></EducationTraining>
            },
            {
                path: '/dashboard/jobSeekerEmployment',
                element: <Employment></Employment>
            },
            {
                path: '/dashboard/jobSeekerOtherInfo',
                element: <OtherInformation></OtherInformation>
            },
            {
                path: '/dashboard/photograph',
                element: <Photograph></Photograph>
            },

            {
                path: '/dashboard/appliedJobs',
                element: <AppliedJobList></AppliedJobList>,
            },

            {
                path: '/dashboard/savedJobs',
                element: <SavedJobList></SavedJobList>,
                // loader: () => fetch('http://localhost:5000/jobseekersavedjobs')
            },



            // employer dashboard section

            {
                path: '/dashboard/employerProfile',
                element: <EmployersProfile></EmployersProfile>,
            },

            {
                path: '/dashboard/employerDetails',
                element: <EmployerProfileEntry></EmployerProfileEntry>
            },

            {
                path: '/dashboard/jobpost',
                element: <JobPost></JobPost>
            },

            {
                path: '/dashboard/jobs/:id',
                element: <PostedJobDetails></PostedJobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },

            {
                path: '/dashboard/postedJobList',
                element: <PostedJobList></PostedJobList>
            },

            {
                path: '/dashboard/applicantList',
                element: <ApplicantList></ApplicantList>,
            },



            // dashboard admin section 

            {
                path: '/dashboard/admin',
                element: <UserList></UserList>
            },
            {
                path: '/dashboard/JobCategoryEntry',
                element: <JobCategoryEntry></JobCategoryEntry>
            },
            {
                path: '/dashboard/JobCategoryList',
                element: <JobCategoryList></JobCategoryList>
            },
            {
                path: '/dashboard/employeeList',
                element: <EmployerList></EmployerList>
            },
            {
                path: '/dashboard/jobseekerList',
                element: <JobSeekerList></JobSeekerList>
            },

            {
                path: '/dashboard/userUpdate/:id',
                element: <UpdateUser></UpdateUser>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            },
        ])
    },

    {
        path: "*", element: <WrongRoute> </WrongRoute>
    },

])

export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import EducationTraining from '../../Profile/MyJobs/Education-Training/EducationTraining';
import Employment from '../../Profile/MyJobs/Employment/Employment';
import OtherInformation from '../../Profile/MyJobs/Personal/OtherInformation';
import Photograph from '../../Profile/MyJobs/Photograph/Photograph';
import MainLayout from '../../../layout/MainLayout';
import PostedJobList from '../../Profile/Employers/PostedJobList';
import EmployerProfileEntry from '../../Profile/Employers/EmployerProfileEntry';
import AppliedJobList from '../../Profile/MyJobs/AppliedJobList/AppliedJobList';
import WrongRoute from '../../Shared/ErrorDisplay/WrongRoute';
import Login from '../../Login/Login';
import MyCV from '../../Profile/MyJobs/Personal/MyCV';
import FindJob from '../../JobSearch/FindJob';
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
import JobSeekerProfileEntry from '../../Profile/MyJobs/Personal/JobSeekerProfileEntry';
import JobSeekerProfile from '../../Profile/MyJobs/Personal/JobSeekerProfile';
import JobCategoryEntry from '../../JobCategory/JobCategoryEntry';
import JobCategoryList from '../../JobCategory/JobCategoryList';

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
                path: '/findJobs',
                element: <FindJob></FindJob>
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
                path: '/dashboard/jobSeekerCV',
                element: <MyCV></MyCV>
            },
            {
                path: '/dashboard/appliedJob',
                element: <AppliedJobList></AppliedJobList>
            },



            // employer dashboard section

            {
                path: '/dashboard/employerProfile',
                element: <EmployersProfile></EmployersProfile>,
                // loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`)
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
                path: '/dashboard/postedJobDetails',
                element: <PostedJobDetails></PostedJobDetails>
            },
            {
                path: '/dashboard/postedJobList',
                element: <PostedJobList></PostedJobList>
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
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Personal from '../../Profile/MyJobs/Personal/Personal';
import EducationTraining from '../../Profile/MyJobs/Education-Training/EducationTraining';
import Employment from '../../Profile/MyJobs/Employment/Employment';
import OtherInformation from '../../Profile/MyJobs/Personal/OtherInformation';
import Photograph from '../../Profile/MyJobs/Photograph/Photograph';
import MainLayout from '../../../layout/MainLayout';
import PostedJobList from '../../Profile/Employers/PostedJobList';
import EmployersDashboard from '../../../layout/EmployersDashboard';
import EmployerDetails from '../../Profile/Employers/EmployerDetails';
import AppliedJobList from '../../Profile/MyJobs/AppliedJobList/AppliedJobList';
import WrongRoute from '../../Shared/ErrorDisplay/WrongRoute';
import MyJobDashboard from '../../../layout/MyJobDashboard';
import Login from '../../Login/Login';
import MyCV from '../../Profile/MyJobs/Personal/MyCV';
import FindJob from '../../JobSearch/FindJob';
import PostedJobDetails from '../../Profile/Employers/PostedJobDetails';
import EmployeersProfile from '../../Profile/Employers/EmployeersProfile';
import JobPost from '../../Profile/Employers/JobPost';

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
        path: '/dashboardMyJobs',
        element: <MyJobDashboard></MyJobDashboard>,
        children: [
            {
                path: '/dashboardMyJobs',
                element: <Personal></Personal>
            },
            {
                path: '/dashboardMyJobs/personal',
                element: <Personal></Personal>
            },
            {
                path: '/dashboardMyJobs/education',
                element: <EducationTraining></EducationTraining>
            },
            {
                path: '/dashboardMyJobs/employment',
                element: <Employment></Employment>
            },
            {
                path: '/dashboardMyJobs/other-information',
                element: <OtherInformation></OtherInformation>
            },
            {
                path: '/dashboardMyJobs/photograph',
                element: <Photograph></Photograph>
            },
            {
                path: '/dashboardMyJobs/myProfile',
                element: <MyCV></MyCV>
            },
            {
                path: '/dashboardMyJobs/applied',
                element: <AppliedJobList></AppliedJobList>
            },
        ]
    },
    {
        path: '/dashboardEmployers',
        element: <EmployersDashboard></EmployersDashboard>,
        children: [
            {
                path: '/dashboardEmployers',
                element: <EmployerDetails></EmployerDetails>
            },
            {
                path: '/dashboardEmployers/employerProfile',
                element: <EmployeersProfile></EmployeersProfile>
            },
            {
                path: '/dashboardEmployers/employerDetails',
                element: <EmployerDetails></EmployerDetails>
            },

            {
                path: '/dashboardEmployers/jobpost',
                element: <JobPost></JobPost>
            },

            {
                path: '/dashboardEmployers/postedJobDetails',
                element: <PostedJobDetails></PostedJobDetails>
            },
            {
                path: '/dashboardEmployers/jobList',
                element: <PostedJobList></PostedJobList>
            },
        ]
    },
    {
        path: "*", element: <WrongRoute> </WrongRoute>
    },
])
export default router;
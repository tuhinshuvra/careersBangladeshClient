import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Personal from '../../Profile/MyJobs/Personal/Personal';
import EducationTraining from '../../Profile/MyJobs/Education-Training/EducationTraining';
import Employment from '../../Profile/MyJobs/Employment/Employment';
import OtherRelevantInformation from '../../Profile/MyJobs/Personal/OtherRelevantInformation';
import Photograph from '../../Profile/MyJobs/Photograph/Photograph';
import MainLayout from '../../../layout/MainLayout';
import PostedJobList from '../../Profile/Employers/PostedJobList';
import EmployersDashboard from '../../../layout/EmployersDashboard';
import EmployerDetails from '../../Profile/Employers/EmployerDetails';
import AppliedJobList from '../../Profile/MyJobs/AppliedJobList/AppliedJobList';
import JobPrimaryPost from '../../Profile/Employers/JobPrimaryPost';
import JobDetailsPost from '../../Profile/Employers/JobDetailsPost';
import WrongRoute from '../../Shared/ErrorDisplay/WrongRoute';
import MyJobDashboard from '../../../layout/MyJobDashboard';
import Singin from '../../Signin/Singin';

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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signin',
                element: <Singin></Singin>
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
                element: <OtherRelevantInformation></OtherRelevantInformation>
            },
            {
                path: '/dashboardMyJobs/photograph',
                element: <Photograph></Photograph>
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
                path: '/dashboardEmployers/employerDetails',
                element: <EmployerDetails></EmployerDetails>
            },
            {
                path: '/dashboardEmployers/jobprimarypost',
                element: <JobPrimaryPost></JobPrimaryPost>
            },
            {
                path: '/dashboardEmployers/jobdetailspost',
                element: <JobDetailsPost></JobDetailsPost>
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
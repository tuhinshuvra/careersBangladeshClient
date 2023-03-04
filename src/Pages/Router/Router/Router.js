
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
import NewJobPost from '../../Profile/Employers/NewJobPost';
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

import FindJobsByCategory from '../../JobSearch/FindJobsByCategory';
import FindAllJob from '../../JobSearch/FindAllJob';
import TermsAndConditions from '../../TermsAndConditions';
import FindJobHomeResult from '../../JobSearch/FindJobHomeResult';
import SubscriberList from '../../Subscriber/SubscriberList';

import EmployeesProfile from '../../Profile/JobSeekers/EmployeesProfile';
import Photograph from '../../Profile/JobSeekers/Photograph/Photograph';
import AppliedJobList from '../../Profile/JobSeekers/AppliedJobList/AppliedJobList';
import SavedJobList from '../../Profile/JobSeekers/SavedJobList/SavedJobList';
import EmployeesProfileEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersProfileEntry';
import JobSeekersPersonalDetailsEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersPersonalDetailsEntry';
import JobSeekersExperienceEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersExperienceEntry';
import JobSeekersCareerAndSkillEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersCareerAndSkillEntry';
import JobSeekersAcademicAndTrainingEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersAcademicAndTrainingEntry';
import JobSeekersLanguageAndReferenceEntry from '../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersLanguageAndReferenceEntry';
import JobSeekersProfileManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersProfileManage';
import JobSeekersPersonalDetailsManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersPersonalDetailsManage';
import JobSeekersExperienceManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersExperienceManage';
import JobSeekersAcademicAndTrainingManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersAcademicAndTrainingManage';
import JobSeekersCareerAndSkillManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersCareerAndSkillManage';
import JobSeekersLanguageAndReferenceManage from '../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersLanguageAndReferenceManage';

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
                path: '/searchHomeResult',
                element: <FindJobHomeResult></FindJobHomeResult>

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
            {
                path: '/termsAndConditions',
                element: <TermsAndConditions></TermsAndConditions>
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

            // ##################################### employees Profile Entry Section Wise Start ##############################################
            {
                path: '/dashboard/jobSeekerProfileEntry',
                element: <EmployeesProfileEntry></EmployeesProfileEntry>
            },

            {
                path: '/dashboard/employeesPersonalDetailsEntry',
                element: <JobSeekersPersonalDetailsEntry></JobSeekersPersonalDetailsEntry>
            },

            {
                path: '/dashboard/employeesExperienceDataEntry',
                element: <JobSeekersExperienceEntry></JobSeekersExperienceEntry>
            },

            {
                path: '/dashboard/employeesCareersAndSkillEntry',
                element: <JobSeekersCareerAndSkillEntry></JobSeekersCareerAndSkillEntry>
            },

            {
                path: '/dashboard/employeesAcademicAndTrainingEntry',
                element: <JobSeekersAcademicAndTrainingEntry></JobSeekersAcademicAndTrainingEntry>
            },

            {
                path: '/dashboard/employeesLanguageAndReferenceEntry',
                element: <JobSeekersLanguageAndReferenceEntry></JobSeekersLanguageAndReferenceEntry>
            },

            // ##################################### employees Profile Entry Section Wise End ##############################################


            // ##################################### employees Profile Edit Section Wise Start #############################################

            {
                path: '/dashboard/employeesProfileManage',
                element: <JobSeekersProfileManage></JobSeekersProfileManage>
            },

            {
                path: '/dashboard/employeesPersonalDetails/:email',
                element: <JobSeekersPersonalDetailsManage></JobSeekersPersonalDetailsManage>,
                loader: ({ params }) => fetch(`http://localhost:5000/employeesPersonal/${params.email}`)
            },

            {
                path: '/dashboard/employeesExperiences/:email',
                element: <JobSeekersExperienceManage></JobSeekersExperienceManage>,
                loader: ({ params }) => fetch(`http://localhost:5000/employeesExpriences/${params.email}`)
            },
            {
                path: '/dashboard/employeesAcademicsAndTraining/:email',
                element: <JobSeekersAcademicAndTrainingManage></JobSeekersAcademicAndTrainingManage>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobseekersAcademics/${params.email}`)
            },

            {
                path: '/dashboard/employeesCareersAndSkill/:email',
                element: <JobSeekersCareerAndSkillManage></JobSeekersCareerAndSkillManage>,
                loader: ({ params }) => fetch(`http://localhost:5000/employeesCareers/${params.email}`)
            },

            {
                path: '/dashboard/employeesLanguagesAndReferences/:email',
                element: <JobSeekersLanguageAndReferenceManage></JobSeekersLanguageAndReferenceManage>,
                loader: ({ params }) => fetch(`http://localhost:5000/employeesReferences/${params.email}`)
            },

            {
                path: '/dashboard/employeesExperienceEdit',
                element: <JobSeekersExperienceManage ></JobSeekersExperienceManage>
            },
            {
                path: '/dashboard/employeesAcademicAndTrainingEdit',
                element: <JobSeekersAcademicAndTrainingManage></JobSeekersAcademicAndTrainingManage>
            },
            {
                path: '/dashboard/employeesCareerAndSkillEdit',
                element: <JobSeekersCareerAndSkillManage></JobSeekersCareerAndSkillManage>
            },
            {
                path: '/dashboard/employeesLanguageAndReferenceEdit',
                element: <JobSeekersLanguageAndReferenceManage></JobSeekersLanguageAndReferenceManage>
            },
            // ##################################### employees Profile Edit Section Wise End ##############################################

            {
                path: '/dashboard/jobSeekerProfile',
                element: <EmployeesProfile></EmployeesProfile>
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
                path: '/dashboard/employerProfileEntry',
                element: <EmployerProfileEntry></EmployerProfileEntry>
            },


            {
                path: '/dashboard/newJobPost',
                element: <NewJobPost></NewJobPost>
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
                path: '/dashboard/subscriberList',
                element: <SubscriberList></SubscriberList>
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
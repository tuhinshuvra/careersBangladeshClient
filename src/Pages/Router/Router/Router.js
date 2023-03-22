import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import MainLayout from "../../../layout/MainLayout";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import AdminRoute from "./AdminRoute";
import JobSeekerRoute from "./JobSeekersRoute";
import WrongRoute from "../../Shared/ErrorDisplay/WrongRoute";

import NewJobPost from "../../Profile/Employers/NewJobPost";
import PostedJobList from "../../Profile/Employers/PostedJobList";
import UserList from "../../Profile/Admin/AllUser";
import UpdateUser from "../../Profile/Admin/UpdateUser";
import EmployerList from "../../Profile/Admin/EmployerList";
import JobSeekerList from "../../Profile/Admin/JobSeekerList";
import PrivateRoute from "../PrivateRoute";
import DashboardLayout from "../../../layout/DashboardLayout";
import ELearning from "../../ELearning/ELearning";
import JobCategoryEntry from "../../JobCategory/JobCategoryEntry";
import JobCategoryList from "../../JobCategory/JobCategoryList";
import ApplicantList from "../../Profile/Employers/ApplicantList";

import FindJobsByCategory from "../../JobSearch/FindJobsByCategory";
import FindAllJob from "../../JobSearch/FindAllJob";
import TermsAndConditions from "../../TermsAndConditions";
import FindJobHomeResult from "../../JobSearch/FindJobHomeResult";
import SubscriberList from "../../Subscriber/SubscriberList";

import EmployerProfileEntry from "../../Profile/Employers/EmployerProfileEntry";
import PostedJobDetails from "../../Profile/Employers/PostedJobDetails";
import EmployersProfileManage from "../../Profile/Employers/EmployersProfileManage";
import Photograph from "../../Profile/JobSeekers/Photograph/Photograph";

import AppliedJobList from "../../Profile/JobSeekers/AppliedJobList/AppliedJobList";
import SavedJobList from "../../Profile/JobSeekers/SavedJobList/SavedJobList";
import JobSeekersProfileEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersProfileEntry";
import JobSeekersPersonalDetailsEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersPersonalDetailsEntry";
import JobSeekersExperienceEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersExperienceEntry";
import JobSeekersCareerAndSkillEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersCareerAndSkillEntry";
import JobSeekersAcademicAndTrainingEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersAcademicAndTrainingEntry";
import JobSeekersLanguageAndReferenceEntry from "../../Profile/JobSeekers/CreateJobSeekersProfile/JobSeekersLanguageAndReferenceEntry";
import JobSeekersProfileManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersProfileManage";
import JobSeekersPersonalDetailsManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersPersonalDetailsManage";
import JobSeekersExperienceManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersExperienceManage";
import JobSeekersAcademicAndTrainingManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersAcademicAndTrainingManage";
import JobSeekersCareerAndSkillManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersCareerAndSkillManage";
import JobSeekersLanguageAndReferenceManage from "../../Profile/JobSeekers/ManageJobSeekersProfile/JobSeekersLanguageAndReferenceManage";
import JobSeekersProfile from "../../Profile/JobSeekers/JobSeekersProfile";
import EmployersProfile from "../../Profile/Employers/EmployerProfile";
import DisplayError from "../../Shared/ErrorDisplay/DisplayError";
import UpdatePostedJob from "../../Profile/Employers/UpdatePostedJob";
import ApplicantProfile from "../../Profile/Employers/ApplicantProfile";
import NonUserRoute from "./NonUserRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/findAllJob",
        element: <FindAllJob></FindAllJob>,
      },
      {
        path: "/jobs/:categoryId",
        element: <FindJobsByCategory></FindJobsByCategory>,
        loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobbycategory?category=${params.categoryId}`),
      },

      // {
      //   path: "/searchHomeResult",
      //   element: <FindJobHomeResult></FindJobHomeResult>,
      // },

      {
        path: "/searchHomeResult/:search/:search2/:search3",
        element: <FindJobHomeResult></FindJobHomeResult>,
        // loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobSearch?${params.search}&${params.search2}&${params.search3}`),
      },

      {
        path: "/elearning",
        element: <ELearning></ELearning>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        // path: "/dashboard/jobs/:id",
        path: "/jobDetails/:jobId",
        // element:<NonUserRoute><PostedJobDetails></PostedJobDetails></NonUserRoute>,
        element:<PostedJobDetails></PostedJobDetails>,
        loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobs/${params.jobId}`)},

      {
        path: "/termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
    
    children: [
      // job seeker dashboard section    

      // ##################################### jobSeeker Profile Entry Start ##############################################
      {
        path: "/dashboard/jobSeekerProfileEntry",
        element: <JobSeekerRoute>  <JobSeekersProfileEntry></JobSeekersProfileEntry></JobSeekerRoute>
      },

      {
        path: "/dashboard/jobSeekersPersonalDetailsEntry",
        element: (
          <JobSeekerRoute>  <JobSeekersPersonalDetailsEntry></JobSeekersPersonalDetailsEntry>,
          </JobSeekerRoute>
        ),
      },

      {
        path: "/dashboard/jobSeekerExperienceDataEntry",
        element: <JobSeekerRoute> <JobSeekersExperienceEntry></JobSeekersExperienceEntry></JobSeekerRoute>,
      },

      {
        path: "/dashboard/jobSeekerCareersAndSkillEntry",
        element: (
          <JobSeekerRoute> <JobSeekersCareerAndSkillEntry></JobSeekersCareerAndSkillEntry></JobSeekerRoute>
        ),
      },

      {
        path: "/dashboard/jobSeekerAcademicAndTrainingEntry",
        element: (
          <JobSeekerRoute>  <JobSeekersAcademicAndTrainingEntry></JobSeekersAcademicAndTrainingEntry></JobSeekerRoute>
        ),
      },

      {
        path: "/dashboard/jobSeekerLanguageAndReferenceEntry",
        element: (
          <JobSeekerRoute>  <JobSeekersLanguageAndReferenceEntry></JobSeekersLanguageAndReferenceEntry> </JobSeekerRoute>
        ),
      },
      // ##################################### jobseekers Profile Entry  End ##############################################



      // ##################################### jobseekers Profile Edit Start #############################################
      {
        path: "/dashboard/jobSeekerProfileManage",
        element: <JobSeekerRoute><JobSeekersProfileManage></JobSeekersProfileManage></JobSeekerRoute>,
      },

      {
        path: "/dashboard/jobSeekersPersonalDetails",
        element: <JobSeekerRoute>  <JobSeekersPersonalDetailsManage></JobSeekersPersonalDetailsManage></JobSeekerRoute>,
        // loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersPersonal/${params.email}`),
      },

      {
        path: "/dashboard/jobSeekerExperiences",
        element:  <JobSeekerRoute><JobSeekersExperienceManage></JobSeekersExperienceManage></JobSeekerRoute>,
        loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersExpriences/${params.email}`),
      },
      {
        path: "/dashboard/jobSeekerAcademicsAndTraining",
        element: <JobSeekerRoute><JobSeekersAcademicAndTrainingManage></JobSeekersAcademicAndTrainingManage></JobSeekerRoute>,
        loader: ({ params }) => fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersAcademics/${params.email}`),
      },

      {
        path: "/dashboard/jobSeekerCareersAndSkill",
        element: <JobSeekerRoute><JobSeekersCareerAndSkillManage></JobSeekersCareerAndSkillManage></JobSeekerRoute>,
        loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersCareers/${params.email}`),
      },

      {
        path: "/dashboard/jobSeekerLanguagesAndReferences",
        element: (
          <JobSeekerRoute>
            <JobSeekersLanguageAndReferenceManage></JobSeekersLanguageAndReferenceManage>
          </JobSeekerRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/jobSeekersReferences/${params.email}`
          ),
      }, 
      // ##################################### jobseeker Edit Section End ##############################################

      {
        path: "/dashboard/jobSeekerProfile",
        element: <JobSeekersProfile></JobSeekersProfile>,        
      },

      {
        path: "/dashboard/photograph",
        element: <Photograph></Photograph>,
      },

      {
        path: "/dashboard/appliedJobs",
        element: 
        <JobSeekerRoute>
          <AppliedJobList></AppliedJobList>,
        </JobSeekerRoute>
      },

      {
        path: "/dashboard/savedJobs",
        element:  
        <JobSeekerRoute>
          <SavedJobList></SavedJobList>,
        </JobSeekerRoute>
      },

      /////////////////////////////// employer dashboard section///////////////////////////////////////
      {
        path: "/dashboard/employerProfileEntry",
        element: <EmployerProfileEntry></EmployerProfileEntry>,
      },
      {
        path: "/dashboard/employerProfile",
        element: <EmployersProfile></EmployersProfile>,
      },
      {
        path: "/dashboard/employerProfileManage/:email",
        element: <EmployersProfileManage></EmployersProfileManage>,
        loader: async ({ params }) => await
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employer/${params.email}`
          ),
      },
      {
        path: "/dashboard/newJobPost",
        element: <NewJobPost></NewJobPost>,
      },

    

      {
        path: "/dashboard/postedJobList",
        element: <PostedJobList></PostedJobList>,
      },
      {
        path: "/dashboard/jobUpdate/:jobId",
        element: <UpdatePostedJob></UpdatePostedJob> ,
        loader: async ({params}) =>  fetch(`${process.env.REACT_APP_CABD_server_address}/jobs/${params.jobId}`)
      },

      {
        path: "/dashboard/applicantList",
        element: <ApplicantList></ApplicantList>,
      },
      {
        path: "/dashboard/applicantProfile",
        element: <ApplicantProfile></ApplicantProfile> ,        
      },



      // ######################################### dashboard admin section ##################################3

      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <UserList></UserList>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/JobCategoryEntry",
        element: (
          <AdminRoute>
            <JobCategoryEntry></JobCategoryEntry>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/JobCategoryList",
        element: (
          <AdminRoute>
            <JobCategoryList></JobCategoryList>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/jobSeekerList",
        element: (
          <AdminRoute>
            <EmployerList></EmployerList> ,
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/jobseekerList",
        element: (
          <AdminRoute>
            <JobSeekerList></JobSeekerList>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/subscriberList",
        element: (
          <AdminRoute>
            <SubscriberList></SubscriberList>{" "}
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/userUpdate/:id",
        element: (
          <AdminRoute>
            <UpdateUser></UpdateUser>{" "}
          </AdminRoute>
        ),
        loader: async ({ params }) => await
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/users/${params.id}`
          ),
      },
    ],
  },

  {
    path: "*",
    element: <WrongRoute> </WrongRoute>,
  },
]);

export default router;

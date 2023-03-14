import React, { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Register from "../../Register/Register";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import MainLayout from "../../../layout/MainLayout";
import PostedJobList from "../../Profile/Employers/PostedJobList";
import WrongRoute from "../../Shared/ErrorDisplay/WrongRoute";
import Login from "../../Login/Login";

import NewJobPost from "../../Profile/Employers/NewJobPost";
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
import CommonDashboard from "../../../layout/CommonDashboard";

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
import EmployersProfile from "../../Profile/Employers/EmployeersProfile";
import AdminRoute from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/jobbycategory?category=${params.categoryId}`
          ),
      },

      // {
      //   path: "/searchHomeResult",
      //   element: <FindJobHomeResult></FindJobHomeResult>,
      // },

      {
        path: "/searchHomeResult/:search/:search2/:search3",
        element: <FindJobHomeResult></FindJobHomeResult>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/jobSearch?${params.search}&${params.search2}&${params.search3}`
          ),
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
        path: "/termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // job seeker dashboard section
      {
        path: "/dashboard",
        element: <CommonDashboard></CommonDashboard>,
      },

      // ##################################### employees Profile Entry Section Wise Start ##############################################
      {
        path: "/dashboard/jobSeekerProfileEntry",
        element: <JobSeekersProfileEntry></JobSeekersProfileEntry>,
      },

      {
        path: "/dashboard/jobSeekersPersonalDetailsEntry",
        element: (
          <JobSeekersPersonalDetailsEntry></JobSeekersPersonalDetailsEntry>
        ),
      },

      {
        path: "/dashboard/employeesExperienceDataEntry",
        element: <JobSeekersExperienceEntry></JobSeekersExperienceEntry>,
      },

      {
        path: "/dashboard/employeesCareersAndSkillEntry",
        element: (
          <JobSeekersCareerAndSkillEntry></JobSeekersCareerAndSkillEntry>
        ),
      },

      {
        path: "/dashboard/employeesAcademicAndTrainingEntry",
        element: (
          <JobSeekersAcademicAndTrainingEntry></JobSeekersAcademicAndTrainingEntry>
        ),
      },

      {
        path: "/dashboard/employeesLanguageAndReferenceEntry",
        element: (
          <JobSeekersLanguageAndReferenceEntry></JobSeekersLanguageAndReferenceEntry>
        ),
      },

      // ##################################### employees Profile Entry Section Wise End ##############################################

      // ##################################### employees Profile Edit Section Wise Start #############################################

      {
        path: "/dashboard/employeesProfileManage",
        element: <JobSeekersProfileManage></JobSeekersProfileManage>,
      },

      {
        path: "/dashboard/employeesPersonalDetails/:email",
        element: (
          <JobSeekersPersonalDetailsManage></JobSeekersPersonalDetailsManage>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employeesPersonal/${params.email}`
          ),
      },

      {
        path: "/dashboard/employeesExperiences/:email",
        element: <JobSeekersExperienceManage></JobSeekersExperienceManage>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employeesExpriences/${params.email}`
          ),
      },
      {
        path: "/dashboard/employeesAcademicsAndTraining/:email",
        element: (
          <JobSeekersAcademicAndTrainingManage></JobSeekersAcademicAndTrainingManage>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/jobseekersAcademics/${params.email}`
          ),
      },

      {
        path: "/dashboard/employeesCareersAndSkill/:email",
        element: (
          <JobSeekersCareerAndSkillManage></JobSeekersCareerAndSkillManage>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employeesCareers/${params.email}`
          ),
      },

      {
        path: "/dashboard/employeesLanguagesAndReferences/:email",
        element: (
          <JobSeekersLanguageAndReferenceManage></JobSeekersLanguageAndReferenceManage>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employeesReferences/${params.email}`
          ),
      },

      {
        path: "/dashboard/employeesExperienceEdit",
        element: <JobSeekersExperienceManage></JobSeekersExperienceManage>,
      },
      {
        path: "/dashboard/employeesAcademicAndTrainingEdit",
        element: (
          <JobSeekersAcademicAndTrainingManage></JobSeekersAcademicAndTrainingManage>
        ),
      },
      {
        path: "/dashboard/employeesCareerAndSkillEdit",
        element: (
          <JobSeekersCareerAndSkillManage></JobSeekersCareerAndSkillManage>
        ),
      },
      {
        path: "/dashboard/employeesLanguageAndReferenceEdit",
        element: (
          <JobSeekersLanguageAndReferenceManage></JobSeekersLanguageAndReferenceManage>
        ),
      },

      // ##################################### jobseeker Edit Section Wise End ##############################################

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
        element: <AppliedJobList></AppliedJobList>,
      },

      {
        path: "/dashboard/savedJobs",
        element: <SavedJobList></SavedJobList>,
        // loader: () => fetch('https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobseekersavedjobs')
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
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/employer/${params.email}`
          ),
      },
      {
        path: "/dashboard/newJobPost",
        element: <NewJobPost></NewJobPost>,
      },

      {
        path: "/dashboard/jobs/:id",
        element: <PostedJobDetails></PostedJobDetails>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_CABD_server_address}/jobs/${params.id}`
          ),
      },

      {
        path: "/dashboard/postedJobList",
        element: <PostedJobList></PostedJobList>,
      },

      {
        path: "/dashboard/applicantList",
        element: <ApplicantList></ApplicantList>,
      },

      // dashboard admin section

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
        path: "/dashboard/employeeList",
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
        loader: ({ params }) =>
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

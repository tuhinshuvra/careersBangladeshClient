import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import useTitle from "../hooks/useTitle";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import useEmployer from "../hooks/useEmployer";
import useJobSeeker from "../hooks/useJobSeeker";
import Loader from "../Pages/Shared/Loader/Loader";

const DashboardLayout = () => {
  useTitle("My Jobs");
  const { user, loading, setLoading, setShowPersonalData } = useContext(AuthContext);
  const email = user?.email;

  const [isAdmin] = useAdmin(user?.email);
  const [isEmployer] = useEmployer(user?.email);
  const [isJobSeeker] = useJobSeeker(user?.email);

  const [employerData, setEmployerData] = useState([]);
  const [jobSeekersData, setJobSeekersData] = useState([]);


  if (loading) {
    <Loader></Loader>
  }


  //  ##################3 employerData show #####################

  useEffect(() => {
    // setLoading(true);
    fetch(`${process.env.REACT_APP_CABD_server_address}/employer/${email}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Employee Data:", data);
        setEmployerData(data);
        setLoading(false);
      });
  }, [email, setLoading]);


  // ########### jobseekers data show#######################

  useEffect(() => {
    // setLoading(true);
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobSeekersAllData/${email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setJobSeekersData(data[0]);
        setLoading(false);
      });
  }, [email, setLoading]);


  // ############to show employer profile data#################

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/employer/${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee Data Data data:", data);
        setEmployerData(data);
      });
  }, [email]);


  return (
    <div className="container mx-auto">
      <Navbar></Navbar>

      <div className="row">
        <div className=" col-lg-3 mt-md-5">
          <ul className=" list-group">


            {isAdmin && (
              <>
                <li className="list-group-item ">
                  <Link className=" nav_btn" to="/dashboard/admin">  All User </Link>
                </li>
                <li className="list-group-item ">
                  <Link className=" nav_btn" to="/dashboard/jobseekerList">Job Seeker List</Link>
                </li>
                <li className="list-group-item  my-1">
                  <Link className=" nav_btn" to="/dashboard/jobSeekerList">Employers List</Link>
                </li>
                <li className="list-group-item  my-1">
                  <Link className=" nav_btn" to="/dashboard/subscriberList">Subscriber List</Link>
                </li>
                <li className="list-group-item ">
                  <Link className=" nav_btn" to="/dashboard/JobCategoryEntry">Job Category Entry</Link>
                </li>
                <li className="list-group-item ">
                  <Link className=" nav_btn" to="/dashboard/JobCategoryList">Job Category List</Link>
                </li>
              </>
            )}

            {isEmployer && (
              <>
                {employerData.length === 0 && (
                  <>
                    <li className="list-group-item">
                      <Link className=" nav_btn" to="/dashboard/employerProfileEntry"> Entry Profile</Link>
                    </li>
                  </>
                )}

                {employerData.length !== 0 && (
                  <>
                    <li className="list-group-item my-1">
                      <Link className=" nav_btn" to="/dashboard/employerProfile">Company Profile</Link>
                    </li>

                    <li className="list-group-item">
                      <Link className=" nav_btn" to={`/dashboard/employerProfileManage/${user?.email}`}>Manage Profile</Link>
                    </li>

                  </>
                )}

                {
                  employerData?.email &&
                  <>
                    <li className="list-group-item my-1">
                      <Link className=" nav_btn" to="/dashboard/newJobPost">New Job Post</Link>
                    </li>

                    <li className="list-group-item my-1">
                      <Link className=" nav_btn" to="/dashboard/postedJobList">Posted Job List</Link>
                    </li>
                  </>
                }


              </>
            )}

            {isJobSeeker && (
              <>
                {jobSeekersData === undefined && (
                  <>
                    <li className="list-group-item">
                      <Link onClick={() => setShowPersonalData(true)} className="nav_btn" to="/dashboard/jobSeekerProfileEntry">Create Profile</Link>
                    </li>
                  </>
                )}
                {/* )} */}

                {jobSeekersData !== undefined && (
                  <>
                    <li className="list-group-item ">
                      <Link className=" nav_btn" to="/dashboard/jobSeekerProfile" >My Profile</Link>
                    </li>

                    <li className="list-group-item ">
                      <Link onClick={() => setShowPersonalData(true)} className=" nav_btn" to="/dashboard/jobSeekerProfileManage">Manage Profile</Link>
                    </li>

                    <li className="list-group-item ">
                      <Link className=" nav_btn" to="/dashboard/appliedJobs">Applied Job List</Link>
                    </li>

                  </>
                )}

                <li className="list-group-item ">
                  <Link className=" nav_btn" to="/dashboard/savedJobs">Saved Job List</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className=" col-lg-9">
          {
            (isEmployer && !employerData?.email) &&

            <div className=" text-center fw-bold my-3">
              <h2 className=" text-decoration-none text-warning">Please Complete Your Profile for Post a Job</h2>
            </div>
          }

          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;

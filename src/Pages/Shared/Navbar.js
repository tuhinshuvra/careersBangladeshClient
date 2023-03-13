import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/carriers-bangladesh-logo.png";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import useEmployer from "../../hooks/useEmployer";
import useJobSeeker from "../../hooks/useJobSeeker";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const email = user?.email;

  const [isAdmin] = useAdmin(user?.email);
  const [isEmployer] = useEmployer(user?.email);
  const [isJobSeeker] = useJobSeeker(user?.email);
  const [employerData, setEmployerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/employer/${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee Data:", data);
        setEmployerData(data);
      });
  }, [email]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("User logout successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar_bg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand spin_logo">
            <img className="navlogo" src={Logo} alt="" />
          </Link>

          {/* <p><i className="fa fa-spinner w3-spin" style="font-size:64px"></i></p> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cbNavbarToggler"
            aria-controls="cbNavbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="cbNavbarToggler">
            <ul className=" navbar-nav d-flex justify-content-center align-items-center mx-auto ">
              <li className="nav-item mb-2">
                <Link
                  className=" border-0  mx-lg-1  fw-bold nav_btn"
                  aria-current="page"
                  to="/findAllJob"
                >
                  FindJobs
                </Link>
              </li>

              {/* <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/elearning">Elearning</Link>
                            </li> */}

              <li className="nav-item mb-2">
                <Link
                  className=" border-0  mx-lg-1  fw-bold nav_btn"
                  aria-current="page"
                  to="/about"
                >
                  AboutUs
                </Link>
              </li>

              {user?.uid ? (
                <>
                  <li className="nav-item dropdown mb-2">
                    <Link
                      className=" dropdown-toggle nav_btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user?.displayName}
                    </Link>
                    <ul className="dropdown-menu">
                      {isAdmin && (
                        <>
                          <li className="list-group-item ">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/JobCategoryEntry"
                            >
                              Job Category Entry
                            </Link>
                          </li>
                          <li className="list-group-item ">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/JobCategoryList"
                            >
                              Job Category List
                            </Link>
                          </li>
                          <li className="list-group-item ">
                            <Link className=" nav_btn" to="/dashboard/admin">
                              All User
                            </Link>
                          </li>
                          <li className="list-group-item ">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/jobseekerList"
                            >
                              All Job Seeker
                            </Link>
                          </li>
                          <li className="list-group-item">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/employeeList"
                            >
                              All Employer
                            </Link>
                          </li>
                          <li className="list-group-item">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/subscriberList"
                            >
                              Subscriber List
                            </Link>
                          </li>
                        </>
                      )}
                      {isJobSeeker && (
                        <>
                          <li className="list-group-item ">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/jobSeekerProfileEntry"
                            >
                              Create Profile
                            </Link>
                          </li>
                          <li className="list-group-item   my-1">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/jobSeekerProfile"
                            >
                              My Profile
                            </Link>
                          </li>
                          <li className="list-group-item ">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/employeesProfileManage"
                            >
                              Manage Profile
                            </Link>
                          </li>
                          <li className="list-group-item my-1">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/savedJobs"
                            >
                              Saved Job List
                            </Link>
                          </li>
                          <li className="list-group-item my-1">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/appliedJobs"
                            >
                              Applied Job List
                            </Link>
                          </li>
                        </>
                      )}
                      {isEmployer && (
                        <>
                          <li className="list-group-item">
                            {employerData.length === 0 && (
                              <>
                                <Link
                                  className=" nav_btn"
                                  to="/dashboard/employerProfileEntry"
                                >
                                  Entry Profile
                                </Link>
                              </>
                            )}
                          </li>
                          {employerData.length !== 0 && (
                            <>
                              <li className="list-group-item my-1">
                                <Link
                                  className=" nav_btn"
                                  to="/dashboard/employerProfile"
                                >
                                  Company Profile
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link
                                  className=" nav_btn"
                                  to={`/dashboard/employerProfileManage/${user?.email}`}
                                >
                                  Manage Profile
                                </Link>
                              </li>
                            </>
                          )}

                          <li className="list-group-item my-1">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/newJobPost"
                            >
                              New Job Post
                            </Link>
                          </li>
                          <li className="list-group-item my-1">
                            <Link
                              className=" nav_btn"
                              to="/dashboard/postedJobList"
                            >
                              Posted Job List
                            </Link>
                          </li>
                        </>
                      )}

                      <li className="nav-item  border-0  mx-lg-1  fw-bold mb-2 ">
                        {" "}
                        <Link className="nav_btn" onClick={handleLogOut}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                // <li className='nav-item  nav_btn mb-2'><Link className='nav_btn' to="/dashboard">  {user?.displayName}</Link></li>
                // <li className='nav-item  border-0  mx-lg-1  fw-bold mb-2 '>  <Link className='nav_btn' onClick={handleLogOut} >Logout</Link></li>

                <>
                  <li className=" border-0  mx-lg-1  fw-bold mb-2 ">
                    {" "}
                    <Link className=" nav_btn" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

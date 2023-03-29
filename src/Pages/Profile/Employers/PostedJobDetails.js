import React, { useContext, useEffect, useState } from "react";
import { FaBookmark, FaBriefcase, FaBuilding, FaCalculator } from "react-icons/fa";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import useEmployer from "../../../hooks/useEmployer";
import useJobSeeker from "../../../hooks/useJobSeeker";
import { AuthContext } from "../../Authentication/AuthProvider";
import { toast } from "react-hot-toast";
import Loader from "../../Shared/Loader/Loader";
import "./PostedJobDetails.css";

const PostedJobDetails = () => {

  const { user, setJobId, loading, setLoading, jobSeekersData, setJobSeekersData } = useContext(AuthContext);

  const fromLocation = useLocation();
  const jobdetails = useLoaderData();
  // const [applications, setApplications] = useState([]);
  const [expectedSalary, setExpectedSalary] = useState("0");
  const [savedJob, setSavedJob] = useState([]);
  const [appliedJob, setAppliedJob] = useState([]);

  if (loading) {
    <Loader></Loader>
  }
  // console.log("savedJob List",savedJob);

  // console.log(applyStatus, applications);

  // console.log("jobdetails : ", jobdetails)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersAllData/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("jobSeekersAllData : ", data[0])
        setJobSeekersData(data[0]);
      });
  }, [user?.email, setJobSeekersData]);



  const [jobPosts, setJobPosts] = useState([]);

  const [isEmployer] = useEmployer(user?.email);
  const [isJobSeeker] = useJobSeeker(user?.email);

  const userEmail = user?.email;

  const employer = useLoaderData();

  // console.log("Employer : ", employer)

  const { _id, postersName, email, jobTitle, companyLogo, organization, vacancies, category, deadLine, education, experience, postDate,
    applyStatus, employmentStatus, businessDescription, jobLevel, workPlace, jobContext, jobResponst, location, salaryFrom, salaryTo,
    yearlyBonus, salaryReview, status, others } = jobdetails;

  // console.log("jobsData : ", jobPosts);

  const today = new Date().toJSON().slice(0, 10);

  // appply job
  const handleApply = (data) => {
    // console.log("Applied jobdetails :", jobdetails);
    setLoading(true);
    const jobApply = {
      jobId: _id,
      email: user.email,
      name: user.displayName,
      postersEmail: email,
      expectedSalary: expectedSalary,
      jobTitle: jobTitle,
      organization: organization,
      category: category,
      jobPostDate: postDate,
      applicationDate: today,
    };
    console.log("Job Apply Data :", jobApply);

    fetch(`${process.env.REACT_APP_CABD_server_address}/applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApply),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Post the application successfully");
          setLoading(false);
          // navigate("/findAllJob");
        } else {
          toast.error(data.message);
        }
      });
  };

  // save a job to apply future

  const handleJobSave = () => {
    setLoading(true);
    console.log("Saved Job Details :", jobdetails);
    const savedJob = {
      jobId: _id,
      email: user.email,
      name: user.displayName,
      postersEmail: email,
      jobTitle: jobTitle,
      organization: organization,
      category: category,
      jobPostDate: postDate,
      savedDate: today,
      applicationDeadLine: deadLine,
    };

    // console.log("Saved Job Data :", savedJob);
    fetch(`${process.env.REACT_APP_CABD_server_address}/savedjobs`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedJob),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          // toast.success("The Job Saved Successfully");
          toast.success("The saved job deleted successfully", { duration: 1000, position: 'top-left' });
          setLoading(false);
        }
      });
  };

  const getExpectedSalary = (event) => {
    const expSalary = event.target.value;
    setExpectedSalary(expSalary);
  };


  //###################### show all saved job by user email ##################################
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobseekersavedjobs?email=${userEmail}`)
      .then(res => res.json())
      .then(data => {
        // console.log("All jobseeker saved jobs" ,data)
        setSavedJob(data);
      })
  }, [userEmail])

  const isSaved = savedJob.find(data => data.jobId === _id);
  // console.log("isSaved : ",isSaved);



  //###################### show all Applied job by user email ##################################
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobseekerapply?email=${userEmail}`)
      .then(res => res.json())
      .then(data => {
        // console.log("All jobseeker applied jobs", data)
        setAppliedJob(data);
      })
  }, [userEmail])

  const isApplied = appliedJob.find(data => data.jobId === _id);
  // console.log("isApplied : ",isApplied);

  // const handleApplyState=()=>{
  //   console.log("I amd handleApplyState");
  //   <Navigate to="/login" state={{ from: fromLocation }} replace></Navigate>
  // }


  return (
    <div>
      <div className="card jobDetails">
        <div>
          {/* <Link className="fw-bold btn-sm btn btn-primary mx-1" to={`/dashboard/jobUpdate/${_id}`}>Update Job</Link> */}

          <div className="float-end">
            {isEmployer && (
              <p className="fw-bold me-3 mt-2">Job Status : {status} </p>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className=" d-md-flex justify-content-between  mb-4 ">
            <div className=" d-flex">
              <img
                className="companyLogo rounded-circle mx-2 "
                src={companyLogo}
                alt=""
              />
              <h3 className=" fw-bold mx-1">{organization}</h3>
            </div>
            <div className="d-flex">
              <h5 className="fw-bold">
                {jobTitle}, {location}, (On Site)
              </h5>

              {isSaved ?
                <FaBookmark className="fs-5 mx-1 float-end fs-2 text-success disabled  "></FaBookmark>
                : <>
                  {isJobSeeker && (
                    <Link onClick={() => handleJobSave()}>
                      <FaBookmark className="fs-5 mx-1 float-end fs-2 text-info "></FaBookmark>
                    </Link>
                  )}
                </>
              }

            </div>
          </div>

          <div className="d-flex justify-content-between">
            <p className="fw-bold d-flex justify-content-center align-items-center">
              <FaBriefcase className="fs-5 mx-1"></FaBriefcase>Full-time
            </p>
            <p className="fw-bold d-flex justify-content-center align-items-center d-none d-md-block">
              <FaBuilding className="fs-5 mx-1"></FaBuilding>51-200 employees
            </p>
            <p className="fw-bold d-flex justify-content-center align-items-center">
              <FaCalculator className="fs-5 mx-1"></FaCalculator>Posted:
              {postDate}
            </p>
          </div>

          <p>
            <b> Job Context</b> <br />
            {jobContext}
            {/* <ul>
                            <li>We are looking for a proactive and passionate Full Stack Web Developer,</li>
                            <li>We look for candidates who are passionate about technology and how they can leverage,</li>
                            <li>their skills in solving the problems. You will assume a strong sense of ownership of the product: design, develop & deploy.</li>
                        </ul> */}
          </p>

          <p>
            <b> Job Responsibilities</b> <br />
            {jobResponst}
            {/* <ul>
                            <li> Developing Websites for client's Business & Other organizations. </li>
                            <li>
                                Knowledge of front-end technologies, such as HTML5, Bootstrap 4.5/5, CSS3, JavaScript.
                            </li>
                            <li>
                                knowledge of PHP.
                            </li>
                            <li>
                                Experience with the Laravel Framework.
                            </li>
                            <li>
                                Familiarity with SQL/NoSQL databases and their declarative query languages
                            </li>
                            <li>
                                Experienced in one or more of the following - React.js (preferred) , Angular.js , Vue.js

                            </li>
                            <li>
                                Proficient understanding of code versioning tools, such as Git
                            </li>
                            <li>
                                Expertise in Wordpress.
                            </li>
                            <li>
                                Basic Konowledge of Other CMS.
                            </li>
                        </ul> */}
          </p>

          <b> Workplace</b>
          <ul>
            <li>{workPlace}</li>
          </ul>

          <p>
            <b> Educational Requirements</b>
            <ul>
              <li>{education}</li>
            </ul>
          </p>

          <p>
            <b> Experience Requirements</b>
            <ul>
              <li>{experience}</li>
            </ul>
          </p>

          <p>
            <b> Additional Requirements</b>
            <ul>
              <li>Age at least 25 years</li>
              <li>Both males and females are allowed to apply</li>
            </ul>
          </p>

          <p>
            <b> Job Location</b> <br />
            {location}
          </p>

          <p>
            <b>Salary</b> <br />
            Tk. {salaryFrom} - {salaryTo} (Monthly)
          </p>

          <p>
            <b>Employment Status</b>
            <ul>
              <li>Sunday to Thursday</li>
              <li>Full- Time (10.00 AM – 6.00 PM)</li>
            </ul>
          </p>

          <p>
            <b>Benefits</b>
            <ul>
              <li>Mobile bill, launch</li>
              <li>Snacks, Unlimited Tea & Coffee</li>
              <li>Salary Review: Yearly</li>
              <li>Festival Bonus: 2 per year</li>
              <li>Working Environment</li>
            </ul>
          </p>

          <p>
            <b>Job Source</b>
            <br />
            careersbangladesh.com Online Job Posting.
          </p>

          {
            isEmployer &&
            <div className=" text-center">
              <Link className="fw-bold custom_btn text-decoration-none" to={`/dashboard/jobUpdate/${_id}`}>Update Job</Link>
              <Link className="fw-bold custom_btn text-decoration-none" to={`/dashboard/applicantList`} onClick={() => setJobId(_id)}> ApplicatList</Link>
            </div>
          }

          {isApplied ?

            <div className="d-flex justify-content-center">
              <button className="btn btn-secondary fw-bold  disabled"> Already Applied </button>
            </div>
            : <>

              {
                (isJobSeeker && jobSeekersData?.email)
                  ?
                  <>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmationModal"
                        className=" custom_btn mx-1"
                      >
                        Apply Now
                      </button>
                    </div>

                  </>
                  :
                  <div className=" text-center">
                    <Link to="/dashboard/jobSeekerProfileEntry" className=" custom_btn text-decoration-none">Complete Your Profile</Link>
                  </div>

              }

            </>}

          {

            (isJobSeeker || isEmployer) ?
              <>
              </>
              :
              <>
                <div className=" text-center">
                  <Link to="/login" className=" btn custom_btn text-decoration-none">
                    Apply Now
                  </Link>
                </div>
              </>
          }



          <div
            className="modal fade"
            id="confirmationModal"
            tabindex="-1"
            aria-labelledby="confirmationModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="confirmationModalLabel">
                    Apply Online
                  </h1>
                </div>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  <div className=" col-lg-6">
                    <input
                      onBlur={getExpectedSalary}
                      className="input form-control"
                      name="exSalary"
                      type="text"
                      id="exSalary"
                      placeholder="Input expected salary"
                    />
                  </div>
                  <span className=" col-lg-4 fw-bold"> /monthly</span>
                </div>

                <div className="form-check  ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label "
                    htmlFor="flexCheckChecked"
                  >
                    I am agree with the terms and conditions
                  </label>
                </div>

                <div className="modal-footer">
                  <Link onClick={() => handleApply(jobdetails)}>
                    <button
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmationModal"
                      className=" custom_btn mx-1"
                    >
                      Confirm to Apply
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PostedJobDetails;

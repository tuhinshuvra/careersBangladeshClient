import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

const ApplicantList = () => {
  const { jobId, setApplicatShow } = useContext(AuthContext);
  const [applicants, setApplicants] = useState([]);

  console.log("ApplicantList jobId :", applicants);


  // ################### show applicant list of a certain job ######################
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobapplicant?jobId=${jobId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApplicants(data);
        // console.log(" ApplicantList ApplicantList :", data);
      });
  }, [jobId]);

  const applicantNum = applicants.length;
  console.log("applicantNum : ", applicantNum);


  return (
    <div>
      {
        applicantNum === 0
          ?
          <div className=" text-center">
            <h3 className=" fw-bold">Nobody applied yet </h3>
          </div>
          :
          <>
            <div className="text-center font-bold my-3">
              <h3 className=" ">Till now {applicantNum} job seekers applied</h3>
              <h5 className=" ">Applicant List</h5>
            </div>
            <div className="overflow-x-auto">
              {/* <table className="table w-full"> */}
              <table className="table table-hover table-bordered">
                <thead>
                  <tr className="table-secondary text-center">
                    <th>SL</th>
                    <th>Name</th>
                    <th>Applied</th>
                    <th>Expected Salary</th>
                    <th>Profile</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((applicant, index) => (
                    <tr key={applicant._id} className="">
                      <td className=" text-center">{index + 1}</td>
                      <td>{applicant.name}</td>
                      <td className=" text-center">{applicant.applicationDate}</td>
                      <td className=" text-center">{applicant.expectedSalary}</td>
                      <td className=" text-center">
                        <Link to="/dashboard/applicantProfile">
                          <button
                            className="fw-bold btn-sm btn btn-primary "
                            onClick={() => setApplicatShow(applicant.email)}
                          >
                            Show Profile
                          </button>
                        </Link>
                      </td>
                      {/* <td>
                  <button
                    className=" btn btn-sm  btn-outline-danger"
                    onClick={() => handleStatus(applicant)}
                  >
                    Status
                  </button>
                </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
      }
    </div>
  );
};

export default ApplicantList;

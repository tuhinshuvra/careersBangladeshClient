import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

const ApplicantList = () => {
  const { jobId, setApplicatShow } = useContext(AuthContext);
  const [applicants, setApplicants] = useState([]);

  console.log("ApplicantList jobId :", applicants);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobapplicant?jobId=${jobId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApplicants(data);
        console.log(" ApplicantList ApplicantList :", data);
      });
  }, [jobId]);


  return (
    <div>
      <h2 className="text-center font-bold my-3">All Applicant</h2>
      <div className="overflow-x-auto">
        {/* <table className="table w-full"> */}
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="table-secondary">
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
                <td>{index + 1}</td>
                <td>{applicant.name}</td>
                <td>{applicant.applicationDate}</td>
                <td>{applicant.expectedSalary}</td>
                <td>
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
    </div>
  );
};

export default ApplicantList;

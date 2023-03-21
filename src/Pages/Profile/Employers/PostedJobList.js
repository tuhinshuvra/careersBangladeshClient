import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import ApplicantList from "./ApplicantList";

const PostedJobList = () => {
  const { user } = useContext(AuthContext);
  // const [users, setUsers] = useState([]);
  const { setJobId } = useContext(AuthContext);

  const email = user.email;

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const respone = await fetch(
        `${process.env.REACT_APP_CABD_server_address}/postedjob?email=${email}`
      );
      const data = respone.json();
      return data;
    },
  });

  const handleJobsUpdate = (job) => {
    //     console.log("Selected to Update Job : ", job._id)
  };

  return (
    <div>
      <h2 className=" text-center font-bold my-3">Posted Job List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="">
              <th>SL</th>
              <th>Title</th>
              <th>Organization</th>
              <th>Posted</th>
              <th>Deadline</th>
              <th>All Applicant</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id} className="">
                <td>{index + 1}</td>
                <td>
                  <Link
                    className=" text-decoration-none text-primary "
                    to={`/dashboard/jobs/${job._id}`}
                  >
                    <b>{job.jobTitle}</b>
                  </Link>
                </td>
                <td>{job.organization}</td>
                <td>{job.postDate}</td> 
                <td>{job.deadLine}</td>
                <td>
                  <Link to={`/dashboard/applicantList`}>
                    <button
                      className=" fw-bold btn-sm btn btn-primary mx-1"
                      onClick={() => setJobId(job._id)}
                    >
                      ApplicatList
                    </button>
                  </Link>
                </td>
                <td>
                     <Link className="fw-bold btn-sm btn btn-primary mx-1" to={`/dashboard/jobUpdate/${job._id}`}>
                      Update
                    </Link>

                  {/* <button className=' btn btn-sm  btn-outline-danger'
                                            onClick={() => handleDelete(job)}
                                        >Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobList;

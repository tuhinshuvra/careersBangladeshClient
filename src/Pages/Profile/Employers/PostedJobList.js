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

  const jobNum = jobs.length;
  console.log("Posted Job Num : ", jobNum);


  return (
    <div>
      {
        jobNum === 0 ?
          <div className=" text-center my-5">
            <h2 className=" fw-bold">You have not posted any jobs yet!</h2>
          </div>
          :

          <div>
            <div className=" text-center fw-bold my-3">
              <h3 className="">You Have Posted {jobNum} jobs</h3>
              <h4 className="">Your Posted Job List</h4>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-hover  table-bordered">
                <thead>
                  <tr className="table-secondary text-center">
                    <th>SL</th>
                    <th>Title</th>
                    <th>Organization</th>
                    <th>Posted</th>
                    <th>Deadline</th>
                    <th>All Applicant</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={job._id} className="">
                      <td className=" text-center">{index + 1}</td>
                      <td>
                        <Link
                          className=" text-decoration-none text-primary "
                          to={`/jobDetails/${job._id}`}
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
      }
    </div>
  );
};

export default PostedJobList;

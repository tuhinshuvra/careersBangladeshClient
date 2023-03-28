import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";

const AppliedJobList = () => {
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobseekerapply?email=${user?.email}`,
      {
        headers: {},
      }
    )
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [user?.email]);

  console.log("applications : ", applications);

  return (
    <div>
      <h2 className=" text-center font-bold my-3 ">Applied Job List</h2>
      <div className="overflow-x-auto">
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="text-center table-secondary">
              <th>SL</th>
              <th>Position</th>
              <th>Organizaiton</th>
              <th>Applied</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr>
                <td className=" text-center">{index + 1}</td>
                <td>{app.jobTitle}</td>
                <td>{app.organization}</td>
                <td className=" text-center">{app.applicationDate}</td>
                <td className=" fw-bold text-center">
                  <Link
                    className=" text-decoration-none"
                    to={`/jobDetails/${app.jobId}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobList;

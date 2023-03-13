import React from "react";
import { Link } from "react-router-dom";
import "./NewJobs.css";

const NewJobsDisplay = ({ job }) => {
  const { _id, jobTitle, companyLogo, organization } = job;

  return (
    <div>
      <div className="card animate_top ">
        <Link
          to={`/dashboard/jobs/${_id}`}
          className=" fw-bold text-decoration-none  category_link"
        >
          <div className=" d-flex">
            <img className="hotjobImg p-1" src={companyLogo} alt="" />

            <div className="card-body">
              <p>{organization} </p>
              {/* to={`/dashboard/jobs/${job._id}`} */}
              <p>&#10148;{jobTitle} </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewJobsDisplay;

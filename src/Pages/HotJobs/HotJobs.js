import React, { useContext, useEffect, useState } from "react";
import HotJobsDisplay from "./HotJobsDisplay";
import { FaHotjar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import "./HotJobs.css";
import { AuthContext } from "../Authentication/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const HotJobs = () => {
  
  const { user, loading, setLoading } = useContext(AuthContext);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  if(loading){
    <Loader></Loader>
  }

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const respone = await fetch(`${process.env.REACT_APP_CABD_server_address}/jobs`);
      const data = respone.json();        
      return data;
    },
  });

  let sliceJobs = jobs.slice(0, 9);

  return (
    <div className=" hotjob_bg ">
      <h2 className="my-5 careers_title_one">
        <FaHotjar className="mx-1"></FaHotjar>HOT JOBS
      </h2>

      <div className=" px-1 px-md-2 px-lg-3">
        <div className="hot_job_category">
          {!showAll &&
            sliceJobs.map((job) => (
              <HotJobsDisplay key={job._id} job={job}></HotJobsDisplay>
            ))}

          {showAll &&
            jobs.map((job) => (
              <HotJobsDisplay key={job._id} job={job}></HotJobsDisplay>
            ))}
        </div>
      </div>

      <div className=" text-center my-3">
        {!showAll && (
          <button onClick={() => handleShowAll()} className=" custom_btn ">
            View More
          </button>
        )}

        {showAll && (
          <button onClick={() => handleShowLess()} className=" custom_btn ">
            View Less
          </button>
        )}
      </div>
    </div>
  );
};
export default HotJobs;

import React, { useContext, useEffect, useState } from "react";
import JobCategoryDisplay from "./JobCategoryDisplay";
import { FaCompass, FaCompressArrowsAlt, FaHotjar } from "react-icons/fa";
import { AuthContext } from "../Authentication/AuthProvider";
import Loader from "../Shared/Loader/Loader";
import "./JobCategory.css";

const JobCategory = () => {

  const { user, loading, setLoading } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const sliceCategories = categories.slice(0, 16);

  if (loading) {
    <Loader></Loader>
  }

  const handleShowAllCategories = () => {
    setShowAll(true);
  };

  const handleShowLessCategories = () => {
    setShowAll(false);
  };

  useEffect(() => {
    // fetch('job-categories.json')
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobCategories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
        // console.log("Product Data:", data)
      });
  }, [setLoading]);

  return (
    <div className="category_bg">
      <h2 className=" careers_title_one"><FaCompressArrowsAlt className=""></FaCompressArrowsAlt>JOB CATEGORIES</h2>
      <div className=" job-category m-4">
        {!showAll &&
          sliceCategories.map((category) => (
            <JobCategoryDisplay
              key={category._id}
              category={category}
            ></JobCategoryDisplay>
          ))}

        {showAll &&
          categories.map((category) => (
            <JobCategoryDisplay
              key={category._id}
              category={category}
            ></JobCategoryDisplay>
          ))}
      </div>
      <div className=" text-center my-3">
        {!showAll && (
          <button onClick={() => handleShowAllCategories()} className="custom_btn">View More</button>
        )}

        {showAll && (
          <button onClick={() => handleShowLessCategories()} className="custom_btn">View Less</button>
        )}
      </div>
    </div>
  );
};

export default JobCategory;

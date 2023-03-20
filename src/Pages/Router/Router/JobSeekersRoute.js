import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useJobSeeker from "../../../hooks/useJobSeeker";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const JobSeekerRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  const [isJobSeeker, isJobSeekerLoading] = useJobSeeker(user?.email);
  const location = useLocation();

  if (loading || isJobSeekerLoading) {
    return  <Loader></Loader>
  }
  if (isJobSeeker) {
    return children;
  }

  console.log("I am jobSeeker Route");

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  
};

export default  JobSeekerRoute;

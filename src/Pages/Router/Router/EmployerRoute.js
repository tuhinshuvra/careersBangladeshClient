import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useEmployer from "../../../hooks/useEmployer";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const EmployerRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  const [isEmployer, isEmployerLoading] = useEmployer(user?.email);
  const location = useLocation();

  if (loading || isEmployerLoading) {
    return  <Loader></Loader>
  }
  if (user && isEmployer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  
};

export default EmployerRoute;

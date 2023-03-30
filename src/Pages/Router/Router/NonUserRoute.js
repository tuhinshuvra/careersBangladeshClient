import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const NonUserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  return children;

};

export default NonUserRoute;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useEmployer from "../../../hooks/useEmployer";
import useJobSeeker from "../../../hooks/useJobSeeker";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const NonUserRoute = ({children}) => {

  const { user,loading } = useContext(AuthContext);
  const [isJobSeeker, isJobSeekerLoading] = useJobSeeker(user?.email);
  const [isEmployer, isEmployerLoading] = useEmployer(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  // const location = useLocation();
  console.log("I am non user Route");

  if (loading || isJobSeekerLoading||isEmployerLoading || isAdminLoading ) {
    return  <Loader></Loader>
  }

  if(isAdmin||isEmployer||isJobSeeker){
    return children;
  }
  
  // if(!isJobSeeker){
    return children;
  // }


  // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  
};

export default  NonUserRoute;

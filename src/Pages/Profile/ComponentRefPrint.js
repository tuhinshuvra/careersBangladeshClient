import React, { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const ComponentRefPrint = () => {
  const { user, jobSeekersData, setJobSeekersData } = useContext(AuthContext);
  return <div></div>;
};

export default ComponentRefPrint;

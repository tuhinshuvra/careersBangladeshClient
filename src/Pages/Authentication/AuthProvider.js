import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applicantShow, setApplicatShow] = useState(true);
  const [jobId, setJobId] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchOrganizationData, setSearchOrganizationData] = useState("");
  const [searchLocationtionData, setSearchLocationtionData] = useState("");
  const [jobSeekersData, setJobSeekersData] = useState([]);
  const [showPersonalData, setShowPersonalData] = useState(true);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("reviewToken");
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Current logged in user:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    jobId,
    setJobId,
    applicantShow,
    setApplicatShow,
    searchData,
    setSearchData,
    searchOrganizationData,
    setSearchOrganizationData,
    searchLocationtionData,
    setSearchLocationtionData,
    loading,
    setLoading,
    createUser,
    updateUser,
    signIn,
    logOut,
    jobSeekersData,
    setJobSeekersData,
    showPersonalData,
    setShowPersonalData,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

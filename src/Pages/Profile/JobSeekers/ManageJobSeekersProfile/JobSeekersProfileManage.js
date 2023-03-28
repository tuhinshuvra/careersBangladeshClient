import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Loader from "../../../Shared/Loader/Loader";
import "../JobSeekersProfile.css";

const JobSeekersProfileManage = () => {

  useEffect(() => {
    document.getElementById("personal").click();
  }, []);


  const navigation = useNavigation();
  const navigate = useNavigate;

  if (navigation.state === "loading") {
    return <Loader></Loader>
  }


  return (
    <div >
      <h2 className=" text-center fw-bold my-4">Manage Profile</h2>


      <div className=" d-flex justify-content-center">
        <div className="btn-group" role="group" aria-label="Employee profile button group" >


          <button id="personal" type="button" className="btn  btn-outline-secondary">
            <Link to={`/dashboard/jobSeekersPersonalDetails`} className=" text-decoration-none activ" >Personal</Link>
          </button>

          <button type="button" className="btn btn-outline-secondary">
            <Link to={`/dashboard/jobSeekerAcademicsAndTraining`} className=" text-decoration-none" >Education/Training</Link>
          </button>

          <button type="button" className="btn btn-outline-secondary">
            <Link to={`/dashboard/jobSeekerCareersAndSkill`} className=" text-decoration-none" >Career and Skilll</Link>
          </button>

          <button type="button" className="btn btn-outline-secondary">
            <Link to={`/dashboard/jobSeekerExperiences`} className=" text-decoration-none">Experience</Link>
          </button>

          <button type="button" className="btn btn-outline-secondary">
            <Link to={`/dashboard/jobSeekerLanguagesAndReferences`} className=" text-decoration-none">Language and Reference</Link>
          </button>

        </div>
      </div>
    </div >
  );
};

export default JobSeekersProfileManage;

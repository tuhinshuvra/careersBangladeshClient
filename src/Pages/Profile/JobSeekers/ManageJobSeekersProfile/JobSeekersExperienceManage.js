import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import "../../JobSeekers/JobSeekersProfile.css";
import JobSeekersProfileManage from "./JobSeekersProfileManage";

const JobSeekersExperienceManage = () => {
  const storedData = useLoaderData();
  const [experienceData, setExperienceData] = useState(storedData);

  // console.log("Job Seeker StoredData : ", storedData);

  // const navigate = useNavigate();

  const handleUpdateExperiencesDoc = (event) => {
    event.preventDefault();

    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobSeekersExperiences/${storedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(experienceData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Updatd Data: ", data);
        if (data.modifiedCount > 0) {
          toast.success("Data Updated Successfully.");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...experienceData };
    newData[field] = value;
    setExperienceData(newData);
  };

  return (
    <div>
      <JobSeekersProfileManage></JobSeekersProfileManage>
      <h4 className=" text-center fw-bold my-3">Experience Data</h4>

      <form onSubmit={handleUpdateExperiencesDoc}>
        <div className=" d-flex justify-content-between">
          <h5 className="label-text text-md fw-bold">Experience One</h5>
          {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p> */}
        </div>

        <div className=" row">
          <div className=" col-md-6 mb-3">
            <span className="label-text text-md fw-bold">Company Name</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expOneCompanayName}
                name="expOneCompanayName"
                className="input form-control "
                id="expOneCompanayName"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold">Company Business</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expOneCompanayBusiness}
                name="expOneCompanayBusiness"
                className="input form-control "
                id="expOneCompanayBusiness"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Designation</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expOneDesignation}
                name="expOneDesignation"
                className="input form-control "
                id="expOneDesignation"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Departemnt</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expOneDepartment}
                name="expOneDepartment"
                className="input form-control "
                id="expOneDepartment"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">
              Employment Period
            </span>
            <div className=" d-flex ">
              <div className="col-md-5">
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.expOneFrom}
                  name="expOneFrom"
                  className="input form-control "
                  id="expOneFrom"
                  type="date"
                />
              </div>

              <b className=" mx-2">To</b>

              <div className="col-md-5">
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.expOneTo}
                  name="expOneTo"
                  className="input form-control "
                  id="expOneTo"
                  type="date"
                />
              </div>
            </div>

            <div className="form-check">
              <input
                onChange={handleInputChange}
                defaultValue={storedData.currentlyWorkHere}
                className="form-check-input"
                type="checkbox"
                value="currentlyWorkHere"
                id="exprOneWorkPeriod"
              />
              <label className="form-check-label" htmlFor="exprOneWorkPeriod">
                Currently working here
              </label>
            </div>
          </div>

          <div className="  mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Responsibilities
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprOneResp}
                name="exprOneResp"
                className="input form-control "
                id="exprOneResp"
                type="text"
              />
            </div>
          </div>

          <div className="  mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Expertise Area
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprOneExpertise}
                name="exprOneExpertise"
                className="input form-control "
                id="exprOneExpertise"
                type="text"
              />
            </div>
          </div>

          <div className="   mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Company Address
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprCompOneAddress}
                name="exprCompOneAddress"
                className="input form-control "
                id="exprCompOneAddress"
                type="text"
              />
            </div>
          </div>
        </div>

        <h5 className="label-text text-md fw-bold  mt-3 mb-2">
          Experience Two
        </h5>
        <div className=" row">
          <div className=" col-md-6 mb-3">
            <span className="label-text text-md fw-bold">Company Name</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expTwoCompanayName}
                name="expTwoCompanayName"
                className="input form-control "
                id="expTwoCompanayName"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold">Company Business</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expTwoCompanayBusiness}
                name="expTwoCompanayBusiness"
                className="input form-control "
                id="expTwoCompanayBusiness"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Designation</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expTwoDesignation}
                name="expTwoDesignation"
                className="input form-control "
                id="expTwoDesignation"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Departemnt</span>
            <div>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.expTwoDepartment}
                name="expTwoDepartment"
                className="input form-control "
                id="expTwoDepartment"
                type="text"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">
              Employment Period
            </span>
            <div className=" d-flex ">
              <div className="col-md-5">
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.expTwoFrom}
                  name="expTwoFrom"
                  className="input form-control "
                  id="expTwoFrom"
                  type="date"
                />
              </div>

              <b className=" mx-2">To</b>

              <div className="col-md-5">
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.expTwoTo}
                  name="expTwoTo"
                  className="input form-control "
                  id="expTwoTo"
                  type="date"
                />
              </div>
            </div>

            <div className="form-check">
              <input
                onChange={handleInputChange}
                defaultValue={storedData.exprTwoWorkPeriod}
                className="form-check-input"
                name="exprTwoWorkPeriod"
                id="exprTwoWorkPeriod"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="exprTwoWorkPeriod">
                Currently working here
              </label>
            </div>
          </div>

          <div className="  mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Responsibilities
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprTwoResp}
                name="exprTwoResp"
                className="input form-control "
                id="exprTwoResp"
                type="text"
                placeholder="Enter Responsibilities"
              />
            </div>
          </div>

          <div className="  mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Expertise Area
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprTwoExpertise}
                name="exprTwoExpertise"
                className="input form-control "
                id="exprTwoExpertise"
                type="text"
              />
            </div>
          </div>

          <div className="   mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Company Address
            </span>
            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.exprCompTwoAddress}
                name="exprCompTwoAddress"
                className="input form-control"
                id="exprCompTwoAddress"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-between my-lg-5">
          <button className="btn btn-warning fw-bold">Cancel</button>
          <button type="submit" name="submit" className="custom_btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobSeekersExperienceManage;

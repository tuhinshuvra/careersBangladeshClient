import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import EmployeesProfileEntry from "./JobSeekersProfileEntry";
import "../../JobSeekers/JobSeekersProfile.css";

const EmployeesExperienceEntry = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleJobSeekerProfile = (data) => {
    const jobseekerProfile = {
      email: user.email,
      name: user.displayName,

      haveExperience: data.haveExperience,
      expOneCompanayName: data.expOneCompanayName,
      expOneCompanayBusiness: data.expOneCompanayBusiness,
      expOneDesignation: data.expOneDesignation,
      expOneDepartment: data.expOneDepartment,
      expOneFrom: data.expOneFrom,
      expOneTo: data.expOneTo,
      exprOneWorkPeriod: data.exprOneWorkPeriod,
      exprOneResp: data.exprOneResp,
      exprOneExpertise: data.exprOneExpertise,
      exprCompOneAddress: data.exprCompOneAddress,

      expTwoCompanayName: data.expTwoCompanayName,
      expTwoCompanayBusiness: data.expTwoCompanayBusiness,
      expTwoDesignation: data.expTwoDesignation,
      expTwoDepartment: data.expTwoDepartment,
      expTwoFrom: data.expTwoFrom,
      expTwoTo: data.expTwoTo,
      exprTwoWorkPeriod: data.exprTwoWorkPeriod,
      exprTwoResp: data.exprTwoResp,
      exprTwoExpertise: data.exprTwoExpertise,
      exprCompTwoAddress: data.exprCompTwoAddress,
    };
    // console.log("Job Seeker Data :", data);

    fetch(`${process.env.REACT_APP_CABD_server_address}/employeesExperiences`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobseekerProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success(
            `${user.displayName} Experience Data Saved Successfully`
          );
          navigate("/dashboard/jobSeekerProfileEntry");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <EmployeesProfileEntry></EmployeesProfileEntry>
      <h2 className=" text-center fw-bold my-4">Experience Data</h2>

      {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
      <form onSubmit={handleSubmit(handleJobSeekerProfile)}>
        <div className=" col-3 my-4  ">
          <span className="label-text text-md fw-bold ">
            {" "}
            <span className="star">&#x2605; </span>Have Experience
          </span>
          <select
            {...register("haveExperience")}
            name="haveExperience"
            className="input form-control "
            id="haveExperience"
          >
            <option>-Select Experience-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className=" d-flex justify-content-between">
          <h5 className="label-text text-md fw-bold">Experience One</h5>
          {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p> */}
        </div>

        <div className=" row">
          <div className=" col-md-6 mb-3">
            <span className="label-text text-md fw-bold">Company Name</span>
            <div>
              <input
                {...register("expOneCompanayName")}
                name="expOneCompanayName"
                className="input form-control "
                id="expOneCompanayName"
                type="text"
                placeholder="Enter data"
              />
            </div>
          </div>

          <div className=" col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold">Company Business</span>
            <div>
              <input
                {...register("expOneCompanayBusiness")}
                name="expOneCompanayBusiness"
                className="input form-control "
                id="expOneCompanayBusiness"
                type="text"
                placeholder="Enter data"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Designation</span>
            <div>
              <input
                {...register("expOneDesignation")}
                name="expOneDesignation"
                className="input form-control "
                id="expOneDesignation"
                type="text"
                placeholder="Enter data"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Departemnt</span>
            <div>
              <input
                {...register("expOneDepartment")}
                name="expOneDepartment"
                className="input form-control "
                id="expOneDepartment"
                type="text"
                placeholder="Enter data"
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
                  {...register("expOneFrom")}
                  name="expOneFrom"
                  className="input form-control "
                  id="expOneFrom"
                  type="date"
                />
              </div>

              <b className=" mx-2">To</b>

              <div className="col-md-5">
                <input
                  {...register("expOneTo")}
                  name="expOneTo"
                  className="input form-control "
                  id="expOneTo"
                  type="date"
                />
              </div>
            </div>

            <div className="form-check">
              <input
                {...register("exprOneWorkPeriod")}
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
                {...register("exprOneResp")}
                name="exprOneResp"
                className="input form-control "
                id="exprOneResp"
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
                {...register("exprOneExpertise")}
                name="exprOneExpertise"
                className="input form-control "
                id="exprOneExpertise"
                type="text"
                placeholder="Enter Expertise"
              />
            </div>
          </div>

          <div className="   mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Company Address
            </span>
            <div>
              <textarea
                {...register("exprCompOneAddress")}
                name="exprCompOneAddress"
                className="input form-control "
                id="exprCompOneAddress"
                type="text"
                placeholder="Enter Company Address"
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
                {...register("expTwoCompanayName")}
                name="expTwoCompanayName"
                className="input form-control "
                id="expTwoCompanayName"
                type="text"
                placeholder="Enter Company Name"
              />
            </div>
          </div>

          <div className=" col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold">Company Business</span>
            <div>
              <input
                {...register("expTwoCompanayBusiness")}
                name="expTwoCompanayBusiness"
                className="input form-control "
                id="expTwoCompanayBusiness"
                type="text"
                placeholder="Enter Company Business"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Designation</span>
            <div>
              <input
                {...register("expTwoDesignation")}
                name="expTwoDesignation"
                className="input form-control "
                id="expTwoDesignation"
                type="text"
                placeholder="Enter Designation"
              />
            </div>
          </div>

          <div className=" col-md-4 mb-3 ">
            <span className="label-text text-md fw-bold">Departemnt</span>
            <div>
              <input
                {...register("expTwoDepartment")}
                name="expTwoDepartment"
                className="input form-control "
                id="expTwoDepartment"
                type="text"
                placeholder="Enter data"
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
                  {...register("expTwoFrom")}
                  name="expTwoFrom"
                  className="input form-control "
                  id="expTwoFrom"
                  type="date"
                />
              </div>

              <b className=" mx-2">To</b>

              <div className="col-md-5">
                <input
                  {...register("expTwoTo")}
                  name="expTwoTo"
                  className="input form-control "
                  id="expTwoTo"
                  type="date"
                />
              </div>
            </div>

            <div className="form-check">
              <input
                {...register("exprTwoWorkPeriod")}
                className="form-check-input"
                type="checkbox"
                value="exprTwoWorkPeriod"
                id="exprTwoWorkPeriod"
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
                {...register("exprTwoResp")}
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
                {...register("exprTwoExpertise")}
                name="exprTwoExpertise"
                className="input form-control "
                id="exprTwoExpertise"
                type="text"
                placeholder="Enter Expertise"
              />
            </div>
          </div>

          <div className="   mb-3 ">
            <span className="label-text text-md fw-bold mt-2">
              Company Address
            </span>
            <div>
              <textarea
                {...register("exprCompTwoAddress")}
                name="exprCompTwoAddress"
                className="input form-control"
                id="exprCompTwoAddress"
                type="text"
                placeholder="Enter Company Address"
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

export default EmployeesExperienceEntry;

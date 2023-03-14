import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import JobSeekersProfileEntry from "./JobSeekersProfileEntry";
import "../JobSeekersProfile.css";

const JobSeekersCareerAndSkillEntry = () => {
  const { user } = useContext(AuthContext);

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_CABD_server_address}/jobCategories`
      );
      const data = await res.json();
      return data;
    },
  });

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

      lookingFor: data.lookingFor,
      availbaleFor: data.availbaleFor,
      presentSalary: data.presentSalary,
      expectedSalary: data.expectedSalary,
      category: data.category,
      preferredLocations: data.preferredLocations,
      preferredOrg: data.preferredOrg,

      skillOne: data.skillOne,
      skillTwo: data.skillTwo,
      skillThree: data.skillThree,
      skillFour: data.skillFour,
      skillFive: data.skillFive,
      skillSix: data.skillSix,
      skillSeven: data.skillSeven,
      skillEight: data.skillEight,
      skillNine: data.skillNine,
      skillTen: data.skillTen,
      skillLearnedBy: data.skillLearnedBy,
      skillDesciption: data.skillDesciption,
      specialQualification: data.specialQualification,
    };
    // console.log("Job Seeker Data :", data);

    fetch(`${process.env.REACT_APP_CABD_server_address}/employeesCareers`, {
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
            `${user.displayName} Career and Skill Data Saved Successfully`
          );
          navigate("/dashboard/jobSeekerProfileEntry");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div>
        <JobSeekersProfileEntry></JobSeekersProfileEntry>
      </div>

      <h2 className=" text-center fw-bold my-4">
        Employees Careers and Skill Data
      </h2>

      {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
      <form onSubmit={handleSubmit(handleJobSeekerProfile)}>
        <div className=" d-flex justify-content-between my-2">
          <h4 className="label-text text-md fw-bold">
            Career and Application Information
          </h4>
          <p className=" float-end ">
            {" "}
            <span className="star">&#x2605; </span>{" "}
            <b>(Red Star) denotes must be filled</b>
          </p>
        </div>

        <div className="row  mb-3 ">
          <div className="col-md-3 mb-3 mb-3">
            <span className="label-text text-md fw-bold  ">
              Looking for (Job Level)
            </span>
            <select
              {...register("lookingFor")}
              name="lookingFor"
              id="lookingFor"
              className="form-select"
            >
              <option>-Select Job Level-</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Top Level">Top Level</option>
            </select>
          </div>
          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">
              Available for (Job Nature)
            </span>
            <select
              {...register("availbaleFor")}
              name="availbaleFor"
              className="input form-control "
              id="availbaleFor"
            >
              <option>-Select Job Nature-</option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Contract">Contract</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">Present Salary</span>
            <div className=" d-flex">
              <input
                {...register("presentSalary")}
                name="presentSalary"
                className="input form-control "
                id="presentSalary"
                type="text"
                placeholder="Ex. 50000"
              />
              <p>TK/Month</p>
            </div>
          </div>

          <div className="col-md-3 mb-3 mb-3">
            <span className="label-text text-md fw-bold  ">
              Expected Salary
            </span>
            <div className=" d-flex justify-content-center align-items-center">
              <input
                {...register("expectedSalary")}
                name="expectedSalary"
                className="input form-control "
                id="expectedSalary"
                type="text"
                placeholder="Enter expected salary"
              />
              <p>TK/Month</p>
            </div>
          </div>

          <div className="col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Preferred Job Category
            </span>
            <select
              {...register("category")}
              name="category"
              type="text"
              className="form-select"
            >
              <option>-Select Job Category-</option>
              {categories &&
                categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Preferred Locations
            </span>
            <input
              {...register("preferredLocations")}
              name="preferredLocations"
              className="input form-control "
              id="preferredLocations"
              type="text"
              placeholder="Enter data here"
            />
          </div>
          <div className=" ">
            <span className="label-text text-md fw-bold  ">
              Preferred Organization Type
            </span>
            <input
              {...register("preferredOrg")}
              name="preferredOrg"
              className="input form-control "
              id="preferredOrg"
              type="text"
              placeholder="Enter Preferred Organization"
            />
          </div>
        </div>

        {/* Specialization Section start */}
        <h4 className="label-text text-md fw-bold text-center mt-5  ">
          Specialization
        </h4>
        <h5 className="label-text text-md fw-bold text-center   mb-2">
          Skill Section
        </h5>

        <div className="row">
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill One</span>
            <input
              {...register("skillOne")}
              name="skillOne"
              className="input form-control "
              id="skillOne"
              type="text"
              placeholder="Enter Skil"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Two</span>
            <input
              {...register("skillTwo")}
              name="skillTwo"
              className="input form-control "
              id="skillTwo"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Three</span>
            <input
              {...register("skillThree")}
              name="skillThree"
              className="input form-control "
              id="skillThree"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Four</span>
            <input
              {...register("skillFour")}
              name="skillFour"
              className="input form-control "
              id="skillFour"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Five</span>
            <input
              {...register("skillFive")}
              name="skillFive"
              className="input form-control "
              id="skillFive"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Six</span>
            <input
              {...register("skillSix")}
              name="skillSix"
              className="input form-control "
              id="skillSix"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Seven</span>
            <input
              {...register("skillSeven")}
              name="skillSeven"
              className="input form-control "
              id="skillSeven"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Eight</span>
            <input
              {...register("skillEight")}
              name="skillEight"
              className="input form-control "
              id="skillEight"
              type="text"
              placeholder="Enter Skill"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Nine</span>
            <input
              {...register("skillNine")}
              name="skillNine"
              className="input form-control "
              id="skillNine"
              type="text"
              placeholder="Enter Skill"
            />
          </div>

          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Ten</span>
            <input
              {...register("skillTen")}
              name="skillTen"
              className="input form-control "
              id="skillTen"
              type="text"
              placeholder="Enter Skill"
            />
          </div>

          <div className=" col-md-6 mb-3">
            <span className="label-text text-md fw-bold  ">
              Skill learned by
            </span>
            <input
              {...register("skillLearnedBy")}
              name="skillLearnedBy"
              className="input form-control "
              id="skillLearnedBy"
              type="text"
              placeholder="Enter Skill Learned By"
            />
          </div>

          <div className="">
            <span className="label-text text-md fw-bold">
              Skill Description
            </span>
            <textarea
              {...register("skillDesciption")}
              name="skillDesciption"
              className="input form-control "
              id="skillDesciption"
              type="text"
              placeholder="Enter skill desciption"
            />
          </div>

          <div className="">
            <span className="label-text text-md fw-bold">
              Special Qualification
            </span>
            <textarea
              {...register("specialQualification")}
              name="specialQualification"
              className="input form-control "
              id="specialQualification"
              type="text"
              placeholder="Enter special qualification"
            />
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

export default JobSeekersCareerAndSkillEntry;

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Authentication/AuthProvider";
import JobSeekersProfileManage from "./JobSeekersProfileManage";
import "../../JobSeekers/JobSeekersProfile.css";
import Loader from "../../../Shared/Loader/Loader";

const JobSeekersCareerAndSkillManage = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [storedData, setStoredData] = useState([]);


  const email = user?.email;

  if (loading) {
    <Loader></Loader>
  }


  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersCareers/${email}`)
    .then(res => res.json())
    .then(data => {
      console.log("jobSeekersCareers Data", data);
      setStoredData(data);
      setLoading(false)
    })
  }, [email, setLoading])


  // console.log("Careers and Skill storedData :", storedData);

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

  if (loading) {
    <Loader></Loader>
  }


  const handleUpdateCareersDoc = (event) => {
    event.preventDefault();

    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobseekersCareersSkill/${storedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(storedData),
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

    const newData = { ...storedData };
    newData[field] = value;
    setStoredData(newData);
  };

  return (
    <div>
      <JobSeekersProfileManage></JobSeekersProfileManage>
      <h2 className=" text-center fw-bold my-3">
        Update Careers and Skill Data
      </h2>

      {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
      <form onSubmit={handleUpdateCareersDoc}>
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
            <span className="label-text text-md fw-bold">
              Looking for (Job Level)
            </span>
            <select
              onChange={handleInputChange}
              name="lookingFor"
              id="lookingFor"
              className="form-select"
            >
              <option defaultValue={storedData.passYearOne}>
                {storedData.lookingFor}
              </option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Top Level">Top Level</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <span className="label-text text-md fw-bold">
              Available for (Job Nature)
            </span>
            <select
              onChange={handleInputChange}
              name="availbaleFor"
              className="input form-control "
              id="availbaleFor"
            >
              <option defaultValue={storedData.passYearOne}>
                {storedData.availbaleFor}
              </option>
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
                onChange={handleInputChange}
                defaultValue={storedData.presentSalary}
                name="presentSalary"
                className="input form-control "
                id="presentSalary"
                type="text"
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
                onChange={handleInputChange}
                defaultValue={storedData.expectedSalary}
                name="expectedSalary"
                className="input form-control "
                id="expectedSalary"
                type="text"
              />
              <p>TK/Month</p>
            </div>
          </div>

          <div className="col-md-6 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Preferred Job Category
            </span>
            <select
              onChange={handleInputChange}
              name="category"
              type="text"
              className="form-select"
            >
              <option defaultValue={storedData.category}>
                {storedData.category}
              </option>
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
              onChange={handleInputChange}
              defaultValue={storedData.preferredLocations}
              name="preferredLocations"
              className="input form-control "
              id="preferredLocations"
              type="text"
            />
          </div>
          <div className=" ">
            <span className="label-text text-md fw-bold  ">
              Preferred Organization Type
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.preferredOrg}
              name="preferredOrg"
              className="input form-control "
              id="preferredOrg"
              type="text"
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
              onChange={handleInputChange}
              defaultValue={storedData.skillOne}
              name="skillOne"
              className="input form-control "
              id="skillOne"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Two</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillTwo}
              name="skillTwo"
              className="input form-control "
              id="skillTwo"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Three</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillThree}
              name="skillThree"
              className="input form-control "
              id="skillThree"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Four</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillFour}
              name="skillFour"
              className="input form-control "
              id="skillFour"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Five</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillFive}
              name="skillFive"
              className="input form-control "
              id="skillFive"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Six</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillSix}
              name="skillSix"
              className="input form-control "
              id="skillSix"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Seven</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillSeven}
              name="skillSeven"
              className="input form-control "
              id="skillSeven"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold  ">Skill Eight</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillEight}
              name="skillEight"
              className="input form-control "
              id="skillEight"
              type="text"
            />
          </div>
          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold">Skill Nine</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillNine}
              name="skillNine"
              className="input form-control "
              id="skillNine"
              type="text"
            />
          </div>

          <div className=" col-md-3 mb-3">
            <span className="label-text text-md fw-bold">Skill Ten</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillTen}
              name="skillTen"
              className="input form-control "
              id="skillTen"
              type="text"
            />
          </div>

          <div className=" col-md-6 mb-3">
            <span className="label-text text-md fw-bold">Skill learned by</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.skillLearnedBy}
              name="skillLearnedBy"
              className="input form-control "
              id="skillLearnedBy"
              type="text"
            />
          </div>

          <div className="">
            <span className="label-text text-md fw-bold">
              Skill Description
            </span>
            <textarea
              onChange={handleInputChange}
              defaultValue={storedData.skillDesciption}
              name="skillDesciption"
              className="input form-control "
              id="skillDesciption"
              type="text"
              maxLength={250}
            />
          </div>

          <div className="">
            <span className="label-text text-md fw-bold">
              Special Qualification
            </span>
            <textarea
              onChange={handleInputChange}
              defaultValue={storedData.specialQualification}
              name="specialQualification"
              className="input form-control "
              id="specialQualification"
              type="text"
              maxLength={450}
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

export default JobSeekersCareerAndSkillManage;

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

const UpdatePostedJob = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const storedData = useLoaderData();

  // console.log("storedData :",storedData);

  // const {email,postersName,category,jobTitle,companyLogo,organization,
  //   orgaType,location,vacancies,education,experience,companySize,postDate,deadLine,
  //   applyStatus,employmentStatus,businessDescription,jobLevel,workPlace,jobContext,jobResponst,
  //   salaryFrom,salaryTo,yearlyBonus,salaryReview,status,others}=storedData;

  const [updatedData, setUpdatedData] = useState(storedData);

  // const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

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

  const jobPostDate = new Date().toJSON().slice(0, 10);


  console.log("Posted Job Updated Data :", updatedData);

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...updatedData };
    newData[field] = value;

    setUpdatedData(newData);
  }

  const handleJobUpdate = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_CABD_server_address}/postedJobUpdate/${storedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Updated Data : ", data);
        if (data.modifiedCount > 0) {
          toast.success("Job's Data Updated Successfully.");
        }
      });

    // console.log("I am handleJobUpdate clicked");
  }

  return (
    <div>
      <h2 className=" text-center fw-bold my-3">Update Job Information</h2>

      <form onSubmit={handleJobUpdate}>
        <div className=" my-3">
          <div className="d-flex justify-content-end">
            <div>
              <label className="label">
                <span className=" fw-bold me-lg-2 ">Job Status</span>
              </label>
              <select
                onChange={handleInputChange}
                name="status"
                id="status"
                className=" form-select"
              >
                <option defaultValue={storedData?.status}>{storedData?.status}</option>
                <option value={"Active"}>Active</option>
                <option value={"Inactive"}>Inactive</option>
                <option value={"Close"}>Close</option>
              </select>
            </div>
          </div>
        </div>
        <div className=" row">
          <div className=" col-md-6 my-2">
            <label className="label">
              <span className="label-text fw-bold">Company Name</span>{" "}
            </label>
            <input
              onChange={handleInputChange}
              name="organization"
              id="organization"
              className="input form-control"
              type="text"
              defaultValue={storedData?.organization}
            />
          </div>

          <div className=" col-md-3 my-2">
            <label htmlFor="company_logo">
              <b> Company Type</b>
            </label>
            <select
              onChange={handleInputChange}
              name="orgaType"
              id="orgaType"
              className="form-select"
            >
              <option defaultValue={storedData?.orgaType}>{storedData?.orgaType}</option>
              <option value="Government">Government</option>
              <option value="Semi Government">Semi Government</option>
              <option value="NGO">NGO</option>
              <option value="Private Firm">Private Firm</option>
              <option value="International Agencies">
                International Agencies
              </option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className=" col-md-3 my-2">
            <label className="label" htmlFor="company_logo">
              <span className="label-text fw-bold">Company Logo</span>{" "}
            </label>
            <input
              // onChange={handleInputChange}        
              name="company_logo"
              className="input form-control"
              id="company_logo"
              type="file"
            />
          </div>
        </div>

        <div className=" my-3">
          <label className="label" htmlFor="category">
            <span className="label-text fw-bold">Job Category</span>{" "}
          </label>
          <select
            onChange={handleInputChange}
            name="category"
            type="text"
            className="form-select"
          >
            <option defaultValue={storedData.category}>{storedData.category}</option>
            {categories &&
              categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
          </select>
        </div>



        <div className="row my-3">
          <div className=" col-md-6  ">
            <label className="label">
              <span className="label-text fw-bold">Job Title</span>{" "}
            </label>
            <input
              onChange={handleInputChange}
              name="jobTitle"
              id="jobTitle"
              className="input form-control"
              type="text"
              defaultValue={storedData?.jobTitle}
            />
          </div>

          <div className=" col-md-6">
            <label className="label">
              <span className="label-text fw-bold">Location</span>{" "}
            </label>
            <input
              onChange={handleInputChange}
              name="location"
              id="location"
              className="input form-control"
              type="text"
              defaultValue={storedData?.location}
            />
          </div>
        </div>



        <div className="row my-2">
          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Vacancies</span>{" "}
            </label>
            <input
              onChange={handleInputChange}
              name="vacancies"
              id="vacancies"
              className="input form-control"
              type="text"
              defaultValue={storedData?.vacancies}
            />
          </div>

          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Job Level</span>{" "}
            </label>
            <select
              onChange={handleInputChange}
              name="jobLevel"
              id="jobLevel"
              className="form-select"
            >
              <option defaultValue={storedData?.jobLevel}>{storedData?.jobLevel}</option>
              <option value={"Entry"}>Entry</option>
              <option value={"Mid"}>Mid</option>
              <option value={"Top"}>Top</option>
            </select>
          </div>

          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Work Place</span>{" "}
            </label>
            <select
              onChange={handleInputChange}
              name="workPlace"
              id="workPlace"
              className="form-select"
            >
              <option defaultValue={storedData?.workPlace}>{storedData?.workPlace}</option>
              <option value="Work at Office">Work at Office</option>
              <option value="Work from Home">Work from Home</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="row my-lg-4">
          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Employment Status</span>{" "}
            </label>
            <select
              onChange={handleInputChange}
              name="employmentStatus"
              id="employmentStatus"
              className=" form-select "
            >
              <option defaultValue={storedData?.employmentStatus}>{storedData?.employmentStatus}</option>
              <option value={"Full Time"}>Full Time</option>
              <option value={"Part Time"}>Part Time</option>
              <option value={"Contactual Time"}>Contactual Time</option>
              <option value={"Internship"}>Internship</option>
              <option value={"Freelance"}>Freelance</option>
            </select>
          </div>

          <div className="col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Dead Line</span>{" "}
            </label>
            <input
              onChange={handleInputChange}
              name="deadLine"
              id="deadLine"
              className="input form-control ms-1"
              type="date"
              defaultValue={storedData?.deadLine}
            />
          </div>

          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Apply Status</span>{" "}
            </label>
            <select
              onChange={handleInputChange}
              name="applyStatus"
              id="applyStatus"
              className=" form-select"
            >
              <option defaultValue={storedData?.applyStatus}>{storedData?.applyStatus}</option>
              <option value="Apply Online">Apply Online</option>
              <option value="email">Email</option>
              <option value="Hard Copy">Heard Copy</option>
              <option value="Interview">Walk in Interview</option>
            </select>
          </div>
        </div>
        <div className=" my-2 ">
          <label className="label">
            <span className="label-text fw-bold">Education Qualification</span>{" "}
          </label>
          <input
            onChange={handleInputChange}
            name="education"
            className="input form-control ms-1"
            id="education"
            type="text"
            defaultValue={storedData?.education}
          />
        </div>

        <div className="my-3">
          <label className="label">
            <span className="label-text fw-bold">Experience</span>{" "}
          </label>
          <input
            onChange={handleInputChange}
            name="experience"
            className="input form-control ms-1"
            id="experience"
            type="text"
            defaultValue={storedData?.experience}
          />
        </div>

        <div className=" my-lg-4">
          <label className="label">
            <span className=" fw-bold">
              Special Instruction for Job Seekers
            </span>
          </label>
          <div>
            <textarea
              onChange={handleInputChange}
              name="businessDescription"
              id="businessDescription"
              className="input form-control"
              type="text"
              maxLength={350}
              defaultValue={storedData?.businessDescription}
            />
          </div>
        </div>

        <div className="my-lg-2">
          <label className="label">
            <span className=" fw-bold me-lg-2 ">Job Context</span>
          </label>
          <textarea
            defaultValue={storedData?.jobContext}
            onChange={handleInputChange}
            name="jobContext"
            className="input form-control "
            id="jobContext"
            type="text"
            maxLength={250}
          />
        </div>

        <div className="my-lg-3">
          <label className="label">
            <span className=" fw-bold me-lg-2 ">Job responsibility</span>
          </label>
          <textarea
            onChange={handleInputChange}
            defaultValue={storedData?.jobResponst}
            name="jobResponst"
            className="input form-control "
            id="jobResponst"
            type="text"
            maxLength={350}
          />
        </div>

        <div className=" row my-lg-3">
          <div className=" col-lg-4">
            <label className="label">
              <span className=" fw-bold me-lg-2 ">Salary</span>
            </label>
            <div className="d-flex justify-content-between align-items-center">
              <input
                onChange={handleInputChange}
                defaultValue={storedData?.salaryFrom}
                name="salary_from"
                type="text"
                id="salary_from"
                className="input form-control"
              />
              <label className=" fw-bold mx-1">to</label>
              <input
                defaultValue={storedData?.salaryTo}
                name="salary_to"
                type="text"
                id="salary_to"
                className="input form-control"
              />
            </div>
          </div>

          <div className=" col-lg-4 ">
            <div>
              <label className="label">
                <span className=" fw-bold me-lg-2 ">Yearly Bonus</span>
              </label>
              <select
                onChange={handleInputChange}
                name="yearly_bonus"
                className=" form-select"
              >
                <option defaultValue={storedData?.yearlyBonus}>{storedData?.yearlyBonus}</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>

          <div className=" col-lg-4">
            <label className="label">
              <span className=" fw-bold me-lg-2 ">Salary Review</span>
            </label>
            <select
              onChange={handleInputChange}
              name="salary_review"
              className="form-select"
            >
              <option defaultValue={storedData?.salaryReview}>{storedData?.salaryReview}</option>
              <option value={"Yearly"}>Yearly</option>
              <option value={"Half Yearly"}>Half Yearly</option>
            </select>
          </div>
        </div>

        <div className="my-lg-2">
          <div className="">
            <label className="label">
              <span className=" fw-bold me-lg-2">Others Information</span>
            </label>
            <textarea
              onChange={handleInputChange}
              defaultValue={storedData?.others}
              name="others"
              className="input form-control "
              id="others"
              type="text"
              maxLength={450}
            />
          </div>
        </div>


        <div className=" d-flex justify-content-between my-lg-3">
          <button className="btn btn-warning fw-bold">Cancel</button>
          <button type="submit" name="submit" className="custom_btn">Save</button>
        </div>

      </form>
    </div>
  );
};

export default UpdatePostedJob;
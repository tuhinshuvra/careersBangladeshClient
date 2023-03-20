import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

const UpdatePostedJob = () => {
  const { user, loading, setLoading } = useContext(AuthContext);  
  const storedData=useLoaderData();

  console.log("storedData :",storedData);

  const {email,postersName,category,jobTitle,companyLogo,organization,
    orgaType,location,vacancies,education,experience,companySize,postDate,deadLine,
    applyStatus,employmentStatus,businessDescription,jobLevel,workPlace,jobContext,jobResponst,
    salaryFrom,salaryTo,yearlyBonus,salaryReview,status,others}=storedData;

  const [updatedData, setUpdatedData]=useState([]);

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



  

  const handleInputChange=(event)=>{
    const field= event.target.name;
    const value= event.target.value;
    const newData= {...updatedData};
    newData[field]=value;
    
    setUpdatedData(newData);
  }

  const handleJobUpdate=()=>{
    console.log("I am handleJobUpdate clicked");
  }

  return (
    <div>
      <h2 className=" text-center fw-bold my-3">Update Job Information</h2>

      <form onSubmit={handleJobUpdate}>
        <div className=" row">
          <div className=" col-md-6 my-2">
            <label className="label">
              <span className="label-text fw-bold">Company Name</span>{" "}
            </label>
            <input              
              defaultValue={storedData?.organization}
              name="organization"
              className="input form-control"
              id="organization"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className=" col-md-3 my-2">
            <label htmlFor="company_logo">
              <b> Company Type</b>
            </label>
            <select              
              name="orgaType"
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
                     
              name="company_logo"
              className="input form-control"
              id="company_logo"
              type="file"
            />
          </div>
        </div>
        
        <div>
          <label className="label" htmlFor="category">
            <span className="label-text fw-bold">Job Category</span>{" "}
          </label>
          <select            
            name="category"
            type="text"
            className="form-select"
          >
            {categories &&
              categories.map((category, index) => (
                <option key={index} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        

        <div className="row">
          <div className=" col-md-6 my-2 ">
            <label className="label">
              <span className="label-text fw-bold">Job Title</span>{" "}
            </label>
            <input  
            defaultValue={storedData?.jobTitle}            
              name="jobTitle"
              className="input form-control"
              id="jobTitle"
              type="text"
              placeholder="Enter Job Title"
            />
          </div>
          <div className=" col-md-6 my-2 ">
            <label className="label">
              <span className="label-text fw-bold">Location</span>{" "}
            </label>
            <input 
            defaultValue={storedData?.location}             
              name="location"
              className="input form-control"
              id="location"
              type="text"
            />
          </div>
        </div>

        

        <div className="row my-2">
          <div className=" col-lg-4">
          <label className="label">
              <span className="label-text fw-bold">Vacancies</span>{" "}
            </label>
            <input              
              name="vacancies"
              className="input form-control"
              id="vacancies"
              type="text"
              defaultValue={storedData?.vacancies}
            />
          </div>

          <div className=" col-lg-4">
          <label className="label">
              <span className="label-text fw-bold">Job Level</span>{" "}
            </label>
            <select              
              name="job_level"
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
              name="work_place"
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
              name="employment_status"
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
              defaultValue={storedData?.deadLine}               
                name="deadline"
                className="input form-control ms-1"
                id="deadline"
                type="date"
                
              />
          </div>

          <div className=" col-lg-4">
            <label className="label">
              <span className="label-text fw-bold">Dead Line</span>{" "}
            </label>
            <select
              name="apply_status"              
              className=" form-select"
            >
              <option  defaultValue={storedData?.applyStatus}>{storedData?.applyStatus}</option>
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
            defaultValue={storedData?.education}
            name="education"
            className="input form-control ms-1"
            id="education"
            type="text"
          />
        </div>

        <div className="my-2 ">
          <label className="label">
            <span className="label-text fw-bold">Experience</span>{" "}
          </label>
          <input            
            defaultValue={storedData?.experience}
            name="experience"
            className="input form-control ms-1"
            id="experience"
            type="text"
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
            defaultValue={storedData?.businessDescription}            
              name="business_description"
              className="input form-control"
              id="business_description"
              type="text"
              maxLength={350}
            />
          </div>
        </div>

        <textarea          
          defaultValue={storedData?.jobContext}    
          name="job_context"
          className="input form-control my-lg-3"
          id="job_context"
          type="text"
          maxLength={250}
        />

        <textarea
          defaultValue={storedData?.jobResponst}   
          name="job_respons"          
          className="input form-control my-lg-3"
          id="job_respons"
          type="text"
          maxLength={350}
        />

        <div className=" row my-lg-3">
          <div className=" col-lg-4">
            <div className="d-flex justify-content-between align-items-center">
              <label className="label">
                <span className=" fw-bold me-lg-2 ">Salary</span>
              </label>
              <input            
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
              <select                
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
            <select              
              name="salary_review"
              className="form-select"
            >
              <option defaultValue={salaryReview}>{salaryReview}</option>
              <option value={"Yearly"}>Yearly</option>
              <option value={"Half Yearly"}>Half Yearly</option>
            </select>
          </div>
        </div>

        <textarea          
          defaultValue={storedData?.others}
          name="others"
          className="input form-control my-lg-3"
          id="others"
          type="text"
          maxLength={450}
        />

        <div className=" my-lg-4">
          <div className="form-check form-check-inline">
            <input              
              className="form-check-input"
              type="radio"
              name="status"
              id="Active"
              value="active"
              checked
            />
            <label className="form-check-label" for="Active">
              Active
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input              
              className="form-check-input"
              type="radio"
              name="status"
              id="Inactive"
              value="inactive"
            />
            <label className="form-check-label" for="Inactive">
              Inactive
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input              
              className="form-check-input"
              type="radio"
              name="status"
              id="Close"
              value="close"
            />
            <label className="form-check-label" for="Close">
              Close
            </label>
          </div>  
        </div> 

        <div className=" d-flex justify-content-between my-lg-3">
          <button className="btn btn-warning fw-bold">Cancel</button>
          <button type="submit" name="submit" className="custom_btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePostedJob;

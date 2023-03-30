import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import JobSeekersProfileManage from "./JobSeekersProfileManage";
import "../../JobSeekers/JobSeekersProfile.css";
import Loader from "../../../Shared/Loader/Loader";

const JobSeekersLanguageAndReferenceManage = () => {

  const { user, loading, setLoading } = useContext(AuthContext);
  const [storedData, setStoredData] = useState([]);

  const email = user?.email;

  if (loading) {
    <Loader></Loader>
  }


  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersReferences/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log("jobSeekersCareers Data", data);
        setStoredData(data);
        setLoading(false)
      })
  }, [email, setLoading])

  console.log("Languages and references storedData : ", storedData);


  // console.log("imageBBHostKey  : ", imageHostKey)

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

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...storedData };
    newData[field] = value;
    setStoredData(newData);
  };


  const handleUpdateReferenceData = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_CABD_server_address}/jobseekersLanguagesReferences/${storedData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json", },
      body: JSON.stringify(storedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Data: ", data);
        if (data.modifiedCount > 0) {
          toast.success("Data Updated Successfully.");
        }
        setLoading(false);
      });
  };


  return (
    <div>
      <JobSeekersProfileManage></JobSeekersProfileManage>

      <h2 className=" text-center fw-bold my-4">
        Update Language and Reference Data
      </h2>

      {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
      <form onSubmit={handleUpdateReferenceData}>
        <div>
          <div className=" d-flex justify-content-between">
            <h4 className="label-text text-md fw-bold">Language Proficiency</h4>
            <p className=" float-end ">
              <span className="star">&#x2605; </span>
              <b>(Red Star) denotes must be filled</b>
            </p>
          </div>

          {/* language one  */}
          <div className="row">
            <h5 className="label-text text-md fw-bold mb-2">Language One</h5>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Language <span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.languOne}
                name="languOne"
                id="languOne"
                className="input form-control"
                type="text"
              />
            </div>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Reading<span className="star">&#x2605;</span>
              </span>
              <select
                onChange={handleInputChange}
                name="readingOne"
                id="readingOne"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.readingOne}>
                  {storedData.readingOne}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Writing<span className="star">&#x2605;</span>
              </span>
              <select
                onChange={handleInputChange}
                name="writingOne"
                id="writingOne"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.writingOne}>
                  {storedData.writingOne}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Speaking<span className="star">&#x2605;</span>
              </span>
              <select
                onChange={handleInputChange}
                name="speakingOne"
                id="speakingOne"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.speakingOne}>
                  {storedData.speakingOne}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* language two */}
          <div className="row">
            <h5 className="label-text text-md fw-bold mb-2">Language Two</h5>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold">Language</span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.languTwo}
                name="languTwo"
                id="languTwo"
                className="input form-control"
                type="text"
              />
            </div>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">Reading</span>
              <select
                onChange={handleInputChange}
                name="readingTwo"
                id="readingTwo"
                className="form-select select-bordered"
              >
                <option defaultValue={storedData.readingTwo}>
                  {storedData.readingTwo}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold">Writing</span>
              <select
                onChange={handleInputChange}
                name="writingTwo"
                id="writingTwo"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.writingTwo}>
                  {storedData.writingTwo}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">Speaking</span>
              <select
                onChange={handleInputChange}
                name="speakingTwo"
                id="speakingTwo"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.speakingTwo}>
                  {storedData.speakingTwo}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* language three */}
          <div className="row">
            <h5 className="label-text text-md fw-bold mb-2">Language Three</h5>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">Language</span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.languThree}
                name="languThree"
                id="languThree"
                className="input form-control"
                type="text"
              />
            </div>
            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">Reading</span>
              <select
                onChange={handleInputChange}
                name="readingThree"
                id="readingThree"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.readingThree}>
                  {storedData.readingThree}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bold  ">Writing</span>
              <select
                onChange={handleInputChange}
                defaultValue={storedData.resultTwo}
                name="writingThree"
                id="writingThree"
                className="form-select select-bordered  "
              >
                <option defaultValue={storedData.writingThree}>
                  {storedData.writingThree}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className=" col-md-3 mb-3">
              <span className="label-text text-md fw-bol ">Speaking</span>
              <select
                onChange={handleInputChange}
                name="speakingThree"
                id="speakingThree"
                className="form-select select-bordered"
              >
                <option defaultValue={storedData.speakingThree}>
                  {storedData.speakingThree}
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Language Section end */}

          {/* Refference area start */}

          <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">
            Refference
          </h4>
          <div className="row my-4">
            <div className=" col-md-6">
              <div className=" mb-3">
                <span className="label-text text-md fw-bold  mb-3">
                  Refference One Name
                </span>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.refOneName}
                  name="refOneName"
                  id="refOneName"
                  className="input form-control "
                  type="text"
                />
              </div>

              <div className="">
                <span className="label-text text-md fw-bold">
                  Refference One Details
                </span>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.refOneDetails}
                  name="refOneDetails"
                  id="refOneDetails"
                  className="input form-control "
                  type="text"
                />
              </div>
            </div>

            <div className=" col-md-6 mb-3">
              <div className="  mb-3 ">
                <span className="label-text text-md fw-bold  ">
                  Refference Two Name
                </span>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedData.refTwoName}
                  name="refTwoName"
                  id="refTwoName"
                  className="input form-control "
                  type="text"
                />
              </div>

              <div className="  ">
                <span className="label-text text-md fw-bold  ">
                  Refference Two Details
                </span>
                <div>
                  <input
                    onChange={handleInputChange}
                    defaultValue={storedData.refTwoDetails}
                    name="refTwoDetails"
                    id="refTwoDetails"
                    className="input form-control "
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Refference area end */}

          <h4 className="label-text text-md fw-bold  text-center ">Other</h4>
          <div>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.other}
              name="other"
              id="other"
              className="input form-control "
              type="text"
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

export default JobSeekersLanguageAndReferenceManage;

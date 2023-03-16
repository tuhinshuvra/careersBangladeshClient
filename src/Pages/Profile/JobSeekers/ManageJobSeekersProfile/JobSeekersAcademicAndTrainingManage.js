import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import "../../JobSeekers/JobSeekersProfile.css";
import JobSeekersProfileManage from "./JobSeekersProfileManage";

const JobSeekersAcademicAndTrainingManage = () => {
  const storedData = useLoaderData();
  // console.log("Academics And Training storedData : ", storedData);\

  const [academicsData, setAcademicsData] = useState(storedData);

  // const navigate = useNavigate();

  const handleUdateAcademicsDoc = (event) => {
    event.preventDefault();

    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobseekersAcademics/${storedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(academicsData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated data :", data);
        if (data.modifiedCount > 0) {
          toast.success("Data Updated Successfully.");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...academicsData };
    newData[field] = value;
    setAcademicsData(newData);
  };

  return (
    <div>
      <JobSeekersProfileManage></JobSeekersProfileManage>
      <h2 className=" text-center fw-bold my-3">
        Update Academic and Training Data
      </h2>

      {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
      <form onSubmit={handleUdateAcademicsDoc}>
        {/* Enter Educational Qualification One */}
        <div className=" d-flex justify-content-between">
          <h5 className="label-text text-md fw-bold ">Academic One</h5>
          <p className=" float-end ">
            {" "}
            <span className="star">&#x2605; </span>{" "}
            <b>(Red Star) denotes must be filled</b>
          </p>
        </div>
        <div className="row">
          <div className="col-md-2">
            <span className="label-text text-md fw-bold  ">
              Exam Title<span className="star">&#x2605;</span>
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.examTitleOne}
              name="examTitleOne"
              className="input form-control "
              id="examTitleOne"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">
              Concentration/Major<span className="star">&#x2605;</span>
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.majorOne}
              name="majorOne"
              className="input form-control "
              id="majorOne"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">
              Institute<span className="star">&#x2605;</span>
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.instituteOne}
              name="instituteOne"
              className="input form-control "
              id="instituteOne"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">
              Result<span className="star">&#x2605;</span>
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.resultOne}
              name="resultOne"
              className="input form-control "
              id="resultOne"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">
              Pass.Year<span className="star">&#x2605;</span>
            </span>
            <select
              onChange={handleInputChange}
              name="passYearOne"
              id="passYearOne"
              className="input form-control "
            >
              <option defaultValue={storedData.passYearOne}>
                {storedData.passYearOne}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Enter Educational Qualification Two */}
        <h5 className="label-text text-md fw-bold ">Academic Two</h5>
        <div className="row  ">
          <div className="col-md-2   ">
            <span className="label-text text-md fw-bold  ">Exam Title</span>
            <input
              defaultValue={storedData.examTitleTwo}
              onChange={handleInputChange}
              name="examTitleTwo"
              className="input form-control "
              id="examTitleTwo"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Concentration/Major
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.majorTwo}
              name="majorTwo"
              className="input form-control "
              id="majorTwo"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">Institute</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.instituteTwo}
              name="instituteTwo"
              className="input form-control "
              id="instituteTwo"
              type="text"
            />
          </div>
          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Result</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.resultTwo}
              name="resultTwo"
              className="input form-control "
              id="resultTwo"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Pass.Year</span>
            <select
              onChange={handleInputChange}
              id="passYearTwo"
              name="passYearTwo"
              className="input form-control "
            >
              <option defaultValue={storedData.passYearTwo}>
                {storedData.passYearTwo}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Enter Educational Qualification Three */}
        <h5 className="label-text text-md fw-bold">Academic Three</h5>
        <div className="row">
          <div className="col-md-2">
            <span className="label-text text-md fw-bold">Exam Title</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.examTitleThree}
              name="examTitleThree"
              className="input form-control "
              id="examTitleThree"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Concentration/Major
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.majorThree}
              name="majorThree"
              className="input form-control "
              id="majorThree"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">Institute</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.instituteThree}
              name="instituteThree"
              className="input form-control "
              id="instituteThree"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Result</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.resultThree}
              name="resultThree"
              className="input form-control "
              id="resultThree"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Pass.Year</span>
            <select
              onChange={handleInputChange}
              id="passYearThree"
              name="passYearThree"
              className="input form-control"
            >
              <option defaultValue={storedData.passYearThree}>
                {storedData.passYearThree}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Enter Educational Qualification Four */}
        <h5 className="label-text text-md fw-bold ">Academic Four</h5>
        <div className="row  ">
          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Exam Title</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.resultThree}
              name="examTitleFour"
              className="input form-control "
              id="examTitleFour"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">
              Concentration/Major
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.majorFour}
              name="majorFour"
              className="input form-control "
              id="majorFour"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">Institute</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.instituteFour}
              name="instituteFour"
              className="input form-control "
              id="instituteFour"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Result</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.resultFour}
              name="resultFour"
              className="input form-control "
              id="resultFour"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Pass.Year</span>
            <select
              onChange={handleInputChange}
              id="passYearFour"
              name="passYearFour"
              className="input form-control "
            >
              <option defaultValue={storedData.passYearFour}>
                {storedData.passYearFour}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Academic Qualification Section End */}

        {/* Academic Qualification Section Start */}

        {/* Enter Tranning Section*/}
        <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">
          Training Summary
        </h4>

        {/* Enter Educational Qualification One */}
        <h5 className="label-text text-md fw-bold  ">Tranning One</h5>
        <div className="row  ">
          <div className="col-md-2  ">
            <span className="label-text text-md fw-bold  ">Training Title</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.trainingTitleOne}
              name="trainingTitleOne"
              className="input form-control "
              id="trainingTitleOne"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">Topic</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.topicOne}
              name="topicOne"
              className="input form-control "
              id="topicOne"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">
              Institute and Location
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.insAndLocationOne}
              name="insAndLocationOne"
              className="input form-control "
              id="insAndLocationOne"
              type="text"
            />
          </div>
          <div className="col-md-2  ">
            <span className="label-text text-md fw-bold  ">Duration</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.durationOne}
              name="durationOne"
              className="input form-control "
              id="durationOne"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Year</span>
            <select
              onChange={handleInputChange}
              id="traningYearOne"
              name="traningYearOne"
              className="input form-control "
            >
              <option defaultValue={storedData.traningYearOne}>
                {storedData.traningYearOne}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Enter Educational Qualification Two */}
        <h5 className="label-text text-md fw-bold mt-3  ">Tranning Two</h5>
        <div className="row  ">
          <div className="col-md-2  ">
            <span className="label-text text-md fw-bold  ">Training Title</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.trainingTitleTwo}
              name="trainingTitleTwo"
              className="input form-control "
              id="trainingTitleTwo"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold  ">Topic</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.topicTwo}
              name="topicTwo"
              className="input form-control "
              id="topicTwo"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold  ">
              Institute and Location
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.insAndLocationTwo}
              name="insAndLocationTwo"
              className="input form-control "
              id="insAndLocationTwo"
              type="text"
            />
          </div>
          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Duration</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.durationTwo}
              name="durationTwo"
              className="input form-control "
              id="durationTwo"
              type="text"
            />
          </div>

          <div className="col-md-2  ">
            <span className="label-text text-md fw-bold  ">Year</span>
            <select
              onChange={handleInputChange}
              id="traningYearTwo"
              name="traningYearTwo"
              className="input form-control "
            >
              <option defaultValue={storedData.traningYearTwo}>
                {storedData.traningYearTwo}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        {/* Enter Educational Qualification Three */}
        <h5 className="label-text text-md fw-bold mt-3  ">Tranning Three</h5>
        <div className="row">
          <div className="col-md-2">
            <span className="label-text text-md fw-bold  ">Training Title</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.trainingTitleThree}
              name="trainingTitleThree"
              className="input form-control "
              id="trainingTitleThree"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 mb-3">
            <span className="label-text text-md fw-bold  ">Topic</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.topicThree}
              name="topicThree"
              className="input form-control "
              id="topicThree"
              type="text"
            />
          </div>

          <div className="col-md-3 mb-3 mb-3">
            <span className="label-text text-md fw-bold  ">
              Institute and Location
            </span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.insAndLocationThree}
              name="insAndLocationThree"
              className="input form-control "
              id="insAndLocationThree"
              type="text"
            />
          </div>
          <div className="col-md-2">
            <span className="label-text text-md fw-bold  ">Duration</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.durationThree}
              name="durationThree"
              className="input form-control "
              id="durationThree"
              type="text"
            />
          </div>

          <div className="col-md-2 ">
            <span className="label-text text-md fw-bold  ">Year</span>
            <select
              onChange={handleInputChange}
              id="traningYearThree"
              name="traningYearThree"
              className="input form-control "
            >
              <option defaultValue={storedData.traningYearThree}>
                {storedData.traningYearThree}
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
            </select>
          </div>
        </div>

        <h4 className="label-text text-md fw-bold  text-center mt-5 mb-2">
          Work Link
        </h4>

        <div className="row ">
          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold">Github Link</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.gitHubLink}
              name="gitHubLink"
              className="input form-control "
              id="gitHubLink"
              type="text"
            />
          </div>
          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold">Link Other</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.linkTwo}
              name="linkTwo"
              className="input form-control "
              id="linkTwo"
              type="text"
              placeholder="Enter Link Address"
            />
          </div>

          <div className="col-md-3 mb-3 ">
            <span className="label-text text-md fw-bold">Link Other</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.linkThree}
              name="linkThree"
              className="input form-control "
              id="linkThree"
              type="text"
            />
          </div>
          <div className="col-md-3 mb-3  ">
            <span className="label-text text-md fw-bold">Portfolio</span>
            <input
              onChange={handleInputChange}
              defaultValue={storedData.portfolio}
              name="portfolio"
              className="input form-control "
              id="portfolio"
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

export default JobSeekersAcademicAndTrainingManage;

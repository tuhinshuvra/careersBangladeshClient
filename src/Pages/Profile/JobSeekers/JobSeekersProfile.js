import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import "../JobSeekers/JobSeekersProfile.css";

const JobSeekersProfile = () => {
  const [jobSeekersData, setJobSeekersData] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CABD_server_address}/employeesAggregatedData/${email}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("employeesAggregatedData : ", data[0])
        setJobSeekersData(data[0]);
      });
  }, [email]);

  // console.log("employerData : ", employeesData)
  // console.log("empAgrreExperience : ", employeesData?.empAgrreExperience)
  // console.log("empAggreAcademics : ", employeesData?.empAggreAcademics)
  // console.log("empAggreCareers : ", employeesData?.empAggreCareers)
  // console.log("empAggreReferences : ", employeesData?.empAggreReferences)

  return (
    <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
      {/* Header Section Start */}
      <header className="resume-header p-5">
        <div className=" d-flex justify-content-between">
          <p>
            <b>Download:</b> Word, PDF
          </p>
          <p>
            <b>View Resume:</b>
            <div
              className="btn-group ms-2"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-primary btn-sm">
                Details
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm">
                Short
              </button>
            </div>
          </p>
        </div>

        <div className="d-flex justify-content-evenly ">
          <div className="col-lg-9">
            <div className="row">
              <div className="d-flex justify-content-between">
                <div className="col-lg-8">
                  <div className="primary-info col-auto">
                    <h5 className="name mb-1 text-uppercase fw-bold">
                      {jobSeekersData?.name}
                    </h5>
                    <ul className="list-unstyled">
                      <li className="">
                        <b>Address:</b>{" "}
                        <span>{jobSeekersData?.presentAddress}</span>{" "}
                      </li>
                      <li className="">
                        <b>Phone:</b> {jobSeekersData?.phone}
                      </li>
                      <li className="">
                        <b>Email:</b> {jobSeekersData?.email}
                      </li>
                      <li>
                        {" "}
                        <b> Portfolio: </b>{" "}
                        <a
                          className=" text-decoration-none"
                          href={`${jobSeekersData?.empAggreAcademics?.portfolio}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {jobSeekersData?.empAggreAcademics?.portfolio}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <b> Work Repository: </b>{" "}
                        <a
                          className=" text-decoration-none"
                          href={`${jobSeekersData?.empAggreAcademics?.gitHubLink}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {jobSeekersData?.empAggreAcademics?.gitHubLink}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="secondary-info col-auto mt-2">
                    <ul className="resume-social list-unstyled">
                      <li className="mb-3">
                        <Link className="text-link text-decoration-none" to="#">
                          <span className="fa-container text-center">
                            <i className="fab fa-linkedin-in fa-fw"></i>
                          </span>
                          {jobSeekersData?.linkOne}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="text-link text-decoration-none" to="#">
                          <span className="fa-container text-center">
                            <i className="fab fa-github-alt fa-fw"></i>
                          </span>
                          {jobSeekersData?.linkOne}
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="text-link text-decoration-none" to="#">
                          <span className="fa-container text-center">
                            <i className="fab fa-codepen fa-fw"></i>
                          </span>
                          {jobSeekersData?.linkThree}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 ">
            <img className="profile_pic" src={jobSeekersData?.image} alt="" />
          </div>
        </div>
      </header>
      {/* Header Section End */}

      {/* Resume Body start */}
      <div className="resume-body p-5">
        <section className="resume-section summary-section mb-5">
          <h5 className="resume-section-title text-uppercase text-decoration-underline">
            Career Objective
          </h5>
          <div className="resume-section-content">
            <p>{jobSeekersData?.careerObjective}</p>
          </div>
        </section>

        {jobSeekersData?.empAggreCareers?.specialQualification ? (
          <>
            <section className="resume-section summary-section mb-5">
              <h5 className="resume-section-title text-uppercase text-decoration-underline">
                Special Qualification
              </h5>
              <div className="resume-section-content">
                <p>{jobSeekersData?.empAggreCareers?.specialQualification}</p>
              </div>
            </section>
          </>
        ) : (
          <></>
        )}

        {/* History of Employment Section Start */}

        {jobSeekersData?.empAgrreExperience?.expOneCompanayName ? (
          <>
            <section className="resume-section summary-section mb-5">
              <h5 className="resume-section-title text-uppercase text-decoration-underline">
                History of Employment
              </h5>
              <div className="resume-section-content">
                <p className="my-3">
                  {" "}
                  <b>Total Year of Experience :</b> 10.9 yrs{" "}
                </p>

                {/* Employment History Section One */}
                <div>
                  <p className="fw-bold mb-0 ">
                    {" "}
                    <span> 1.</span>{" "}
                    {jobSeekersData?.empAgrreExperience?.expOneDesignation}{" "}
                    <span>
                      {" "}
                      ({
                        jobSeekersData?.empAgrreExperience?.exprOneWorkPeriod
                      }{" "}
                      yr)
                    </span>
                  </p>
                  <p className=" mb-0">
                    {jobSeekersData?.empAgrreExperience?.expOneFrom}
                    <span className=" mx-1">-</span>
                    {jobSeekersData?.empAgrreExperience?.expOneTo}
                  </p>
                  <p className="">
                    <b>
                      {" "}
                      {jobSeekersData?.empAgrreExperience?.expOneCompanayName}
                    </b>
                  </p>
                  <p className=" mb-0">
                    <b>
                      {jobSeekersData?.empAgrreExperience?.exprOneExpertise}
                    </b>
                  </p>
                  <p className=" mb-0">
                    <b>Area of Expertise</b>
                  </p>
                  <p className=" mb-0">
                    {jobSeekersData?.empAgrreExperience?.exprOneExpertise}
                  </p>
                  <p className="mb-0">
                    <b>Duties/Responsibilities</b>
                  </p>
                  <p className="mb-0">
                    {jobSeekersData?.empAgrreExperience?.exprOneResp}
                  </p>
                </div>

                {jobSeekersData?.empAgrreExperience?.expTwoCompanayName ? (
                  <>
                    {/* Employment History Section Two */}
                    <div className=" mt-3">
                      <p className="fw-bold mb-0 ">
                        {" "}
                        <span> 2.</span>{" "}
                        {jobSeekersData?.empAgrreExperience?.expTwoDesignation}
                        <span>
                          {" "}
                          (
                          {
                            jobSeekersData?.empAgrreExperience
                              ?.exprTwoWorkPeriod
                          }{" "}
                          yr)
                        </span>
                      </p>
                      <p className=" mb-0">
                        {jobSeekersData?.empAgrreExperience?.expTwoFrom}
                        <span className=" mx-1">-</span>
                        {jobSeekersData?.empAgrreExperience?.expTwoTo}
                      </p>
                      <p className="">
                        <b>
                          {" "}
                          {
                            jobSeekersData?.empAgrreExperience
                              ?.expTwoCompanayName
                          }
                        </b>
                      </p>
                      <p className=" mb-0">
                        <b>
                          {jobSeekersData?.empAgrreExperience?.exprTwoExpertise}
                        </b>
                      </p>
                      <p className=" mb-0">
                        <b>Area of Expertise</b>
                      </p>
                      <p className=" mb-0">
                        {jobSeekersData?.empAgrreExperience?.exprTwoExpertise}
                      </p>
                      <p className="mb-0">
                        <b>Duties/Responsibilities</b>
                      </p>
                      <p className="mb-0">
                        {jobSeekersData?.empAgrreExperience?.exprTwoResp}
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </section>
          </>
        ) : (
          <></>
        )}
        {/* History of Employment Section End */}

        {/* Academic Qualification Section Start */}
        <section className=" my-5">
          <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">
            Academic Qualification
          </h5>

          <div className="">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Exam Title</th>
                  <th scope="col">Concentration/Major</th>
                  <th scope="col">Institute</th>
                  <th scope="col">Result</th>
                  <th scope="col">Pas.Year</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{jobSeekersData?.empAggreAcademics?.examTitleOne}</td>
                  <td>{jobSeekersData?.empAggreAcademics?.majorOne}</td>
                  <td>{jobSeekersData?.empAggreAcademics?.instituteOne}</td>
                  <td>{jobSeekersData?.empAggreAcademics?.resultOne}</td>
                  <td>{jobSeekersData?.empAggreAcademics?.passYearOne}</td>
                </tr>

                {jobSeekersData?.empAggreAcademics?.examTitleTwo ? (
                  <>
                    <tr>
                      <th scope="row">2</th>
                      <td>{jobSeekersData?.empAggreAcademics?.examTitleTwo}</td>
                      <td>{jobSeekersData?.empAggreAcademics?.majorTwo}</td>
                      <td>{jobSeekersData?.empAggreAcademics?.instituteTwo}</td>
                      <td>{jobSeekersData?.empAggreAcademics?.resultTwo}</td>
                      <td>{jobSeekersData?.empAggreAcademics?.passYearTwo}</td>
                    </tr>
                  </>
                ) : (
                  <></>
                )}

                {jobSeekersData?.empAggreAcademics?.examTitleThree ? (
                  <>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        {jobSeekersData?.empAggreAcademics?.examTitleThree}
                      </td>
                      <td>{jobSeekersData?.empAggreAcademics?.majorThree}</td>
                      <td>
                        {jobSeekersData?.empAggreAcademics?.instituteThree}
                      </td>
                      <td>{jobSeekersData?.empAggreAcademics?.resultThree}</td>
                      <td>
                        {jobSeekersData?.empAggreAcademics?.passYearThree}
                      </td>
                    </tr>
                  </>
                ) : (
                  <></>
                )}

                {jobSeekersData?.empAggreAcademics?.examTitleFour ? (
                  <>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        {jobSeekersData?.empAggreAcademics?.examTitleFour}
                      </td>
                      <td>{jobSeekersData?.empAggreAcademics?.majorFour}</td>
                      <td>
                        {jobSeekersData?.empAggreAcademics?.instituteFour}
                      </td>
                      <td>{jobSeekersData?.empAggreAcademics?.resultFour}</td>
                      <td>{jobSeekersData?.empAggreAcademics?.passYearFour}</td>
                    </tr>
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </section>
        {/* Academic Qualification Section End */}

        {/* Tranining Summary Setcion start */}
        {jobSeekersData?.empAggreAcademics?.trainingTitleOne ? (
          <>
            <section>
              <div className=" mt-3">
                <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">
                  Training Summary
                </h5>
                <div>
                  <table className="table table-bordered border-secondary">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Exam Title</th>
                        <th scope="col">Concentration/Major</th>
                        <th scope="col">Institute</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Pas.Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobSeekersData?.empAggreAcademics?.trainingTitleOne ? (
                        <>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.trainingTitleOne
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.topicOne}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.insAndLocationOne
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.durationOne}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.traningYearOne
                              }
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}

                      {jobSeekersData?.empAggreAcademics?.trainingTitleTwo ? (
                        <>
                          <tr>
                            <th scope="row">2</th>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.trainingTitleTwo
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.topicTwo}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.insAndLocationTwo
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.durationTwo}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.traningYearTwo
                              }
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}

                      {jobSeekersData?.empAggreAcademics?.trainingTitleThree ? (
                        <>
                          <tr>
                            <th scope="row">3</th>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.trainingTitleThree
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.topicThree}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.insAndLocationThree
                              }
                            </td>
                            <td>
                              {jobSeekersData?.empAggreAcademics?.durationThree}
                            </td>
                            <td>
                              {
                                jobSeekersData?.empAggreAcademics
                                  ?.traningYearThree
                              }
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </>
        ) : (
          <></>
        )}
        {/* Tranining Summary Setcion end */}

        {/* Career and Application Information Setcion start */}
        <section className=" my-5">
          <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">
            Career and Application Information
          </h5>
          <div>
            <table className="table table-borderless table-sm">
              <tbody>
                <tr>
                  <th scope="row">Looking For</th>
                  <td>: {jobSeekersData?.empAggreCareers?.lookingFor}</td>
                </tr>

                <tr>
                  <th scope="row">Available For</th>
                  <td>: {jobSeekersData?.empAggreCareers?.availbaleFor}</td>
                </tr>

                <tr>
                  <th scope="row">Present Salary</th>
                  <td>
                    : {jobSeekersData?.empAggreCareers?.presentSalary}TK /Month{" "}
                  </td>
                </tr>

                <tr>
                  <th scope="row">Expected Salary</th>
                  <td>
                    : {jobSeekersData?.empAggreCareers?.expectedSalary}TK /Month
                  </td>
                </tr>

                <tr>
                  <th scope="row">Preferred Job Category</th>
                  <td>: {jobSeekersData?.empAggreCareers?.category}</td>
                </tr>

                <tr>
                  <th scope="row">Preferred Location</th>
                  <td>
                    : {jobSeekersData?.empAggreCareers?.preferredLocations}
                  </td>
                </tr>

                <tr>
                  <th scope="row">Preferred Organization Types</th>
                  <td>: {jobSeekersData?.empAggreCareers?.preferredOrg}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Career and Application Information Setcion end */}

        {/* Specialization Setcion start */}
        <section className=" my-5">
          <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">
            Specialization
          </h5>
          <div>
            <table className="table border my-2">
              <thead className=" border">
                <th className="border text-center col-md-3">
                  Fields of Specialization
                </th>
                <th className="border text-center col-md-9">Description</th>
              </thead>

              <tbody className="border">
                <tr className="border">
                  <td className="border">
                    <ul className=" ">
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillOne}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillTwo}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillThree}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillFour}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillFive}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillSix}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillSeven}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillEight}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillNine}
                      </li>
                      <li className="">
                        {jobSeekersData?.empAggreCareers?.skillTen}
                      </li>
                    </ul>
                  </td>

                  <td className="border">
                    <p>
                      <b>Skill Learned By : </b>{" "}
                      {jobSeekersData?.empAggreCareers?.skillLearnedBy}
                    </p>
                    <p>
                      <b>Skill Desciption : </b>{" "}
                      {jobSeekersData?.empAggreCareers?.skillDesciption}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Specialization Setcion end */}

        {/* Language Proficiency Section Start */}
        <section className=" my-5">
          <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">
            Language Proficiency
          </h5>

          <div className="">
            <table className="table table-bordered border-secondary text-center">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Language</th>
                  <th scope="col">Reading</th>
                  <th scope="col">Writing</th>
                  <th scope="col">Speaking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{jobSeekersData?.empAggreReferences?.languOne}</td>
                  <td>{jobSeekersData?.empAggreReferences?.readingOne}</td>
                  <td>{jobSeekersData?.empAggreReferences?.writingOne}</td>
                  <td>{jobSeekersData?.empAggreReferences?.speakingOne}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{jobSeekersData?.empAggreReferences?.languTwo}</td>
                  <td>{jobSeekersData?.empAggreReferences?.readingTwo}</td>
                  <td>{jobSeekersData?.empAggreReferences?.writingTwo}</td>
                  <td>{jobSeekersData?.empAggreReferences?.speakingTwo}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>{jobSeekersData?.empAggreReferences?.languThree}</td>
                  <td>{jobSeekersData?.empAggreReferences?.readingThree}</td>
                  <td>{jobSeekersData?.empAggreReferences?.writingThree}</td>
                  <td>{jobSeekersData?.empAggreReferences?.speakingThree}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/*Language Proficiency Section End */}

        {/*Personal Details Setcion start */}
        <section className=" my-5">
          <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">
            Personal Details
          </h5>
          <div>
            <table className="table table-borderless table-sm">
              <tbody>
                <tr>
                  <th scope="row">Father's Name</th>
                  <td>: {jobSeekersData?.fathersName} </td>
                </tr>

                <tr>
                  <th scope="row">Mother's Name</th>
                  <td>: {jobSeekersData?.mothersName} </td>
                </tr>

                <tr>
                  <th scope="row">Date of Birth</th>
                  <td>: {jobSeekersData?.birthDate} </td>
                </tr>

                <tr>
                  <th scope="row">Gender</th>
                  <td>: {jobSeekersData?.gender} </td>
                </tr>

                <tr>
                  <th scope="row">Marital Status</th>
                  <td>: {jobSeekersData?.maritalStatus} </td>
                </tr>

                <tr>
                  <th scope="row">Nationality</th>
                  <td>: {jobSeekersData?.nationality} </td>
                </tr>

                <tr>
                  <th scope="row">National Id No.</th>
                  <td>: {jobSeekersData?.nationalId} </td>
                </tr>
                <tr>
                  <th scope="row">Religion</th>
                  <td>: {jobSeekersData?.religion} </td>
                </tr>
                <tr>
                  <th scope="row">Permanent Address</th>
                  <td>: {jobSeekersData?.permanentAddress} </td>
                </tr>

                <tr>
                  <th scope="row">Current Location</th>
                  <td>: {jobSeekersData?.presentAddress} </td>
                </tr>
                {/* <tr>
                                    <th scope="row">Blood Group</th>
                                    <td>: {employeesData?.bloodGroup} </td>
                                </tr> */}
              </tbody>
            </table>
          </div>
        </section>
        {/* Personal Details Setcion end */}
      </div>
      {/* Resume Body End */}
    </div>
  );
};

export default JobSeekersProfile;

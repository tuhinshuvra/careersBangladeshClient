import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import '../JobSeekers/JobSeekersProfile.css';

const EmployeesProfile = () => {
    const [employeesData, setEmployeesData] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    useEffect(() => {
        // fetch(`http://localhost:5000/employeesAggregatedData/${email}`)
        fetch(`http://localhost:5000/employeesAggregatedData/${email}`)
            .then(response => response.json())
            .then(data => {
                // console.log("employeesAggregatedData : ", data[0])
                setEmployeesData(data[0])
            })

    }, [email])


    // console.log("employerData : ", employeesData)
    // console.log("empAgrreExperience : ", employeesData?.empAgrreExperience)
    // console.log("empAggreAcademics : ", employeesData?.empAggreAcademics)
    // console.log("empAggreCareers : ", employeesData?.empAggreCareers)
    // console.log("empAggreReferences : ", employeesData?.empAggreReferences)


    return (

        <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">

            {/* Header Section Start */}
            <header className="resume-header p-5">
                <div className=' d-flex justify-content-between'>
                    <p><b>Download:</b>  Word, PDF</p>
                    <p><b>View Resume:</b>
                        <div className="btn-group ms-2" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary btn-sm">Details</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Short</button>
                        </div>
                    </p>
                </div>

                <div className='d-flex justify-content-evenly '>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className='d-flex justify-content-between'>
                                <div className='col-lg-8'>
                                    <div className="primary-info col-auto">
                                        <h5 className="name mb-1 text-uppercase fw-bold">{employeesData?.name}</h5>
                                        <ul className="list-unstyled">
                                            <li className=""><b>Address:</b> <span>{employeesData?.presentAddress}</span>  </li>
                                            <li className=""><b>Phone:</b> {employeesData?.phone}</li>
                                            <li className=""><b>Email:</b> {employeesData?.email}</li>
                                            <li> <b> Portfolio: </b> <a className=' text-decoration-none' href={`${employeesData?.empAggreAcademics?.portfolio}`} rel="noreferrer" target="_blank" >{employeesData?.empAggreAcademics?.portfolio}</a> </li>
                                            <li> <b> Work Repository: </b> <a className=' text-decoration-none' href={`${employeesData?.empAggreAcademics?.gitHubLink}`} rel="noreferrer" target="_blank" >{employeesData?.empAggreAcademics?.gitHubLink}</a> </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className='col-lg-4'>
                                    <div className="secondary-info col-auto mt-2">
                                        <ul className="resume-social list-unstyled">
                                            <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-linkedin-in fa-fw"></i></span>{employeesData?.linkOne}</Link></li>
                                            <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-github-alt fa-fw"></i></span>{employeesData?.linkOne}</Link></li>
                                            <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-codepen fa-fw"></i></span>{employeesData?.linkThree}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 ">
                        <img className="profile_pic" src={employeesData?.image} alt="" />
                    </div>

                </div>
            </header>
            {/* Header Section End */}


            {/* Resume Body start */}
            <div className="resume-body p-5">
                <section className="resume-section summary-section mb-5">
                    <h5 className="resume-section-title text-uppercase text-decoration-underline">Career Objective</h5>
                    <div className="resume-section-content">
                        <p>{employeesData?.careerObjective}</p>
                    </div>
                </section>

                {employeesData?.empAggreCareers?.specialQualification ? <>

                    <section className="resume-section summary-section mb-5">
                        <h5 className="resume-section-title text-uppercase text-decoration-underline">Special Qualification</h5>
                        <div className="resume-section-content">
                            <p>{employeesData?.empAggreCareers?.specialQualification}</p>
                        </div>
                    </section>
                </> : <></>}


                {/* History of Employment Section Start */}

                {employeesData?.empAgrreExperience?.expOneCompanayName ? <>
                    <section className="resume-section summary-section mb-5">
                        <h5 className="resume-section-title text-uppercase text-decoration-underline">History of Employment</h5>
                        <div className="resume-section-content">

                            <p className='my-3'> <b>Total Year of Experience :</b>  10.9 yrs </p>

                            {/* Employment History Section One */}
                            <div>
                                <p className='fw-bold mb-0 '> <span> 1.</span> {employeesData?.empAgrreExperience?.expOneDesignation} <span> ({employeesData?.empAgrreExperience?.exprOneWorkPeriod} yr)</span></p>
                                <p className=' mb-0'>
                                    {employeesData?.empAgrreExperience?.expOneFrom}
                                    <span className=' mx-1'>-</span>
                                    {employeesData?.empAgrreExperience?.expOneTo}
                                </p>
                                <p className=''><b> {employeesData?.empAgrreExperience?.expOneCompanayName}</b></p>
                                <p className=' mb-0'><b>{employeesData?.empAgrreExperience?.exprOneExpertise}</b></p>
                                <p className=' mb-0'><b>Area of Expertise</b></p>
                                <p className=' mb-0'>{employeesData?.empAgrreExperience?.exprOneExpertise}</p>
                                <p className='mb-0'><b>Duties/Responsibilities</b></p>
                                <p className='mb-0'>{employeesData?.empAgrreExperience?.exprOneResp}</p>
                            </div>

                            {employeesData?.empAgrreExperience?.expTwoCompanayName ? <>
                                {/* Employment History Section Two */}
                                <div className=' mt-3'>
                                    <p className='fw-bold mb-0 '> <span> 2.</span> {employeesData?.empAgrreExperience?.expTwoDesignation}
                                        <span> ({employeesData?.empAgrreExperience?.exprTwoWorkPeriod} yr)</span></p>
                                    <p className=' mb-0'>
                                        {employeesData?.empAgrreExperience?.expTwoFrom}
                                        <span className=' mx-1'>-</span>
                                        {employeesData?.empAgrreExperience?.expTwoTo}
                                    </p>
                                    <p className=''><b> {employeesData?.empAgrreExperience?.expTwoCompanayName}</b></p>
                                    <p className=' mb-0'><b>{employeesData?.empAgrreExperience?.exprTwoExpertise}</b></p>
                                    <p className=' mb-0'><b>Area of Expertise</b></p>
                                    <p className=' mb-0'>{employeesData?.empAgrreExperience?.exprTwoExpertise}</p>
                                    <p className='mb-0'><b>Duties/Responsibilities</b></p>
                                    <p className='mb-0'>{employeesData?.empAgrreExperience?.exprTwoResp}</p>
                                </div>
                            </> : <></>
                            }

                        </div>
                    </section>
                </> : <></>
                }
                {/* History of Employment Section End */}


                {/* Academic Qualification Section Start */}
                <section className=" my-5">
                    <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">Academic Qualification</h5>

                    <div className=''>
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
                                    <td>{employeesData?.empAggreAcademics?.examTitleOne}</td>
                                    <td>{employeesData?.empAggreAcademics?.majorOne}</td>
                                    <td>{employeesData?.empAggreAcademics?.instituteOne}</td>
                                    <td>{employeesData?.empAggreAcademics?.resultOne}</td>
                                    <td>{employeesData?.empAggreAcademics?.passYearOne}</td>
                                </tr>

                                {employeesData?.empAggreAcademics?.examTitleTwo ? <>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>{employeesData?.empAggreAcademics?.examTitleTwo}</td>
                                        <td>{employeesData?.empAggreAcademics?.majorTwo}</td>
                                        <td>{employeesData?.empAggreAcademics?.instituteTwo}</td>
                                        <td>{employeesData?.empAggreAcademics?.resultTwo}</td>
                                        <td>{employeesData?.empAggreAcademics?.passYearTwo}</td>
                                    </tr>

                                </> : <></>
                                }

                                {employeesData?.empAggreAcademics?.examTitleThree ? <>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>{employeesData?.empAggreAcademics?.examTitleThree}</td>
                                        <td>{employeesData?.empAggreAcademics?.majorThree}</td>
                                        <td>{employeesData?.empAggreAcademics?.instituteThree}</td>
                                        <td>{employeesData?.empAggreAcademics?.resultThree}</td>
                                        <td>{employeesData?.empAggreAcademics?.passYearThree}</td>
                                    </tr>

                                </> : <></>
                                }

                                {employeesData?.empAggreAcademics?.examTitleFour ? <>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>{employeesData?.empAggreAcademics?.examTitleFour}</td>
                                        <td>{employeesData?.empAggreAcademics?.majorFour}</td>
                                        <td>{employeesData?.empAggreAcademics?.instituteFour}</td>
                                        <td>{employeesData?.empAggreAcademics?.resultFour}</td>
                                        <td>{employeesData?.empAggreAcademics?.passYearFour}</td>
                                    </tr>

                                </> : <></>
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* Academic Qualification Section End */}


                {/* Tranining Summary Setcion start */}
                {employeesData?.empAggreAcademics?.trainingTitleOne ? <>
                    <section>
                        <div className=' mt-3'>
                            <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">Training Summary</h5>
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

                                        {employeesData?.empAggreAcademics?.trainingTitleOne ? <>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>{employeesData?.empAggreAcademics?.trainingTitleOne}</td>
                                                <td>{employeesData?.empAggreAcademics?.topicOne}</td>
                                                <td>{employeesData?.empAggreAcademics?.insAndLocationOne}</td>
                                                <td>{employeesData?.empAggreAcademics?.durationOne}</td>
                                                <td>{employeesData?.empAggreAcademics?.traningYearOne}</td>
                                            </tr>
                                        </> : <></>}

                                        {employeesData?.empAggreAcademics?.trainingTitleTwo ? <>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>{employeesData?.empAggreAcademics?.trainingTitleTwo}</td>
                                                <td>{employeesData?.empAggreAcademics?.topicTwo}</td>
                                                <td>{employeesData?.empAggreAcademics?.insAndLocationTwo}</td>
                                                <td>{employeesData?.empAggreAcademics?.durationTwo}</td>
                                                <td>{employeesData?.empAggreAcademics?.traningYearTwo}</td>
                                            </tr>
                                        </> : <></>}

                                        {employeesData?.empAggreAcademics?.trainingTitleThree ? <>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>{employeesData?.empAggreAcademics?.trainingTitleThree}</td>
                                                <td>{employeesData?.empAggreAcademics?.topicThree}</td>
                                                <td>{employeesData?.empAggreAcademics?.insAndLocationThree}</td>
                                                <td>{employeesData?.empAggreAcademics?.durationThree}</td>
                                                <td>{employeesData?.empAggreAcademics?.traningYearThree}</td>
                                            </tr>
                                        </> : <></>}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </> : <></>}
                {/* Tranining Summary Setcion end */}



                {/* Career and Application Information Setcion start */}
                <section className=' my-5'>
                    <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">Career and Application Information</h5>
                    <div>
                        <table className="table table-borderless table-sm">

                            <tbody>
                                <tr>
                                    <th scope="row">Looking For</th>
                                    <td>:	{employeesData?.empAggreCareers?.lookingFor}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Available For</th>
                                    <td>:	{employeesData?.empAggreCareers?.availbaleFor}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Present Salary</th>
                                    <td>:	{employeesData?.empAggreCareers?.presentSalary}TK /Month </td>
                                </tr>

                                <tr>
                                    <th scope="row">Expected Salary</th>
                                    <td>:	{employeesData?.empAggreCareers?.expectedSalary}TK /Month</td>
                                </tr>

                                <tr>
                                    <th scope="row">Preferred Job Category</th>
                                    <td>:	{employeesData?.empAggreCareers?.category}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Preferred Location</th>
                                    <td>:	{employeesData?.empAggreCareers?.preferredLocations}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Preferred Organization Types</th>
                                    <td>:	{employeesData?.empAggreCareers?.preferredOrg}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
                {/* Career and Application Information Setcion end */}


                {/* Specialization Setcion start */}
                <section className=' my-5'>
                    <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">Specialization</h5>
                    <div>
                        <table className="table border my-2">

                            <thead className=' border'>
                                <th className='border text-center col-md-3'>Fields of Specialization</th>
                                <th className='border text-center col-md-9'>Description</th>
                            </thead>

                            <tbody className='border'>
                                <tr className='border'>
                                    <td className='border'>
                                        <ul className=" ">
                                            <li className="">{employeesData?.empAggreCareers?.skillOne}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillTwo}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillThree}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillFour}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillFive}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillSix}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillSeven}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillEight}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillNine}</li>
                                            <li className="">{employeesData?.empAggreCareers?.skillTen}</li>
                                        </ul>
                                    </td>

                                    <td className='border'>
                                        <p><b>Skill Learned By : </b> {employeesData?.empAggreCareers?.skillLearnedBy}</p>
                                        <p><b>Skill Desciption : </b> {employeesData?.empAggreCareers?.skillDesciption}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* Specialization Setcion end */}



                {/* Language Proficiency Section Start */}
                <section className=" my-5">
                    <h5 className=" fw-bold text-uppercase text-decoration-underline mb-3">Language Proficiency</h5>

                    <div className=''>
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
                                    <td>{employeesData?.empAggreReferences?.languOne}</td>
                                    <td>{employeesData?.empAggreReferences?.readingOne}</td>
                                    <td>{employeesData?.empAggreReferences?.writingOne}</td>
                                    <td>{employeesData?.empAggreReferences?.speakingOne}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>{employeesData?.empAggreReferences?.languTwo}</td>
                                    <td>{employeesData?.empAggreReferences?.readingTwo}</td>
                                    <td>{employeesData?.empAggreReferences?.writingTwo}</td>
                                    <td>{employeesData?.empAggreReferences?.speakingTwo}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>{employeesData?.empAggreReferences?.languThree}</td>
                                    <td>{employeesData?.empAggreReferences?.readingThree}</td>
                                    <td>{employeesData?.empAggreReferences?.writingThree}</td>
                                    <td>{employeesData?.empAggreReferences?.speakingThree}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
                {/*Language Proficiency Section End */}

                {/*Personal Details Setcion start */}
                <section className=' my-5'>
                    <h5 className="resume-section-title text-uppercase text-decoration-underline fw-bold">Personal Details</h5>
                    <div>
                        <table className="table table-borderless table-sm">

                            <tbody>
                                <tr>
                                    <th scope="row">Father's Name</th>
                                    <td>:	{employeesData?.fathersName} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Mother's Name</th>
                                    <td>:	{employeesData?.mothersName} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Date of Birth</th>
                                    <td>: {employeesData?.birthDate} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>: {employeesData?.gender} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Marital Status</th>
                                    <td>: {employeesData?.maritalStatus} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Nationality</th>
                                    <td>: {employeesData?.nationality} </td>
                                </tr>

                                <tr>
                                    <th scope="row">National Id No.</th>
                                    <td>: {employeesData?.nationalId} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <td>: {employeesData?.religion} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Permanent Address</th>
                                    <td>: {employeesData?.permanentAddress} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Current Location</th>
                                    <td>: {employeesData?.presentAddress} </td>
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

export default EmployeesProfile;
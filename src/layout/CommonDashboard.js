import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useEmployer from '../hooks/useEmployer';
import useJobSeeker from '../hooks/useJobSeeker';
import { AuthContext } from '../Pages/Authentication/AuthProvider';
import '../Pages/Profile/Employers/EmployeersProfile.css';

const CommonDashboard = () => {
    const { user } = useContext(AuthContext);


    const [isAdmin] = useAdmin(user?.email);
    const [isEmployer] = useEmployer(user?.email);
    const [isJobSeeker] = useJobSeeker(user?.email);


    const [employerData, setEmployerData] = useState([]);
    const [jobSeeker, setSeekerData] = useState([]);
    const email = user.email;

    const employer = useLoaderData();

    console.log("Employer : ", employer)


    useEffect(() => {
        fetch(`https://careers-bangladesh-server.vercel.app/employer/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log("Employee Data:", data);
                setEmployerData(data)
            })
    }, [email])


    useEffect(() => {
        fetch(`https://careers-bangladesh-server.vercel.app/jobSeeker/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log("JobSeeker Data:", data);
                setSeekerData(data)
            })
    }, [email])


    console.log("employerData : ", employerData)

    const { companyNameEn, companyLogo, companyNameBn, estdYear, companySize, addressEng, addressBng, busiDescription, tradeLicense, websiteURL, contactPersonName, contactPersonDesignation,
        contactPersonEmail, contactPersonPhone } = employerData;


    const { _id, name, careerObjective, skill, experience, achivement, birthDete, qualification, institute, passingYear, linkOne,
        linkTwo, linkThree, portfolio, language, fathersName, mothersName, phone, image, gender, religion, maritialStatus, permanentAddress, refOneName, refOneDetails, refTwoName, refTwoDetails, other } = jobSeeker;

    return (
        <div>
            {
                isEmployer && <>

                    <article className="resume-wrapper text-center position-relative">
                        <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                            <header className="resume-header pt-4">
                                <div className=' d-flex justify-content-evenly'>
                                    <div className="col-lg-4 ">
                                        <img className="companyLogo" src={companyLogo} alt="" />
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className=' d-flex justify-content-evenly gap-1  '>
                                                <div className=' col-lg-8'>
                                                    <div className="primary-info col-auto">
                                                        {/* <h1 className="name mt-0 mb-1 text-uppercase">{name}</h1> */}
                                                        <h2 className="title fw-bold">{companyNameEn}</h2>
                                                        <p className="title fw-bold">{addressEng}</p>
                                                        <p className=' fw-bold'>Estd: {estdYear},    <span> No of Empoyee: {companySize} + </span></p>
                                                        <div className="title mb-3 fw-bold">Trade License: {tradeLicense}</div>
                                                        <div className="title mb-3 fw-bold">Website : {websiteURL}</div>
                                                        <div className="title mb-3 fw-bold">Email : {email}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div className="resume-body p-3">
                                <section className="resume-section summary-section mb-5">
                                    <h2 className=""> Description</h2>
                                    <div className="resume-section-content">
                                        <p>{busiDescription}</p>
                                    </div>
                                </section>

                                <div className="row">
                                    <h4 className=" fw-bold">Contact Person</h4>
                                    <div className="resume-timeline-item-header">
                                        <div className=" ">
                                            <p className="resume-position-title fw-bold ">{contactPersonName}, {contactPersonDesignation}</p>
                                            <p>Phone : {contactPersonPhone}</p>
                                            <p>Email :  {contactPersonEmail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>

                </>
            }

            {
                isJobSeeker && <>

                    <article className="resume-wrapper text-center position-relative">
                        <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                            <header className="resume-header ">
                                <div className=' d-flex justify-content-evenly'>
                                    <div className="col-lg-8 mt-4">
                                        <div className="row">
                                            <div className=' d-flex justify-content-evenly   '>
                                                <div className=' col-lg-8'>
                                                    <h2 className="title fw-bold">{name}</h2>
                                                    <div className="title mb-3 fw-bold">Portfolio : {portfolio}</div>
                                                    <div className="title mb-3 fw-bold">Email : {email}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <img className="jobSeekerPic" src={image} alt="" />
                                    </div>
                                </div>
                            </header>
                            <div className="resume-body p-3">
                                <section className="resume-section summary-section mb-5">
                                    <h2 className=""> Career Objective</h2>
                                    <div className="resume-section-content">
                                        <p>{careerObjective}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </article>
                </>
            }


        </div>






    );
};

export default CommonDashboard;
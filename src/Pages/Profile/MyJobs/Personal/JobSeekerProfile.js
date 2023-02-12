import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProfilePic from '../../../../assets/images/profile/profile.jpg';
import { AuthContext } from '../../../Authentication/AuthProvider';
import '../../Employers/EmployeersProfile.css';

const JobSeekerProfile = () => {
    const [employerData, setEmployerData] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;

    const employer = useLoaderData();

    console.log("Employer : ", employer)


    useEffect(() => {
        fetch(`http://localhost:5000/jobSeeker/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log("JobSeeker Data:", data);
                setEmployerData(data)
            })
    }, [email])

    console.log("employerData : ", employerData)

    const { _id, name, companyNameEn, companyNameBn, estdYear, companySize, addressEng, addressBng, busiDescription, tradeLicense, websiteURL, contactPersonName, contactPersonDesignation,
        contactPersonEmail, contactPersonPhone } = employerData;

    return (
        <div>

            <article className="resume-wrapper text-center position-relative">
                <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                    <header className="resume-header pt-4">
                        <div className=' d-flex justify-content-evenly'>
                            <div className="col-lg-4 ">
                                <img className="employers_pic" src={ProfilePic} alt="" />
                            </div>

                            <div className="col-lg-8">
                                <div className="row">
                                    <div className=' d-flex justify-content-evenly gap-1  '>
                                        <div className=' col-lg-8'>
                                            <div className="primary-info col-auto">
                                                <h1 className="name mt-0 mb-1 text-uppercase">{name}</h1>
                                                <p className="title fw-bold">Assistant Manager, {companyNameEn}</p>
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
                            <h2 className="">Business Description of {companyNameEn}</h2>
                            <div className="resume-section-content">
                                <p>{busiDescription}</p>
                            </div>
                        </section>

                        {/* <!--//summary-section--> */}
                        <div className="row">
                            <div className="">
                                <section className="resume-section experience-section mb-5">
                                    <h4 className=" fw-bold">Contact Person</h4>
                                    {/* <div className="resume-timeline position-relative"> */}
                                    <article className="resume-timeline-item position-relative pb-5">

                                        <div className="resume-timeline-item-header mb-2">
                                            <div className=" ">
                                                <p className="resume-position-title fw-bold mb-1">{contactPersonName}, {contactPersonDesignation}</p>
                                                <p>Phone : {contactPersonPhone}</p>
                                                <p>Email :  {contactPersonEmail}</p>
                                            </div>
                                        </div>

                                    </article>
                                </section>
                            </div>

                        </div>
                    </div>

                </div>
            </article>
        </div>






    );
};

export default JobSeekerProfile;
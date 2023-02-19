import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProfilePic from '../../../assets/job_company_logo/gbl-logo.png';
import { AuthContext } from '../../Authentication/AuthProvider';
import './EmployeersProfile.css';

const EmployersProfile = () => {
    const [employerData, setEmployerData] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;

    const employer = useLoaderData();

    console.log("Employer : ", employer)


    useEffect(() => {
        fetch(`http://localhost:5000/employer/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log("Employee Data:", data);
                setEmployerData(data)
            })
    }, [email])

    console.log("employerData : ", employerData)

    const { _id, name, companyNameEn, companyLogo, companyNameBn, estdYear, companySize, addressEng, addressBng, busiDescription, tradeLicense, websiteURL, contactPersonName, contactPersonDesignation,
        contactPersonEmail, contactPersonPhone } = employerData;

    return (
        <div>

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
                                                <div className="title mb-3"><b>Trade License:</b> {tradeLicense}</div>
                                                <div className="title mb-3"><b>Email :</b>  {email}</div>
                                                <div className="title mb-3"><b>Website :</b> {websiteURL}</div>
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
        </div>






    );
};

export default EmployersProfile;
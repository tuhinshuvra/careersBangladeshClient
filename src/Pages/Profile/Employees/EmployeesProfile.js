import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import './EmployeesProfile.css';

const JobSeekerProfile = () => {
    const [employerData, setEmployerData] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    // const employer = useLoaderData();

    // console.log("Employer : ", employer)

    useEffect(() => {
        // fetch(`http://localhost:5000/employeesAggregatedData/${email}`)
        fetch(`http://localhost:5000/employeesAggregatedData/${email}`)
            .then(response => response.json())
            .then(data => {
                // console.log("employeesAggregatedData : ", data[0].empAggreAcademics[0])
                setEmployerData(data)
            })

    }, [email])


    // console.log("employerData : ", employerData[0])
    console.log("empAgrreExperience : ", employerData[0]?.empAgrreExperience[0])
    console.log("empAggreAcademics : ", employerData[0]?.empAggreAcademics[0])
    console.log("empAggreCareers : ", employerData[0]?.empAggreCareers[0])
    console.log("empAggreReferences : ", employerData[0]?.empAggreReferences[0])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/jobSeeker/${email}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log("JobSeeker Data:", data);
    //             setEmployerData(data)
    //         })
    // }, [email])

    // console.log("employerData : ", employerData)

    //    const {name, fathersName, mothersName,birthDete, phone, image, gender, religion, maritialStatus, permanentAddress} = employerData[0];
    // const {   phone, image, gender, religion, maritialStatus, permanentAddress } = employerData[0];
    // const { } = employerData[0]?.empAgrreExperience[0];
    // const { } = employerData[0]?.empAggreAcademics[0]
    // const { } = employerData[0]?.empAggreCareers[0];
    // const { refOneName, refOneDetails, refTwoName, refTwoDetails, other } = employerData[0]?.empAggreReferences[0];

    // const { careerObjective, skill, experience, achivement, qualification, institute, passingYear, linkOne,
    //     linkTwo, linkThree, portfolio, language, } = employerData;


    return (
        <div>

            <article className="resume-wrapper text-center position-relative">
                <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                    <header className="resume-header pt-4">
                        <div className=' d-flex justify-content-evenly'>
                            <div className="col-lg-3 ">
                                <img className="profile_pic" src={employerData[0]?.image} alt="" />
                            </div>
                            {/* <!--//col--> */}
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className=' d-flex justify-content-evenly gap-1 mt-lg-4'>
                                        <div className=' col-lg-8'>
                                            <div className="primary-info col-auto">
                                                <h1 className="name mt-0 mb-1 text-uppercase">{employerData[0]?.name}</h1>
                                                <div className="title mb-3 fw-bold">Full Stack Developer</div>
                                                <h4>Mothers Name: {employerData[0]?.mothersName}</h4>
                                                <h4>Fathers Name: {employerData[0]?.fathersName}</h4>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2"><b>Email:</b> {employerData[0]?.email}</li>
                                                    <li className="mb-2"><b>Phone:</b> {employerData[0]?.phone}</li>
                                                    <li> <b> Portfolio: </b> <a className=' text-decoration-none' href={`${employerData[0]?.portfolio}`} rel="noreferrer" target="_blank" >{employerData[0]?.portfolio}</a> </li>

                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!--//primary-info--> */}
                                        <div className=' col-lg-4'>
                                            <div className="secondary-info col-auto mt-2">
                                                <ul className="resume-social list-unstyled">
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-linkedin-in fa-fw"></i></span>{employerData[0]?.linkOne}</Link></li>
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-github-alt fa-fw"></i></span>{employerData[0]?.linkOne}</Link></li>
                                                    <li className="mb-3"><Link className="text-link text-decoration-none" to="#"><span className="fa-container text-center"><i className="fab fa-codepen fa-fw"></i></span>{employerData[0]?.linkThree}/</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!--//secondary-info--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                            </div>

                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </header>
                    <div className="resume-body p-5">
                        <section className="resume-section summary-section mb-5">
                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                            <div className="resume-section-content">
                                <p>{employerData[0]?.careerObjective}</p>
                            </div>
                        </section>
                        {/* <!--//summary-section--> */}
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                <div className="resume-section-content">
                                    <div className="resume-timeline position-relative">

                                        <div className="resume-timeline-item-header mb-2">
                                            <div className="d-flex flex-column flex-md-row">
                                                <h3 className="resume-position-title font-weight-bold mb-1">Lead Developer</h3>
                                                <h4 className="resume-company-name ms-auto">{employerData[0]?.empAgrreExperience?.expOneCompanayName}</h4>
                                            </div>
                                            {/* <!--//row--> */}
                                            <div className="resume-position-time">2020 - Present</div>
                                        </div>
                                        {/* <!--//resume-timeline-item-header--> */}
                                        <div className="resume-timeline-item-desc">
                                            {employerData[0]?.experience}
                                            <h4 className=" fw-bold my-3">Achievements:</h4>
                                            {employerData[0]?.achivement}
                                            {/* <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p> */}
                                            {/* <ul>
                                                        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                                        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                                        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                                        <li>Maecenas tempus tellus eget.</li>
                                                    </ul> */}
                                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">{employerData[0]?.empAggreCareers?.skillOne}</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">{employerData[0]?.empAggreCareers?.skillTwo}</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">{employerData[0]?.empAggreCareers?.skillThree}</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">{employerData[0]?.empAggreCareers?.skillFour}</span></li>
                                            </ul>
                                        </div>
                                        {/* <!--//resume-timeline-item-desc--> */}
                                        <h2 className=" fw-bold my-3">Skill and Tools</h2>
                                        {employerData[0]?.skill}

                                        <section className="resume-section education-section my-3">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                            <div className="resume-section-content">
                                                <div className='row d-flex'>
                                                    <p className="  "> <b> Degree:</b> {employerData[0]?.qualification}, <b>From :</b> {employerData[0]?.institute}, <b>Passing Year : </b> {employerData[0]?.passingYear}</p>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li className=" my-3 row">
                                                    </li>
                                                    {/* <li>
                                                                <div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
                                                                <div className="resume-degree-org">Imperial College London</div>
                                                                <div className="resume-degree-time">2007 - 2010</div>
                                                            </li> */}
                                                </ul>
                                            </div>
                                        </section>
                                        {/* <!--//education-section--> */}

                                        {/* <section className="resume-section reference-section mb-5">
                                                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                                                    <div className="resume-section-content">
                                                        <ul className="list-unstyled resume-awards-list">
                                                            <li className="mb-2 ps-4 position-relative">
                                                                <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                                <div className="resume-award-name">Award Name Lorem</div>
                                                                <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
                                                            </li>
                                                            <li className="mb-0 ps-4 position-relative">
                                                                <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                                <div className="resume-award-name">Award Name Ipsum</div>
                                                                <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </section> */}
                                        {/* <!--//interests-section--> */}
                                        <section className="resume-section language-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                            <div className="resume-section-content">
                                                <ul className="list-unstyled resume-lang-list">
                                                    <li className="mb-2"><span className="resume-lang-name font-weight-bold">(Native){employerData[0]?.language}</span> <small className="text-muted font-weight-normal"></small></li>
                                                    {/* <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li> */}
                                                    {/* <li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li> */}
                                                </ul>
                                            </div>
                                        </section>
                                        {/* <!--//language-section--> */}
                                        <section className="resume-section interests-section mb-5">
                                            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                            <div className="resume-section-content">
                                                <ul className="list-unstyled">
                                                    <li className="mb-1">Climbing</li>
                                                    <li className="mb-1">Snowboarding</li>
                                                    <li className="mb-1">Cooking</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div>
                                            <h3 className=' fw-bold  my-2'>Refference</h3>
                                            <div className=' d-flex justify-content-between'>

                                                <div className='col-md-4  '>
                                                    <h4> {employerData[0]?.refOneName}</h4>
                                                    <p className=''>{employerData[0]?.refOneDetails}</p>
                                                </div>

                                                <div className='col-md-4  '>
                                                    <h4> {employerData[0]?.refOneName}</h4>
                                                    <p>{employerData[0]?.refOneDetails}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//resume-body--> */}

                </div></article>
        </div>






    );
};

export default JobSeekerProfile;
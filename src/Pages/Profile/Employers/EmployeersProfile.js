import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../../assets/images/employers.jpg';
import './EmployeersProfile.css';

const EmployersProfile = () => {
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
                                                <h1 className="name mt-0 mb-1 text-uppercase">Mohammad Karim</h1>
                                                <p className="title fw-bold">Assistant Manager, Floora Limited </p>
                                                <p className="title fw-bold">1234, Matijheel, Dhaka, Bangladesh</p>
                                                <p className=' fw-bold'>Estd: 2000,    <span> No of Empoyee: 500+ </span></p>
                                                <div className="title mb-3 fw-bold">Website : abcdef.com</div>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2"><Link className="text-link text-decoration-none" to="#"><i className="far fa-envelope fa-fw" data-fa-transform="grow-3"></i>abdedsfsdf@gmail.com</Link></li>
                                                    <li><Link className="text-link text-decoration-none" to="#"><i className="fas fa-mobile-alt fa-fw" data-fa-transform="grow-6"></i>0123 456 78900</Link></li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </header>
                    <div className="resume-body p-5">
                        <section className="resume-section summary-section mb-5">
                            <h2 className="resume-section-title  font-weight-bold pb-3 mb-3">Business Description of Floora Limited</h2>
                            <div className="resume-section-content">
                                <p className="mb-0">Summarise your career here. <Link className="text-reset text-link" to="https://themes.3rdwavemedia.com/resources/sketch-template/pillar-sketch-sketch-resume-template-for-developers/" target="_blank">You can make a PDF version of your resume using our free Sketch template here</Link>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                        </section>
                        {/* <!--//summary-section--> */}
                        <div className="row">
                            <div className="">
                                <section className="resume-section experience-section mb-5">
                                    <h4 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Contact Person</h4>
                                    {/* <div className="resume-timeline position-relative"> */}
                                    <article className="resume-timeline-item position-relative pb-5">

                                        <div className="resume-timeline-item-header mb-2">
                                            <div className=" ">
                                                <p className="resume-position-title fw-bold mb-1">Bellal Hossain, CEO</p>
                                                <p>Phone : 0123445566787</p>
                                                <p>Email : bellalhossain@gmail.com</p>
                                                <p>Phone : 0123445566787</p>
                                            </div>
                                        </div>
                                        {/* <!--//resume-timeline-item-header--> */}

                                        {/* <!--//resume-timeline-item-desc--> */}

                                    </article>
                                    {/* <!--//resume-timeline-item--> */}



                                    {/* </div> */}
                                </section>
                                {/* <!--//experience-section--> */}
                            </div>

                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//resume-body--> */}

                </div></article>
        </div>






    );
};

export default EmployersProfile;
import React from 'react';
import { FaBriefcase, FaBuilding, FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostedJobDetails = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className=' d-md-flex justify-content-between'>
                        <h4 className="card-title fw-bold">Full Stack Web Developer</h4>
                        <p className="fw-bold">Gorgeous Banaladesh Ltd, Dhaka, Bangladesh, (On Site)</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold d-flex justify-content-center align-items-center'><FaBriefcase className='fs-5 mx-1'></FaBriefcase>Full-time</p>
                        <p className='fw-bold d-flex justify-content-center align-items-center d-none d-md-block'><FaBuilding className='fs-5 mx-1'></FaBuilding>51-200 employees</p>
                        <p className='fw-bold d-flex justify-content-center align-items-center'><FaCalculator className='fs-5 mx-1'></FaCalculator>Posted: 01/02/2023</p>
                    </div>

                    <p>
                        <b> Job Context</b> <br />
                        <ul>
                            <li>We are looking for a proactive and passionate Full Stack Web Developer,</li>
                            <li>We look for candidates who are passionate about technology and how they can leverage,</li>
                            <li>their skills in solving the problems. You will assume a strong sense of ownership of the product: design, develop & deploy.</li>
                        </ul>
                    </p>

                    <p>
                        <b> Job Responsibilities</b>
                        <ul>
                            <li> Developing Websites for client's Business & Other organizations. </li>
                            <li>
                                Knowledge of front-end technologies, such as HTML5, Bootstrap 4.5/5, CSS3, JavaScript.
                            </li>
                            <li>
                                knowledge of PHP.
                            </li>
                            <li>
                                Experience with the Laravel Framework.
                            </li>
                            <li>
                                Familiarity with SQL/NoSQL databases and their declarative query languages
                            </li>
                            <li>
                                Experienced in one or more of the following - React.js (preferred) , Angular.js , Vue.js

                            </li>
                            <li>
                                Proficient understanding of code versioning tools, such as Git
                            </li>
                            <li>
                                Expertise in Wordpress.
                            </li>
                            <li>
                                Basic Konowledge of Other CMS.
                            </li>
                        </ul>
                    </p>


                    <b> Workplace</b>
                    <ul>
                        <li>
                            Work at office
                        </li>
                    </ul>


                    <p>
                        <b> Educational Requirements</b>
                        <ul>
                            <li>
                                Bachelor of Science (BSc) in Computer Science and Engineering
                            </li>
                        </ul>
                    </p>

                    <p>
                        <b> Experience Requirements</b>
                        <ul>
                            <li>
                                At least 2 year(s)
                            </li>
                        </ul>
                    </p>


                    <p>
                        <b> Additional Requirements</b>
                        <ul>
                            <li>
                                Age at least 25 years
                            </li>
                            <li>
                                Both males and females are allowed to apply
                            </li>

                        </ul>
                    </p>

                    <p>
                        <b> Job Location</b> <br />
                        Dhaka, Dhaka (Rampura)
                    </p>

                    <p>
                        <b>Salary</b> <br />
                        Tk. 25000 - 35000 (Monthly)
                    </p>

                    <p>
                        <b>Employment Status</b>
                        <ul>
                            <li>
                                Sunday to Thursday
                            </li>
                            <li>
                                Full- Time (10.00 AM – 6.00 PM)
                            </li>
                        </ul>
                    </p>

                    <p>
                        <b>Benefits</b>
                        <ul>
                            <li>
                                Mobile bill, launch
                            </li>
                            <li>
                                Snacks, Unlimited Tea & Coffee
                            </li>
                            <li>
                                Salary Review: Yearly
                            </li>
                            <li>
                                Festival Bonus: 2 per year
                            </li>
                            <li>
                                Working Environment
                            </li>
                        </ul>
                    </p>




                    <p>
                        <b>Job Source</b><br />
                        careersbangladesh.com Online Job Posting.
                    </p>


                    <div className='d-flex justify-content-center'>
                        <Link to="/"> <button type="button" className=" custom_btn mx-1"> Apply Now</button></Link>
                        <Link to="/"> <button type="button" className=" custom_btn mx-1"> Save</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJobDetails;
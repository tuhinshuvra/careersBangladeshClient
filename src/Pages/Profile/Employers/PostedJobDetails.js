import React from 'react';
import { Link } from 'react-router-dom';

const PostedJobDetails = () => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <div className=' d-flex justify-content-between'>

                        <h4 class="card-title fw-bold">Full Stack Web Developer</h4>
                        <h5 class="card-title fw-bold">Gorgeous Banaladesh Limited</h5>
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



                    <p>
                        <b> Employment Status</b> <br />
                        Full-time
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

                    <b> Compensation & Other Benefits</b>
                    <ul>
                        <li>
                            Festival Bonus: 2
                        </li>
                        <li>
                            Weekly 1 holiday
                        </li>
                        <li>
                            Salary Review: Yearly
                        </li>


                    </ul>

                    <p>
                        <b>Job Source</b><br />
                        careersbangladesh.com Online Job Posting.
                    </p>


                    <div className='d-flex justify-content-center'>
                        <Link to="/"> <button type="button" class=" custom_btn"> Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJobDetails;
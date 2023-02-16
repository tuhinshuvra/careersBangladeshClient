import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaBookmark, FaBriefcase, FaBuilding, FaCalculator } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useEmployer from '../../../hooks/useEmployer';
import useJobSeeker from '../../../hooks/useJobSeeker';
import { AuthContext } from '../../Authentication/AuthProvider';
import './PostedJobDetails.css';

const PostedJobDetails = () => {
    const jobdetails = useLoaderData();
    const navigate = useNavigate();

    console.log("jobdetails : ", jobdetails)
    const [jobPosts, setJobPosts] = useState([]);
    const { user } = useContext(AuthContext);

    const [isEmployer] = useEmployer(user?.email);
    const [isJobSeeker] = useJobSeeker(user?.email);

    const email = user?.email;

    const employer = useLoaderData();

    // console.log("Employer : ", employer)


    const { _id, postersEmail, postersName, jobTitle, companyLogo, organization, vacancies, category, deadLine, education, experience, postDate, applyStatus, employmentStatus, businessDescription, jobLevel, workPlace, jobContext,
        jobResponst, location, salaryFrom, salaryTo, yearlyBonus, salaryReview, others } = jobdetails;

    console.log("jobsData : ", jobPosts)

    const applicationDate = new Date().toJSON().slice(0, 10);

    const handleApply = (data) => {
        console.log("Applied jobdetails :", jobdetails);
        const jobApply = {
            jobId: _id,
            email: user.email,
            name: user.displayName,
            postersEmail: postersEmail,
            jobTitle: jobTitle,
            organization: organization,
            category: category,
            applicationDate: applicationDate
        }
        console.log("Job Post Data :", jobApply);

        fetch('https://careers-bangladesh-server.vercel.app/applications', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApply)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast('Post the appliction successfully');
                navigate("/findJobs")
            })
    }

    const handleJobSave = (data) => {
        console.log("Saved Job Details :", jobdetails);
        const savedJob = {
            jobId: _id,
            email: user.email,
            name: user.displayName,
            postersEmail: postersEmail,
            jobTitle: jobTitle,
            organization: organization,
            category: category,
            savedDate: applicationDate
        }

        console.log("Job Post Data :", savedJob);

        fetch('https://careers-bangladesh-server.vercel.app/savedjobs', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(savedJob)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast('The Job Saved Successfully');
                navigate("/dashboard/savedJobs")
            })
    }



    return (
        <div>
            <div className="card">
                <div>
                    <div className=' float-end'>
                        {
                            isEmployer &&

                            <div className=' d-flex'>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        <b>Active</b>
                                    </label>
                                </div>
                                <div class="form-check mx-2">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label class="form-check-label" for="exampleRadios2">
                                        <b> Inactive</b>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                    <label class="form-check-label" for="exampleRadios3">
                                        <b> Close</b>
                                    </label>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="card-body">


                    <div className=' d-md-flex justify-content-between my-4'>
                        <div className=' d-flex'>
                            <img className='companyLogo ' src={companyLogo} alt="" />
                            <h3 className=' fw-bold mx-1'>{organization}</h3>
                        </div>
                        <div className='d-flex'>
                            <h5 className="fw-bold">{jobTitle},   {location}, (On Site)</h5>

                            {
                                isJobSeeker &&
                                <Link onClick={() => handleJobSave(jobdetails)} to="/"> <FaBookmark className='fs-5 mx-1 float-end fs-2 text-info '></FaBookmark> </Link>
                            }

                        </div>
                    </div>



                    <div className='d-flex justify-content-between'>
                        <p className='fw-bold d-flex justify-content-center align-items-center'><FaBriefcase className='fs-5 mx-1'></FaBriefcase>Full-time</p>
                        <p className='fw-bold d-flex justify-content-center align-items-center d-none d-md-block'><FaBuilding className='fs-5 mx-1'></FaBuilding>51-200 employees</p>
                        <p className='fw-bold d-flex justify-content-center align-items-center'><FaCalculator className='fs-5 mx-1'></FaCalculator>Posted: {postDate}</p>
                    </div>



                    <p>
                        <b> Job Context</b> <br />
                        {jobContext}
                        {/* <ul>
                            <li>We are looking for a proactive and passionate Full Stack Web Developer,</li>
                            <li>We look for candidates who are passionate about technology and how they can leverage,</li>
                            <li>their skills in solving the problems. You will assume a strong sense of ownership of the product: design, develop & deploy.</li>
                        </ul> */}
                    </p>

                    <p>
                        <b> Job Responsibilities</b> <br />
                        {jobResponst}
                        {/* <ul>
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
                        </ul> */}
                    </p>


                    <b> Workplace</b>
                    <ul>
                        <li>
                            {workPlace}
                        </li>
                    </ul>


                    <p>
                        <b> Educational Requirements</b>
                        <ul>
                            <li>
                                {education}
                            </li>
                        </ul>
                    </p>

                    <p>
                        <b> Experience Requirements</b>
                        <ul>
                            <li>
                                {experience}
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
                        {location}
                    </p>

                    <p>
                        <b>Salary</b> <br />
                        Tk. {salaryFrom} - {salaryTo} (Monthly)
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

                    {
                        isJobSeeker &&
                        <div className='d-flex justify-content-center'>
                            <Link onClick={() => handleApply(jobdetails)} to="/"> <button type="button" className=" custom_btn mx-1"> Apply Now</button></Link>

                            {/* <Link to="/"> <button type="button" className=" custom_btn mx-1"> Save</button></Link> */}
                        </div>
                    }








                </div>
            </div>
        </div>
    );
};

export default PostedJobDetails;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../EmployeesProfile.css';

const JobSeekersProfileEntry = () => {

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Create Profile</h2>
            <div className=' d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Employee profile button group">

                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to="/dashboard/employeesPersonalDetailsEntry"
                            className=' text-decoration-none'
                        >Personal Details
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to="/dashboard/employeesExperienceDataEntry"
                            className=' text-decoration-none'
                        >Experience
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to="/dashboard/employeesAcademicAndTrainingEntry"
                            className=' text-decoration-none'
                        >Academic and Training
                        </Link>

                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to="/dashboard/employeesCareersAndSkillEntry"
                            className=' text-decoration-none'
                        > Career and Skilll
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to="/dashboard/employeesLanguageAndReferenceEntry"
                            className=' text-decoration-none'
                        > Language and Reference
                        </Link>
                    </button>

                </div>
            </div>
        </div >
    );
};

export default JobSeekersProfileEntry;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import '../JobSeekersProfile.css';

const JobSeekersProfileManage = () => {

    const { user } = useContext(AuthContext);
    // console.log("User Id :", user.email)

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Manage Profile</h2>
            <div className=' d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Employee profile button group">

                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesPersonalDetails/${user?.email}`}
                            className=' text-decoration-none'
                        >Personal
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesAcademicsAndTraining/${user?.email}`}
                            className=' text-decoration-none'
                        >Education/Training
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesCareersAndSkill/${user?.email}`}
                            className=' text-decoration-none'
                        > Career and Skilll
                        </Link>
                    </button>

                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesExperiences/${user?.email}`}
                            className=' text-decoration-none'
                        >Experience
                        </Link>
                    </button>

                    <button type="button" className="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesLanguagesAndReferences/${user?.email}`}
                            className=' text-decoration-none'
                        > Language and Reference
                        </Link>
                    </button>

                </div>
            </div>
        </div >
    );
};

export default JobSeekersProfileManage;
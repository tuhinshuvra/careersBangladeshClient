import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import '../EmployeesProfile.css';

const EmployeesProfileManage = () => {

    const { user } = useContext(AuthContext);
    // console.log("User Id :", user.email)

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Manage Profile</h2>
            <div className=' d-flex justify-content-center'>
                <div class="btn-group" role="group" aria-label="Employee profile button group">

                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesPersonalDetails/${user?.email}`}
                            className=' text-decoration-none'
                        >Personal Details
                        </Link>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesExperiences/${user?.email}`}
                            className=' text-decoration-none'
                        >Experience
                        </Link>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesAcademicsAndTraining/${user?.email}`}
                            className=' text-decoration-none'
                        >Academic and Training
                        </Link>
                    </button>

                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesCareersAndSkill/${user?.email}`}
                            className=' text-decoration-none'
                        > Career and Application
                        </Link>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
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

export default EmployeesProfileManage;
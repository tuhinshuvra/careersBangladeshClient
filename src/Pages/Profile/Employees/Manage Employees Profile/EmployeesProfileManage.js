import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
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
                            to={`/dashboard/employeesAcademics/${user?.email}`}
                            className=' text-decoration-none'
                        >Academic and Training
                        </Link>

                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesCareers/${user?.email}`}
                            className=' text-decoration-none'
                        > Career and Application
                        </Link>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <Link
                            to={`/dashboard/employeesReferences/${user?.email}`}
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
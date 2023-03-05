import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import '../../JobSeekers/JobSeekersProfile.css';
import JobSeekersProfileEntry from './JobSeekersProfileEntry';

const JobSeekersLanguageAndReferenceEntry = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    // console.log("imageBBHostKey  : ", imageHostKey)


    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobCategories');
            const data = await res.json();
            return data;
        }
    })

    const handleJobSeekerProfile = (data) => {


        const jobseekerProfile = {
            email: user.email,
            name: user.displayName,

            languOne: data.languOne,
            writingOne: data.writingOne,
            readingOne: data.readingOne,
            speakingOne: data.speakingOne,

            languTwo: data.languTwo,
            writingTwo: data.writingTwo,
            readingTwo: data.readingTwo,
            speakingTwo: data.speakingTwo,


            languThree: data.languThree,
            readingThree: data.readingThree,
            writingThree: data.writingThree,
            speakingThree: data.speakingThree,

            refOneName: data.ref_one_name,
            refOneDetails: data.ref_one_details,
            refTwoName: data.ref_two_name,
            refTwoDetails: data.ref_two_details,

            other: data.other,

        }
        // console.log("Job Seeker Data :", data);

        fetch('http://localhost:5000/employeesReferences', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobseekerProfile)
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success(`${user.displayName} Language and Reference Data Saved Successfully`)
                    navigate("/dashboard/jobSeekerProfileEntry");
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <div>
            <JobSeekersProfileEntry></JobSeekersProfileEntry>
            <h2 className=" text-center fw-bold my-4">Employees Language and Reference Data</h2>

            {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
            <form onSubmit={handleSubmit(handleJobSeekerProfile)} >

                <div>
                    <div className=' d-flex justify-content-between'>
                        <h4 className="label-text text-md fw-bold">Language Proficiency</h4>
                        <p className=' float-end '> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p>
                    </div>

                    {/* language one  */}
                    <div className='row'>
                        <h5 className="label-text text-md fw-bold mb-2">Language One</h5>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Language <span className="star">&#x2605;</span></span>
                            <input
                                {...register("languOne", { required: true })}
                                name='languOne'
                                id='languOne'
                                className='input form-control'
                                type="text"
                                placeholder='Enter Language'
                            />
                        </div>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Reading<span className="star">&#x2605;</span></span>
                            <select
                                {...register("readingOne", { required: 'true' })}
                                name="readingOne"
                                id="readingOne"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Writing<span className="star">&#x2605;</span></span>
                            <select
                                {...register("writingOne", { required: 'true' })}
                                name="writingOne"
                                id="writingOne"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Speaking<span className="star">&#x2605;</span></span>
                            <select
                                {...register("speakingOne", { required: 'true' })}
                                name="speakingOne"
                                id="speakingOne"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>



                    {/* language two */}
                    <div className='row'>
                        <h5 className="label-text text-md fw-bold mb-2">Language Two</h5>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Language</span>
                            <input
                                {...register("languTwo",)}
                                name='languTwo'
                                id='languTwo'
                                className='input form-control'
                                type="text"
                                placeholder='Enter Language'
                            />
                        </div>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Reading</span>
                            <select
                                {...register("readingTwo")}
                                name="readingTwo"
                                id="readingTwo"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Writing</span>
                            <select
                                {...register("writingTwo")}
                                name="writingTwo"
                                id="writingTwo"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Speaking</span>
                            <select
                                {...register("speakingTwo")}
                                name="speakingTwo"
                                id="speakingTwo"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>



                    {/* language three */}
                    <div className='row'>
                        <h5 className="label-text text-md fw-bold mb-2">Language Three</h5>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Language</span>
                            <input
                                {...register("languThree",)}
                                name='languThree'
                                id='languThree'
                                className='input form-control'
                                type="text"
                                placeholder='Enter Language'
                            />
                        </div>
                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Reading</span>
                            <select
                                {...register("readingThree",)}
                                name="readingThree"
                                id="readingThree"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Writing</span>
                            <select
                                {...register("writingThree",)}
                                name="writingThree"
                                id="writingThree"
                                className="form-select select-bordered  ">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className=' col-md-3 mb-3'>
                            <span className="label-text text-md fw-bol ">Speaking</span>
                            <select
                                {...register("speakingThree",)}
                                name="speakingThree"
                                id="speakingThree"
                                className="form-select select-bordered">
                                <option>-Select-</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>


                    {/* Language Section end */}


                    {/* Refference area start */}

                    <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Refference</h4>
                    <div className="row my-4">
                        <div className=' col-md-6'>
                            <div className=' mb-3'>
                                <span className="label-text text-md fw-bold  mb-3">Refference One Name</span>
                                <input
                                    {...register("ref_one_name",)}
                                    name='ref_one_name'
                                    className='input form-control '
                                    id="ref_one_name"
                                    type="text"
                                    placeholder='Enter Refference One Name'
                                />
                            </div>

                            <div className=''>
                                <span className="label-text text-md fw-bold">Refference One Details</span>
                                <textarea {...register("ref_one_details",)}
                                    name='ref_one_details'
                                    className='input form-control '
                                    id='ref_one_details' type="text"
                                    placeholder='Enter Refference One Details'
                                />
                            </div>
                        </div>


                        <div className=' col-md-6 mb-3'>
                            <div className='  mb-3 '>
                                <span className="label-text text-md fw-bold  ">Refference Two Name</span>
                                <input
                                    {...register("ref_two_name",)}
                                    name='ref_two_name'
                                    className='input form-control '
                                    id="ref_two_name"
                                    type="text"
                                    placeholder='Enter Refference Two Name'
                                />
                            </div>


                            <div className='  '>
                                <span className="label-text text-md fw-bold  ">Refference Two Details</span>
                                <div>
                                    <textarea {...register("ref_two_details",)}
                                        name='ref_two_details'
                                        className='input form-control '
                                        id='ref_two_details' type="text"
                                        placeholder='Enter Refference Two Details'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Refference area end */}


                    <h4 className="label-text text-md fw-bold  text-center ">Other</h4>
                    <div>
                        <textarea {...register("other")}
                            name='other'
                            className='input form-control '
                            id='other' type="text"
                            placeholder='Enter Other Relevant Information'
                        />
                    </div>

                </div>

                <div className=' d-flex justify-content-between my-lg-5'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form >
        </div >
    );
};

export default JobSeekersLanguageAndReferenceEntry;
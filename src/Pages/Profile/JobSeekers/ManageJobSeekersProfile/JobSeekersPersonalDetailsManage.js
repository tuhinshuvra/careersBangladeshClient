import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import JobSeekersProfileManage from './JobSeekersProfileManage';

const JobSeekersPersonalDetailsManage = () => {
    // const { user } = useContext(AuthContext)

    const storedData = useLoaderData();
    const [personalDetails, setPersonalDetails] = useState(storedData);

    // console.log("personalDetails : ", personalDetails);

    // const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;


    const handleUpdatePersonalDoc = (event) => {
        event.preventDefault();

        console.log("personalDetails :", personalDetails)

        fetch(`http://localhost:5000/employeesPersonal/${storedData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(personalDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Updated Data :", data)
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated Successfully.');
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newData = { ...personalDetails }
        newData[field] = value;
        setPersonalDetails(newData);
    }


    return (
        <div>


            <JobSeekersProfileManage></JobSeekersProfileManage>

            <div>
                {/* <h2>Personal Details</h2> */}

                <h4 className="label-text text-md fw-bold  text-center my-3">Personal Details</h4>

                <div className=' d-flex justify-content-end'>
                    <p className=''> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p>
                </div>

                <form onSubmit={handleUpdatePersonalDoc} >
                    <div className="row ">
                        <div className='col-md-6 mb-3 mb-3'>
                            <span className="label-text text-md fw-bold">Father's Name <span className="star">&#x2605;</span></span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.fathersName}
                                name='fathersName'
                                className='input form-control '
                                id="fathersName"
                                type="text"
                            />
                        </div>

                        <div className='col-md-6 mb-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Mother's Name<span className="star">&#x2605;</span></span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.mothersName}
                                name='mothersName'
                                className='input form-control '
                                id="mothersName"
                                type="text"
                            />
                        </div>


                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Nationality<span className="star">&#x2605;</span></span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.nationality}
                                name='nationality'
                                className='input form-control '
                                id="nationality"
                                type="text"
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">National Id No.</span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.nationalId}
                                name='nationalId'
                                className='input form-control '
                                id="nationalId"
                                type="text"
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Phone<span className="star">&#x2605;</span></span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.phone}
                                name='phone'
                                className='input form-control '
                                id="phone"
                                type="text"
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Date of Birth<span className="star">&#x2605;</span></span>
                            <input
                                onChange={handleInputChange}
                                defaultValue={storedData.birthDate}
                                name='birthDate'
                                className='input form-control '
                                id="birthDate"
                                type="date"
                            />
                        </div>

                        <div className="row">
                            <div className='col-md-3 mb-3  '>
                                <span className="label-text text-md fw-bold  ">Gender<span className="star">&#x2605;</span></span>
                                <select
                                    onChange={handleInputChange}
                                    name="gender"
                                    className="form-select  ">
                                    <option defaultValue={storedData.gender}>{storedData.gender}</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className='col-md-3 mb-3 '>
                                <span className="label-text text-md fw-bold  ">Religion</span>
                                <select
                                    onChange={handleInputChange}
                                    name="religion"
                                    className="form-select select-bordered">
                                    <option defaultValue={storedData.religion}>{storedData.religion}</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Buddhism">Buddhism</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Christianity">Christianity</option>
                                    <option value="Judaism">Judaism</option>
                                    <option value="Irreligion">Irreligion</option>
                                    <option value="Folk religions">Folk religions</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className='col-md-3 mb-3 '>
                                <span className={`label-text text-md fw-bold`}>Marital Status</span>
                                <select
                                    onChange={handleInputChange}
                                    name="maritalStatus"
                                    className="form-select select-bordered">

                                    <option defaultValue={storedData.maritalStatus}>{storedData.maritalStatus}</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Separated">Separated</option>
                                    <option value="Divorced">Divorced</option>
                                </select>
                            </div>


                            <div className='col-md-3 mb-3 '>
                                <span className="label-text text-md fw-bold  ">Photo<span className="star">&#x2605;</span></span>
                                <input
                                    // onChange={handleInputChange}
                                    name='image'
                                    className='input form-control '
                                    id="image"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className=' col-md-6 mb-3'>
                            <span className="label-text text-md fw-bold ">Present Address<span className="star">&#x2605;</span></span>
                            <div>
                                <textarea
                                    defaultValue={storedData.presentAddress}
                                    name='presentAddress'
                                    className='input form-control '
                                    id='presentAddress' type="text"
                                />
                            </div>
                        </div>
                        <div className=' col-md-6 mb-3'>
                            <span className="label-text text-md fw-bold  ">Permanent Address</span>
                            <div>
                                <textarea
                                    onChange={handleInputChange}
                                    defaultValue={storedData.permanentAddress}
                                    name='permanentAddress'
                                    className='input form-control '
                                    id='permanentAddress'
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 '>
                        <span className="label-text text-md fw-bold text-center ">Career Objective<span className="star">&#x2605;</span></span>
                        <div className=' '>
                            <textarea
                                onChange={handleInputChange}
                                defaultValue={storedData.careerObjective}
                                name='careerObjective'
                                className='input form-control '
                                id='career_objective' type="text"
                                placeholder='Enter Career Objective'
                            />
                        </div>
                    </div>

                    <div className=' d-flex justify-content-between my-lg-5'>
                        <button className="btn btn-warning fw-bold">Cancel</button>
                        <button type='submit' name='submit' className="custom_btn">Save</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default JobSeekersPersonalDetailsManage;
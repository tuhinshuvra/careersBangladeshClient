import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import EmployeesProfileEntry from './EmployeesProfileEntry';

const EmployeesPersonalDetailsEntry = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;


    const handleJobSeekerProfile = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const employeesPersonal = {
                        email: user.email,
                        name: user.displayName,

                        skill: data.skill,
                        fathersName: data.fathers_name,
                        mothersName: data.mothers_name,
                        nationality: data.nationality,
                        nationalId: data.nationalId,
                        phone: data.phone,
                        birthDete: data.birth_dete,
                        gender: data.gender,
                        religion: data.religion,
                        maritialStatus: data.maritial_status,
                        image: imgData.data.url,
                        presentAddress: data.present_addres,
                        permanentAddress: data.permanent_address,
                        careerObjective: data.career_objective,
                    }
                    // console.log("Job Seeker Data :", data);

                    fetch('http://localhost:5000/employeesPersonal', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(employeesPersonal)
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data)
                                toast.success(`${user.displayName} Profile Data Saved Successfully`)
                                navigate("/dashboard/jobSeekerProfile");
                            }
                            else {
                                toast.error(data.message)
                            }
                        })
                }
            })
    }



    return (
        <div>

             
             <EmployeesProfileEntry></EmployeesProfileEntry>

            <div>
                {/* <h2>Personal Details</h2> */}

                <h4 className="label-text text-md fw-bold  text-center">Personal Details</h4>

                <div className=' d-flex justify-content-end'>
                    <p className=''> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p>
                </div>

                <form onSubmit={handleSubmit(handleJobSeekerProfile)} >
                    <div className="row ">
                        <div className='col-md-6 mb-3 mb-3'>
                            <span className="label-text text-md fw-bold">Father's Name <span className="star">&#x2605;</span></span>
                            <input
                                {...register("fathers_name", { required: true })}
                                name='fathers_name'
                                className='input form-control '
                                id="fathers_name"
                                type="text"
                                placeholder='Enter Fathers Name'
                            />
                        </div>

                        <div className='col-md-6 mb-3 mb-3'>
                            <span className="label-text text-md fw-bold  ">Mother's Name<span className="star">&#x2605;</span></span>
                            <input
                                {...register("mothers_name", { required: true })}
                                name='mothers_name'
                                className='input form-control '
                                id="mothers_name"
                                type="text"
                                placeholder='Enter Mothers Name'
                            />
                        </div>


                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Nationality<span className="star">&#x2605;</span></span>
                            <input
                                {...register("nationality",)}
                                name='nationality'
                                className='input form-control '
                                id="nationality"
                                type="text"
                                placeholder='Enter nationality'
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">National Id No.</span>
                            <input
                                {...register("nationalId",)}
                                name='nationalId'
                                className='input form-control '
                                id="nationalId"
                                type="text"
                                placeholder='Enter nationalId No'
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Phone<span className="star">&#x2605;</span></span>
                            <input
                                {...register("phone", { required: true })}
                                name='phone'
                                className='input form-control '
                                id="phone"
                                type="text"
                                placeholder='Enter Phone No'
                            />
                        </div>

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Date of Birth<span className="star">&#x2605;</span></span>
                            <input
                                {...register("birth_dete", { required: true })}
                                name='birth_dete'
                                className='input form-control '
                                id="birth_date"
                                type="date"
                            />
                        </div>

                        <div className="row">
                            <div className='col-md-3 mb-3  '>
                                <span className="label-text text-md fw-bold  ">Gender<span className="star">&#x2605;</span></span>
                                <select
                                    {...register("gender")}
                                    name="gender"
                                    className="form-select  ">
                                    <option>-Select Gender-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className='col-md-3 mb-3 '>
                                <span className="label-text text-md fw-bold  ">Religion</span>
                                <select
                                    {...register("religion")}
                                    name="religion"
                                    className="form-select select-bordered  ">
                                    <option>-Select Religion-</option>
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
                                    {...register("maritial_status")}
                                    name="marital_status"
                                    id="marital_status"
                                    className="form-select select-bordered">

                                    <option>-Select Marital Status-</option>
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
                                    {...register("image", { required: true })}
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
                                <textarea {...register("present_address", { required: true })}
                                    name='present_address'
                                    className='input form-control '
                                    id='present_address' type="text"
                                    placeholder='Write Your Pressent Address'
                                />
                            </div>
                        </div>
                        <div className=' col-md-6 mb-3'>
                            <span className="label-text text-md fw-bold  ">Permanent Address</span>
                            <div>
                                <textarea {...register("permanent_address",)}
                                    name='permanent_address'
                                    className='input form-control '
                                    id='permanent_address' type="text"
                                    placeholder='Write Your Permanent Address'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 '>
                        <span className="label-text text-md fw-bold text-center ">Career Objective<span className="star">&#x2605;</span></span>
                        <div className=' '>
                            <textarea {...register("career_objective", { required: true })}
                                name='career_objective'
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

export default EmployeesPersonalDetailsEntry;
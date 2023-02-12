import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';

const JobSeekerProfileEntry = () => {

    const { user } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleJobSeekerProfile = (data) => {
        const jobseekerProfile = {
            email: user.email,
            name: user.displayName,
            companyNameEn: data.company_name_en,
            companyNameBn: data.company_name_bn,
            estdYear: data.estd_year,
            companySize: data.company_size,
            addressEng: data.address_en,
            addressBng: data.address_bn,
            busiDescription: data.busi_description,
            tradeLicense: data.trade_license,
            websiteURL: data.website_url,
            contactPersonName: data.contact_person_name,
            contactPersonDesignation: data.contact_person_designation,
            contactPersonEmail: data.contact_person_email,
            contactPersonPhone: data.contact_person_phone,
        }
        console.log("Employee Data :", data);

        fetch('http://localhost:5000/jobseekerProfile', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobseekerProfile)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">
                Job Seeker Profile Entry
            </h2>

            <form onSubmit={handleSubmit(handleJobSeekerProfile)} >

                <span className="label-text text-md font-bold ">Career Objective</span>
                <div>
                    <textarea {...register("career_objective", { required: true })}
                        name='career_objective'
                        className='input form-control my-lg-3'
                        id='career_objective' type="text"
                        placeholder='Enter Career Objective'
                    />
                </div>

                <span className="label-text text-md font-bold ">Obtained Skill</span>
                <div>
                    <textarea {...register("skill", { required: true })}
                        name='skill'
                        className='input form-control my-lg-3'
                        id='skill' type="text"
                        placeholder='Enter Obtained Skill'
                    />
                </div>




                <span className="label-text text-md font-bold ">Experience</span>
                <div>
                    <textarea {...register("experience", { required: true })}
                        name='experience'
                        className='input form-control my-lg-3'
                        id='experience' type="text"
                        placeholder='Enter Experience'
                    />
                </div>

                <span className="label-text text-md font-bold ">Achivement</span>
                <div>
                    <textarea {...register("achivement", { required: true })}
                        name='achivement'
                        className='input form-control my-lg-3'
                        id='achivement' type="text"
                        placeholder='Enter achivement'
                    />
                </div>

                <div className="row my-4">
                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Date of Birth</span>
                        <input
                            {...register("birth_dath", { required: true })}
                            name='birth_dath'
                            className='input form-control my-lg-3'
                            id="birth_dath"
                            type="date"
                        />
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Qualification</span>
                        <input
                            {...register("qualification", { required: true })}
                            name='qualification'
                            className='input form-control my-lg-3'
                            id="qualification"
                            type="text"
                            placeholder='Enter last obtain degree'
                        />
                    </div>



                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Passing Year</span>
                        <input
                            {...register("passing_year", { required: true })}
                            name='passing_year'
                            className='input form-control my-lg-3'
                            id="passing_year"
                            type="date"
                        />
                    </div>
                </div>

                <span className="label-text text-md font-bold ">Language</span>
                <input
                    {...register("language", { required: true })}
                    name='language'
                    className='input form-control my-lg-3'
                    id="language"
                    type="text"
                    placeholder='Enter skilld language'
                />

                <div className="row my-4">
                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Father's Name</span>
                        <input
                            {...register("fathers_name", { required: true })}
                            name='fathers_name'
                            className='input form-control my-lg-3'
                            id="fathers_name"
                            type="text"
                            placeholder='Enter Fathers Name'
                        />
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Mother's Name</span>
                        <input
                            {...register("mothers_name", { required: true })}
                            name='mothers_name'
                            className='input form-control my-lg-3'
                            id="mothers_name"
                            type="text"
                            placeholder='Enter Mothers Name'
                        />
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Phone</span>
                        <input
                            {...register("phone", { required: true })}
                            name='phone'
                            className='input form-control my-lg-3'
                            id="phone"
                            type="text"
                            placeholder='Enter Phone No'
                        />
                    </div>
                </div>

                <div className="row my-4">
                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Gender</span>
                        <select
                            {...register("gender")}
                            name="gender"
                            className="form-select">
                            <option disabled selected>Select</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Regigion</span>
                        <select
                            {...register("religion")}
                            name="religion"
                            className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>Buddhism</option>
                            <option value={1}>Hinduism</option>
                            <option value={2}>Islam</option>
                            <option value={3}>Christianity</option>
                            <option value={4}>Judaism</option>
                            <option value={5}>Irreligion</option>
                            <option value={6}>Folk religions</option>
                            <option value={99}>Others</option>
                        </select>
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Marital Status</span>
                        <select
                            {...register("maritial_status")}
                            name="maritial_status"
                            className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>Married</option>
                            <option value={1}>Unmarried</option>
                            <option value={2}>Single</option>
                        </select>
                    </div>
                </div>

                <span className="label-text text-md font-bold ">Present Address</span>
                <div>
                    <textarea {...register("present_address", { required: true })}
                        name='present_address'
                        className='input form-control my-lg-3'
                        id='present_address' type="text"
                        placeholder='Write Your Pressent Address'
                    />
                </div>

                <span className="label-text text-md font-bold ">Permanent Address</span>
                <div>
                    <textarea {...register("permanent_address", { required: true })}
                        name='permanent_address'
                        className='input form-control my-lg-3'
                        id='permanent_address' type="text"
                        placeholder='Write Your Permanent Address'
                    />
                </div>


                <span className="label-text text-md font-bold ">Other</span>
                <div>
                    <textarea {...register("other", { required: true })}
                        name='other'
                        className='input form-control my-lg-3'
                        id='other' type="text"
                        placeholder='Enter Other Relevant Information'
                    />
                </div>



                <div className=' d-flex justify-content-between my-lg-5'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default JobSeekerProfileEntry;
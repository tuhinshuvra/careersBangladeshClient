import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const NewJobPost = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobCategories');
            const data = await res.json();
            return data;
        }
    })

    const jobPostDate = new Date().toJSON().slice(0, 10);

    const handleJobPost = (data) => {
        const image = data.company_logo[0];
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


                    const jobPost = {
                        email: user.email,
                        postersName: user.displayName,
                        category: data.category,
                        jobTitle: data.job_title,
                        companyLogo: imgData.data.url,
                        organization: data.organization,
                        orgaType: data.orgaType,
                        location: data.location,
                        vacancies: data.vacancies,
                        education: data.education,
                        experience: data.experience,
                        companySize: data.company_size,
                        postDate: jobPostDate,
                        deadLine: data.deadline,
                        applyStatus: data.apply_status,
                        employmentStatus: data.employment_status,
                        businessDescription: data.business_description,
                        jobLevel: data.job_level,
                        workPlace: data.work_place,
                        jobContext: data.job_context,
                        jobResponst: data.job_responst,
                        salaryFrom: data.salary_from,
                        salaryTo: data.salary_to,
                        yearlyBonus: data.yearly_bonus,
                        salaryReview: data.salary_review,
                        status: data.status,
                        others: data.others,
                    }
                    console.log("Job Post Data :", jobPost);

                    fetch('http://localhost:5000/jobs', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(jobPost)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            toast('Job Posted Successfully');
                            navigate("/dashboard/postedJobList")
                        })
                }
            })
    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-3">
                Let's Post Job Information
            </h2>

            <form onSubmit={handleSubmit(handleJobPost)}>

                <div className=' row'>

                    <div className=' col-md-6 my-2'>
                        <label className="label"><span className="label-text fw-bold">Company Name</span> </label>
                        <input
                            {...register("organization", { required: true })}
                            name="organization"
                            className='input form-control'
                            id="organization"
                            type="text"
                            placeholder='Enter Orzation Name'
                        />
                    </div>

                    <div className=' col-md-3 my-2'>
                        <label htmlFor="company_logo"> <b> Company Type</b></label>
                        <select
                            {...register("orgaType")}
                            name='orgaType'
                            className="form-select">
                            <option disabled selected>-Select Type-</option>
                            <option value="Government">Government</option>
                            <option value="Semi Government">Semi Government</option>
                            <option value="NGO">NGO</option>
                            <option value="Private Firm">Private Firm</option>
                            <option value="International Agencies">International Agencies</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className=' col-md-3 my-2'>
                        <label className="label" htmlFor='company_logo' ><span className="label-text fw-bold">Company Logo</span> </label>
                        <input
                            {...register("company_logo")}
                            name='company_logo'
                            className='input form-control'
                            id='company_logo'
                            type="file"
                        />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor='category'><span className="label-text fw-bold">Job Category</span> </label>
                    <select
                        {...register("category")}
                        name='category'
                        type="text"
                        className="form-select">
                        {
                            categories &&
                            categories.map((category, index) =>
                                <option key={index}
                                    value={category._id}>
                                    {category.name}
                                </option>)
                        }
                    </select>
                </div>


                <div className="row">
                    <div className=' col-md-6 my-2 '>
                        <label className="label"><span className="label-text fw-bold">Job Title</span> </label>
                        <input
                            {...register("job_title", { required: true })}
                            name="job_title"
                            className='input form-control'
                            id="job_title"
                            type="text"
                            placeholder='Enter Job Title'
                        />
                    </div>
                    <div className=' col-md-6 my-2 '>
                        <label className="label"><span className="label-text fw-bold">Location</span> </label>
                        <input
                            {...register("location", { required: true })}
                            name="location"
                            className='input form-control'
                            id="location"
                            type="text"
                            placeholder='Enter Job Location'
                        />
                    </div>
                </div>

                <div className="row">
                    <div className=' col-lg-4'>
                        <input
                            {...register("vacancies", { required: true })}
                            name='vacancies'
                            className='input form-control'
                            id="vacancies"
                            type="text"
                            placeholder='No of Vacancies'
                        />
                    </div>

                    <div className=' col-lg-4'>
                        <select
                            {...register("job_level")}
                            name='job_level'
                            className="form-select"
                        >
                            <option disabled selected>Select Job Level</option>
                            <option value={0}>Entry</option>
                            <option value={1}>Mid</option>
                            <option value={2}>Top</option>
                        </select>
                    </div>

                    <div className=' col-lg-4'>
                        <select
                            {...register("work_place")}
                            name="work_place"
                            className="form-select"
                        >
                            <option disabled selected>Select Work Place</option>
                            <option value="Work at Office">Work at Office</option>
                            <option value="Work from Home">Work from Home</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>



                <div className="row my-lg-4">
                    <div className=' col-lg-4'>
                        <select
                            {...register("employment_status")}
                            name="employment_status"
                            className=" form-select "
                        >
                            <option disabled selected>Employment Status</option>
                            <option value={0}>Full Time</option>
                            <option value={1}>Part Time</option>
                            <option value={2}>Contactual Time</option>
                            <option value={3}>Internship</option>
                            <option value={4}>Freelance</option>
                        </select>
                    </div>

                    <div className='col-lg-4'>
                        <div className='d-flex justify-content-center align-items-end'>
                            <p className='fw-bold'>DeadLine</p>
                            <input
                                {...register("deadline", { required: true })}
                                name='deadline'
                                className='input form-control ms-1'
                                id="deadline"
                                type="date"
                                placeholder='Application Deadline' />
                        </div>
                    </div>


                    <div className=' col-lg-4'>
                        <select
                            name='apply_status'
                            {...register("apply_status")}
                            className=" form-select"
                        >
                            <option disabled selected>Apply Status</option>
                            <option value="Apply Online">Apply Online</option>
                            <option value="email">Email</option>
                            <option value="Hard Copy">Heard Copy</option>
                            <option value="Interview">Walk in Interview</option>
                        </select>
                    </div>
                </div>
                <div className=' my-2 '>
                    <label className="label"><span className="label-text fw-bold">Education Qualification</span> </label>
                    <input
                        {...register("education", { required: true })}
                        name='education'
                        className='input form-control ms-1'
                        id="education"
                        type="text"
                        placeholder='Enter Education Qualification' />
                </div>

                <div className='my-2 '>
                    <label className="label"><span className="label-text fw-bold">Experience</span> </label>
                    <input
                        {...register("experience", { required: true })}
                        name='experience'
                        className='input form-control ms-1'
                        id="experience"
                        type="text"
                        placeholder='Enter Experience ' />
                </div>



                <div className=" my-lg-4">
                    <label className="label">
                        <span className=" fw-bold">Special Instruction for Job Seekers</span>
                    </label>
                    <div>
                        <textarea
                            {...register("business_description", { required: true })}
                            name='business_description'
                            className='input form-control'
                            id='business_description'
                            type="text"
                            placeholder='Write Special Instruction for Job Seekers' />
                    </div>
                </div>



                <textarea
                    {...register("job_context", { required: true })}
                    name='job_context'
                    className='input form-control my-lg-3'
                    id='job_context'
                    type="text"
                    placeholder='Enter job Context'
                />

                <textarea
                    name='job_respons'
                    {...register("job_responst", { required: true })}
                    className='input form-control my-lg-3'
                    id='job_respons'
                    type="text"
                    placeholder='Job Responsibilities'
                />


                <div className=' row my-lg-3'>

                    <div className=" col-lg-4">
                        <div className='d-flex justify-content-between align-items-center'>
                            <label className="label">
                                <span className=" fw-bold me-lg-2 ">Salary</span>
                            </label>
                            <input
                                {...register("salary_from", { required: true })}
                                name='salary_from'
                                type="text"
                                id='salary_from'
                                placeholder="Salary From"
                                className="input form-control"
                            />
                            <label className=' fw-bold mx-1'>to</label>
                            <input
                                {...register("salary_to", { required: true })}
                                name='salary_to'
                                type="text"
                                id='salary_to'
                                placeholder="Salary To"
                                className="input form-control"
                            />
                        </div>
                    </div>

                    <div className=" col-lg-4 ">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <select
                                {...register("yearly_bonus")}
                                name="yearly_bonus"
                                className=" form-select"
                            >
                                <option disabled selected>Yearly Bonus</option>
                                <option value={0}>2</option>
                                <option value={1}>3</option>
                                <option value={2}>4</option>
                            </select>
                        </div>
                    </div>

                    <div className=' col-lg-4'>
                        <select
                            {...register("salary_review")}
                            name="salary_review"
                            className="form-select"
                        >
                            <option disabled selected>Salary Review</option>
                            <option value={0}>Yearly</option>
                            <option value={1}>Halt Yearly</option>
                        </select>
                    </div>
                </div>

                <textarea
                    {...register("others")}
                    name='others'
                    className='input form-control my-lg-3'
                    id='others'
                    type="text"
                    placeholder='Enter Others'
                />

                <div className=' my-lg-4'>
                    <div className="form-check form-check-inline">
                        <input
                            {...register("status")}
                            className="form-check-input"
                            type="radio"
                            name="status"
                            id="Active"
                            value="active" checked />
                        <label className="form-check-label" for="Active">Active</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            {...register("status")}
                            className="form-check-input"
                            type="radio"
                            name="status"
                            id="Inactive"
                            value="inactive" />
                        <label className="form-check-label" for="Inactive">Inactive</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            {...register("status")}
                            className="form-check-input"
                            type="radio" name="status"
                            id="Close"
                            value="close" />
                        <label className="form-check-label" for="Close">Close</label>
                    </div>
                </div>

                <div className=' d-flex justify-content-between my-lg-3'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div >
    );
};

export default NewJobPost;
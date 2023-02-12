import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const EmployerProfileEntry = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleEmployeProfile = (data) => {
        const emplyeeProfile = {}
        console.log("Employee Data :", data);
    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">
                Employer Profile Entry
            </h2>

            <form onSubmit={handleSubmit(handleEmployeProfile)} >

                <input
                    {...register("company_name_en", { required: true })}
                    name='company_name_en'
                    className='input form-control my-lg-3'
                    id="company-name-eng"
                    type="text"
                    placeholder='Company Name*'
                />

                <input
                    {...register("company_name_bn", { required: true })}
                    name='company_name_bn'
                    className='input form-control my-lg-3'
                    id="company-name-bng"
                    type="text"
                    placeholder='কোম্পানির নাম (বাংলায়)' />


                <div className="row">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div className='col-lg-4'>
                        <input
                            {...register("estd_year", { required: true })}
                            name='estd_year'
                            className='input form-control '
                            id="estabilishment-year"
                            type="text"
                            placeholder='Companies Estabilishment Year'
                        />
                    </div>

                    <div className='col-lg-4'>
                        <input name='industry_type' className='input form-control ' id="industry_type" type="text" placeholder='Industry Type' />
                    </div>

                    <div className='col-lg-4'>
                        <select
                            {...register("company_size")}
                            name='company_size'
                            className="form-select">
                            <option disabled selected>Select Company Size</option>
                            <option value={0}>1-15 Employees</option>
                            <option value={1}>16-50 Employees</option>
                            <option value={2}>51-100 Employees</option>
                            <option value={3}>100-500 Employees</option>
                            <option value={4}>501-1000 Employees</option>
                            <option value={5}>1000-10000 Employees</option>
                            <option value={6}>10000+ Employees</option>
                        </select>
                    </div>
                </div>

                <div>
                    <textarea {...register("address_en", { required: true })}
                        name='address_en'
                        className='input form-control my-lg-3'
                        id='address-eng' type="text"
                        placeholder='Write Company Address'
                    />
                </div>

                <div>
                    <textarea
                        {...register("address_bn", { required: true })}
                        name='address_bn'
                        className='input form-control my-lg-3'
                        id='address-bng'
                        type="text"
                        placeholder='কোম্পানির ঠিকানা বাংলায় লিখুন'
                    />
                </div>



                <input
                    {...register("trade_license", { required: true })}
                    name='trade_license'
                    className='input form-control my-lg-3'
                    id="trade_license" t
                    ype="text"
                    placeholder='Business/ Trade License No'
                />

                <input
                    {...register("website_url", { required: true })}
                    name='website_url'
                    className='input form-control my-lg-3'
                    id="website_url"
                    type="text"
                    placeholder='Website URL' />




                <h2 className=' text-center text-xl font-bold mt-12'>Contact</h2>


                <div className='row'>
                    <div className=' col-lg-6'>
                        <input
                            {...register("contact_person_name", { required: true })}
                            name="contact_person_name"
                            className='input form-control my-lg-3'
                            id="contact_person_name"
                            type="text"
                            placeholder='Contact Persons Name' />
                    </div>
                    <div className=' col-lg-6'>
                        <input
                            {...register("contact_person_designation", { required: true })}
                            name="contact_person_designation"
                            className='input form-control my-lg-3'
                            id="contact_person_designation"
                            type="text"
                            placeholder='Contact Persons Designation' />
                    </div>
                    <div className=' col-lg-6'>
                        <input
                            {...register("contact_person_email", { required: true })}
                            name="contact_person_email"
                            className='input form-control my-lg-3'
                            id="contact_person_email"
                            type="text"
                            placeholder='Contact Persons Email' />
                    </div>

                    <div className=' col-lg-6'>
                        {...register("contact_person_phone", { required: true })}
                        <input
                            name="contact_person_phone"
                            className='input form-control my-lg-3'
                            id="contact_person_phone"
                            type="text"
                            placeholder='Contact Persons Phone' />
                    </div>
                </div>


                <div className=' d-flex justify-content-between my-lg-5'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default EmployerProfileEntry;
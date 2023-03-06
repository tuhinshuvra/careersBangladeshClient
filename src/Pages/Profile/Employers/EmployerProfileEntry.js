import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const EmployerProfileEntry = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

    const handleEmployeProfile = (data) => {
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

                    const emplyerProfile = {
                        email: user?.email,
                        name: user?.displayName,

                        companyNameEn: data.company_name_en,
                        organizationType: data.organizationType,
                        companyNameBn: data.company_name_bn,
                        image: imgData.data.url,
                        companyLogo: imgData.data.url,
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

                    fetch('http://localhost:5000/emplyerProfile', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(emplyerProfile)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            toast('My Profile Saved Successfully');
                            navigate("/dashboard/employerProfile")
                        })
                }
            })

    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Company Profile Entry</h2>

            <form onSubmit={handleSubmit(handleEmployeProfile)}>

                <div className=' row'>
                    <div className=' col-md-6'>
                        <label htmlFor="ompany_name_en"><b>Company Name</b></label>
                        <input
                            {...register("company_name_en", { required: true })}
                            name='company_name_en'
                            className='input form-control my-lg-3'
                            id="company-name-eng"
                            type="text"
                            placeholder='Company Name*'
                        />
                    </div>


                    <div className=' col-md-3'>
                        <label htmlFor="company_logo"> <b> Company Type</b></label>
                        <select
                            {...register("organizationType")}
                            name='organizationType'
                            className="form-select my-lg-3">
                            <option>-Select Company Type-</option>
                            <option value="Government">Government</option>
                            <option value="Semi Government">Semi Government</option>
                            <option value="NGO">NGO</option>
                            <option value="Private Firm">Private Firm</option>
                            <option value="International Agencies">International Agencies</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className=' col-md-3'>
                        <label htmlFor="company_logo"> <b> Company Logo</b></label>
                        <input
                            {...register("company_logo", { required: true })}
                            name='company_logo'
                            className='input form-control my-lg-3'
                            id="company_logo"
                            type="file"
                        />
                    </div>
                </div>

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
                            <option>-Select Company Size-</option>
                            <option value={15}>1-15 Employees</option>
                            <option value={50}>16-50 Employees</option>
                            <option value={100}>51-100 Employees</option>
                            <option value={500}>100-500 Employees</option>
                            <option value={1000}>501-1000 Employees</option>
                            <option value={1500}>1000+ Employees</option>
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
                <div>
                    <textarea
                        {...register("busi_description", { required: true })}
                        name='busi_description'
                        className='input form-control my-lg-3'
                        id='busi_description'
                        type="text"
                        placeholder='Business Description'
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
                        <input
                            {...register("contact_person_phone", { required: true })}
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
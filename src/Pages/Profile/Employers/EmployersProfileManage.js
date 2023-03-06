import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EmployersProfileManage = () => {
    const storedData = useLoaderData();

    const [employerData, setEmployerData] = useState(storedData);

    console.log(" EmployersProfileManage storedData :", storedData);

    const navigate = useNavigate();

    // const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

    const handleEmployersDocUpdate = (event) => {
        event.preventDefault();

        // console.log("personalDetails :", employerData)

        fetch(`http://localhost:5000/employerupdate/${storedData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(employerData)
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

        const newData = { ...employerData }
        newData[field] = value;
        setEmployerData(newData);
    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Manage Profile</h2>

            <form onSubmit={handleEmployersDocUpdate}>

                <div className=' row'>
                    <div className=' col-md-6'>
                        <label htmlFor="ompany_name_en"><b>Company Name</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.companyNameEn}
                            name='companyNameEn'
                            className='input form-control my-lg-3'
                            id="companyNameEn"
                            type="text"
                        />
                    </div>


                    <div className=' col-md-3'>
                        <label htmlFor="organizationType"> <b> Company Type</b></label>
                        <select
                            onChange={handleInputChange}
                            name='organizationType'
                            className="form-select my-lg-3">
                            <option defaultValue={storedData.organizationType}>{storedData.organizationType}</option>
                            <option value="Government">Government</option>
                            <option value="Semi Government">Semi Government</option>
                            <option value="NGO">NGO</option>
                            <option value="Private Firm">Private Firm</option>
                            <option value="International Agencies">International Agencies</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className=' col-md-3'>
                        <label htmlFor="companyLogo"> <b> Company Logo</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.companyLogo}
                            // name='companyLogo'
                            className='input form-control my-lg-3'
                            id="companyLogo"
                            // type="file"
                            type="text"
                        />
                    </div>
                </div>


                <label htmlFor="companyNameBn"> <b> Company Name Bengali</b></label>
                <input
                    onChange={handleInputChange}
                    defaultValue={storedData.companyNameBn}
                    name='companyNameBn'
                    className='input form-control my-lg-3'
                    id="companyNameBn"
                    type="text"
                />


                <div className="row">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div className='col-lg-6'>
                        <label htmlFor="estdYear"> <b> Established Year</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.estdYear}
                            name='estdYear'
                            className='input form-control '
                            id="estdYear"
                            type="text"
                        />
                    </div>

                    {/* <div className='col-lg-4'>
                        <label htmlFor="company_logo"> <b> Company Type</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.organizationType}
                            name='industry_type'
                            className='input form-control '
                            id="industry_type"
                            type="text"
                        />
                    </div> */}

                    <div className='col-lg-4'>
                        <label htmlFor="companySize"> <b> Company Size</b></label>

                        <div className=' d-flex'>
                            <select
                                onChange={handleInputChange}
                                name='companySize'
                                className="form-select">
                                <option defaultValue={storedData.companySize}>{storedData.companySize}</option>
                                <option value={15}>1-15</option>
                                <option value={50}>16-50</option>
                                <option value={100}>51-100</option>
                                <option value={500}>100-50</option>
                                <option value={1000}>501-1000</option>
                                <option value={1500}>2000</option>
                                <option value={"More"}>More</option>
                            </select>
                            <span className=' ms-1'>Employees</span>
                        </div>
                    </div>
                </div>

                <div className=' my-3'>
                    <label htmlFor="addressEng"> <b> Address English</b></label>
                    <textarea
                        onChange={handleInputChange}
                        defaultValue={storedData.addressEng}
                        name='addressEng'
                        className='input form-control my-lg-3'
                        id='address-eng' type="text"
                    />
                </div>

                <div>
                    <label htmlFor="addressBng"> <b> Address Bangali</b></label>
                    <textarea
                        onChange={handleInputChange}
                        defaultValue={storedData.addressBng}
                        name='addressBng'
                        className='input form-control my-lg-3'
                        id='addressBng'
                        type="text"
                    />
                </div>

                <div className=' my-md-3'>
                    <div>
                        <label htmlFor="busiDescription"> <b>Business Description</b></label>
                        <textarea
                            onChange={handleInputChange}
                            defaultValue={storedData.busiDescription}
                            name='busiDescription'
                            className='input form-control'
                            id='busiDescription'
                            type="text"
                        />
                    </div>
                </div>

                <div className=' my-md-3'>
                    <label htmlFor="company_logo"> <b>Trade License</b></label>
                    <input
                        onChange={handleInputChange}
                        defaultValue={storedData.tradeLicense}
                        name='tradeLicense'
                        className='input form-control '
                        id="tradeLicense"
                        ype="text"
                    />
                </div>

                <div className=' my-md-3'>
                    <label htmlFor="company_logo"> <b>Website URL</b></label>
                    <input
                        onChange={handleInputChange}
                        defaultValue={storedData.websiteURL}
                        name='websiteURL'
                        className='input form-control  '
                        id="websiteURL"
                        type="text"
                    />
                </div>

                <h2 className=' text-center  font-bold mt-5'>Contact</h2>


                <div className='row'>
                    <div className=' col-lg-6 my-md-2'>
                        <label htmlFor="company_logo"> <b>Contact Person Name</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.contactPersonName}
                            name="contactPersonName"
                            className='input form-control'
                            id="contactPersonName"
                            type="text"
                        />
                    </div>

                    <div className=' col-lg-6 my-md-2'>
                        <label htmlFor="company_logo"> <b>Contact Person Designation</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.contactPersonDesignation}
                            name="contactPersonDesignation"
                            className='input form-control  '
                            id="contactPersonDesignation"
                            type="text"
                        />
                    </div>

                    <div className=' col-lg-6 my-md-2'>
                        <label htmlFor="company_logo"> <b>Contact Person Email</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.contactPersonEmail}
                            name="contactPersonEmail"
                            className='input form-control'
                            id="contactPersonEmail"
                            type="text"
                        />
                    </div>

                    <div className=' col-lg-6 my-md-2'>
                        <label htmlFor="company_logo"> <b>Contact Person Phone</b></label>
                        <input
                            onChange={handleInputChange}
                            defaultValue={storedData.contactPersonPhone}
                            name="contactPersonPhone"
                            className='input form-control'
                            id="contactPersonPhone"
                            type="text"
                        />
                    </div>
                </div>


                <div className=' d-flex justify-content-between my-3 '>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default EmployersProfileManage;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const JobCategoryEntry = () => {

    useTitle('JobCategoryEntry');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleOnSubmit = (data) => {
        const categoryData = {
            name: data.name,
            categoryImage: data.cat_img,
        }
        // console.log("Category Data :", data);

        fetch('http://localhost:5000/jobCategories', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(categoryData)
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                toast.success('Category Saved Successfully!')
            })
    }



    return (
        <div className="container ">
            <h2 className=" text-center fw-bold my-4">
                Job Category Entry
            </h2>

            <form onSubmit={handleSubmit(handleOnSubmit)}>

                <div className=''>
                    <h5 className=' mb-4'>Please login to your account</h5>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">Category Name</label>
                        <input
                            {...register("name", { required: true })}
                            name='name'
                            type="text"
                            className="form-control"
                            placeholder="Enter Category Name"
                        />
                        {errors.name && <p className='text-red-600'>Category Name is required</p>}
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="cat_img">Category Image</label>
                        <input
                            {...register("cat_img")}
                            name='cat_img'
                            type="file"
                            className="form-control"
                        />
                    </div>


                    <div className="text-center pt-1 mb-5 pb-1">
                        <button type='submit' name='submit' className="custom_btn">Save</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default JobCategoryEntry;
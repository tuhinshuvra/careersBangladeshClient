import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const JobCategoryList = () => {

    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const respone = await fetch('http://localhost:5000/jobCategories');
            const data = respone.json();
            return data;
        }
    })


    const handleDelete = (category) => {
        fetch(`http://localhost:5000/categories/${category._id}`, {
            method: 'DELETE'
        })
            .then(respnse => respnse.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast('Category Deleted Successfully.')
                }
            });
        // console.log(category._id);
    }

    const handleCategoryUpdate = (category) => {
        console.log("Selected to Update Category : ", category._id)
    }


    return (
        <div>
            <h2 className='text-center  fw-bold  my-4'>All Categories</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className=''>
                            <th>SL</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, index) =>
                                <tr key={category._id} className=" table-hover ">
                                    <td>{index + 1}</td>
                                    <td>{category.name}</td>

                                    <td>
                                        <button className=' btn btn-sm  btn-outline-danger'
                                            onClick={() => handleDelete(category)}
                                        >Delete
                                        </button>

                                        {/* <Link to={`/dashboard/categoryUpdate/${category._id}`}> */}
                                        <button className=' fw-bold btn-sm btn btn-primary mx-1'
                                            onClick={() => handleCategoryUpdate(category._id)}
                                        >Update</button>
                                        {/* </Link> */}

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default JobCategoryList;
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFile, FaFilter, FaList, FaSearch, FaStar, FaTh } from 'react-icons/fa';
import './FindJob.css';
import useTitle from '../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Authentication/AuthProvider';

const FindJobHomeResult = ({ jobList }) => {
    // const { searchHome } = useContext(AuthContext);

    // const { jobs } = useLoaderData();


    // console.log("searchHome Result : ", jobs)

    const { register, handleSubmit, formState: { errors } } = useForm();

    useTitle('FindJob');


    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobCategories');
            const data = await res.json();
            return data;
        }
    })


    const { data: jobs = [], refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const respone = await fetch('http://localhost:5000/jobs');
            const data = respone.json();
            return data;
        }
    })



    // const handleDelete = (job) => {
    //     fetch(`http://localhost:5000/jobs/${job._id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(respnse => respnse.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount > 0) {
    //                 toast('Job Deleted Successfully.')
    //             }
    //         });
    //     // console.log(user._id);
    // }

    // const handleJobsUpdate = (job) => {
    //     console.log("Selected to Update Job : ", job._id)
    // }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="grid search">
                    <div className="grid-body">
                        <div className="row">


                            {/* <div className="col-md-3">
                                <h2 className="grid-title"><FaFilter />Filters</h2>
                                <hr />


                                <h5 className=' fw-bold'>By Location:</h5>
                                <select className="form-select">
                                    <option>Select</option>
                                    <option value={0}>Dhaka</option>
                                    <option value={1}>Chattogram</option>
                                    <option value={2}>Sylhet</option>
                                    <option value={3}>Rajshahi</option>
                                    <option value={4}>Khulna</option>
                                    <option value={5}>Barishal</option>
                                    <option value={6}>Rangpur</option>
                                </select>




                                <div className=' my-md-3'>
                                    <h5 className=' fw-bold'>By Category:</h5>
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




                                <div className=' my-md-3'>
                                    <h5 className=' fw-bold'>By Employment Status:</h5>
                                    <select className=" form-select ">
                                        <option>Please Select</option>
                                        <option value={0}>Full Time</option>
                                        <option value={1}>Part Time</option>
                                        <option value={2}>Contactual Time</option>
                                        <option value={3}>Internship</option>
                                        <option value={4}>Freelance</option>
                                    </select>
                                </div>




                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Posted:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input type="date" name="posted-from" id='posted-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="date" name="posted-to" id='posted-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>




                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Deadline:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input type="date" name="deadline-from" id='deadline-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="date" name="deadline-to" id='deadline-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>





                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Salary:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>

                                        <input type="text" id='salary-from' placeholder="Salary From" className="input form-control" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="text" id='salary-to' placeholder="Salary To" className="input form-control" />
                                    </div>
                                </div>

                            </div> */}




                            <div className="col-md-9 mt-md-0 mt-5 mx-md-auto">
                                <h2><FaFile></FaFile> Result</h2>
                                <hr />

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder='input search data' />
                                    <span className="input-group-btn">
                                        <button className="custom_btn" type="button"><FaSearch className='' />Search</button>
                                    </span>
                                </div>


                                <p className=' fw-bold'>Showing search result</p>

                                <div className="padding"></div>

                                <div className="row">

                                    <div className="col-9">
                                        <select className="form-select">
                                            <option>Order By</option>
                                            <option value={0}>Name</option>
                                            <option value={1}>Posted</option>
                                            <option value={2}>Deadline</option>
                                            <option value={3}>Salary</option>
                                        </select>
                                    </div>


                                    <div className="col-3">
                                        <div className=' float-end'>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default active"><FaList></FaList> </button>
                                                <button type="button" className="btn btn-default"><FaTh></FaTh></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Title</th>
                                                <th>Organization</th>
                                                <th>Work Place</th>
                                                <th>Posted</th>
                                                <th>DeadLine</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                jobs.map((job, index) =>
                                                    <tr key={job._id} className="">
                                                        <td>{index + 1}</td>
                                                        <td className='fw-bold'>
                                                            <Link className=' text-decoration-none text-primary ' to={`/dashboard/jobs/${job._id}`}>
                                                                {job.jobTitle}
                                                            </Link>
                                                        </td>
                                                        <td>{job.organization}</td>
                                                        <td>{job.location}</td>
                                                        <td>{job.postDate}</td>
                                                        <td>{job.deadLine}</td>
                                                        <td>৳{job.salaryTo}</td>
                                                    </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>



                                <div className=' d-flex justify-content-center'>
                                    <nav aria-label="..." className=' '>
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <span className="page-link">Previous</span>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <span className="page-link">1</span>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">6</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJobHomeResult;
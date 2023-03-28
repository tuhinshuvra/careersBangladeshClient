import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFile, FaFilter, FaList, FaSearch, FaStar, FaTh, } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import "./FindJob.css";

const FindJobsByCategory = () => {
  useTitle("Category Job");

  const jobs = useLoaderData();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const findJobsNo = jobs.length;

  console.log("findJobsNo : ", findJobsNo);

  // const { data: categories, isLoading } = useQuery({
  //     queryKey: ['category'],
  //     queryFn: async () => {
  //         const res = await fetch('https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobCategories');
  //         const data = await res.json();
  //         return data;
  //     }
  // })

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

              {/* <div className="col-md-9 mt-md-0 mt-5"> */}
              <div className="mt-md-0 mt-5 ">


                {/* <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="input search data"
                  />
                  <span className="input-group-btn">
                    <button className="custom_btn" type="button">
                      <FaSearch className="" />
                      Search
                    </button>
                  </span>
                </div> */}

                {findJobsNo > 0 ? <> <h2 className=" text-center fw-bold">All Job in this Category</h2>  </> : <></>}

                <div className="padding"></div>

                {/* <div className="row">
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
                    <div className=" float-end">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-default active"
                        >
                          <FaList></FaList>{" "}
                        </button>
                        <button type="button" className="btn btn-default">
                          <FaTh></FaTh>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="table-responsive">
                  <table className="table table-hover  table-bordered">
                    {findJobsNo > 0 ? (
                      <>
                        <thead>
                          <tr className="table-secondary text-center">
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
                          {jobs.map((job, index) => (
                            <tr key={job._id} className="">
                              <td className=" text-center">{index + 1}</td>
                              <td className="fw-bold">
                                <Link
                                  className=" text-decoration-none text-primary "
                                  to={`/jobDetails/${job._id}`}
                                >
                                  {job.jobTitle}
                                </Link>
                              </td>
                              <td>{job.organization}</td>
                              <td>{job.location}</td>
                              <td className=" text-center">{job.postDate}</td>
                              <td className=" text-center">{job.deadLine}</td>
                              <td className=" text-center">৳{job.salaryTo}</td>
                            </tr>
                          ))}
                        </tbody>
                      </>
                    ) : (
                      <>
                        <p className=" fs-3 my-5 text-center fw-bold">
                          No job found to display in this category
                        </p>
                      </>
                    )}
                  </table>
                </div>

                {findJobsNo > 0 ? (
                  <>
                    {findJobsNo > 1 ? (
                      <>
                        <p className=" fs-5 text-success   text-center fw-bold">
                          {findJobsNo} jobs found in this category
                        </p>
                      </>
                    ) : (
                      <>
                        <p className=" fs-5 text-success   text-center fw-bold">
                          {findJobsNo} job found in this category
                        </p>
                      </>
                    )}

                    {/* <div className=" d-flex justify-content-center">
                      <nav aria-label="..." className=" ">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <span className="page-link">1</span>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              4
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              5
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              6
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              Next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobsByCategory;

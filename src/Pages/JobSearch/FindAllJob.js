import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaFile,
  FaFilter,
  FaList,
  FaSearch,
  FaStar,
  FaTh,
} from "react-icons/fa";
import "./FindJob.css";
import useTitle from "../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Authentication/AuthProvider";

const FindAllJob = () => {
  useTitle("FindJob");
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const [showJobs, setShowJobs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(
      `https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobSearch?search=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("Find all Job Search Result :", data);
        setShowJobs(data);
      });
  }, [search]);

  const handleSearch = () => {
    // console.log("searchRef : ", searchRef.current.value)
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
    // console.log("HandleSearch function called")
    // console.log("searchRef Value :", searchRef.current.value);
  };

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobCategories"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const respone = await fetch(
        "https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobs"
      );
      const data = respone.json();
      return data;
    },
  });

  // const handleDelete = (job) => {
  //     fetch(`https://careers-bangladesh-server-tuhinshuvra.vercel.app/jobs/${job._id}`, {
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


                                <input
                                    ref={searchRef}
                                    name="inputSearch"
                                    id="inputSearch"
                                    type="text"
                                    className="form-control"
                                    placeholder='input search data'
                                />
                                <h5 className=' fw-bold'>By Location:</h5>
                                <select ref={searchRef} className="form-select">
                                    <option>Select</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Rangpur">Rangpur</option>
                                </select>



                                <div className=' my-md-3'>
                                    <h5 className=' fw-bold'>By Category:</h5>
                                    <select
                                        ref={searchRef}
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
                                    <select
                                        ref={searchRef}
                                        className=" form-select ">
                                        <option>Please Select</option>
                                        <option value="full time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Contactual">Contactual</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Freelance">Freelance</option>
                                    </select>
                                </div>




                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Posted:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input ref={searchRef} type="date" name="posted-from" id='posted-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input ref={searchRef} type="date" name="posted-to" id='posted-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>




                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Deadline:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input ref={searchRef} type="date" name="deadline-from" id='deadline-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input ref={searchRef} type="date" name="deadline-to" id='deadline-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>





                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Salary:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>

                                        <input ref={searchRef} type="text" id='salary-from' placeholder="Salary From" className="input form-control" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input ref={searchRef} type="text" id='salary-to' placeholder="Salary To" className="input form-control" />
                                    </div>
                                </div>

                            </div> */}

              {/* <div className="col-md-9 mt-md-0 mt-5"> */}
              <div className=" mt-md-0 mt-5 mx-auto">
                <h2>
                  <FaFile></FaFile> Result
                </h2>
                <hr />

                <div className="input-group">
                  <input
                    ref={searchRef}
                    name="inputSearch"
                    id="inputSearch"
                    type="text"
                    className="form-control"
                    placeholder="input search data"
                  />

                  <span className="input-group-btn">
                    <button
                      onClick={() => handleSearch()}
                      className="custom_btn"
                      type="button"
                    >
                      <FaSearch className="" />
                      Search
                    </button>
                  </span>
                </div>

                <p className=" fw-bold">Showing search result</p>

                <div className="padding"></div>

                <div className="row">
                  <div className="col-9">
                    <select className="form-select">
                      <option>Order By</option>
                      <option value="Name">Name</option>
                      <option value="Posted">Posted</option>
                      <option value="Deadline">Deadline</option>
                      <option value="Salary">Salary</option>
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
                      {showJobs.map((job, index) => (
                        <tr key={job._id} className="">
                          <td>{index + 1}</td>
                          <td className="fw-bold">
                            <Link
                              className=" text-decoration-none text-primary "
                              to={`/dashboard/jobs/${job._id}`}
                            >
                              {job.jobTitle}
                            </Link>
                          </td>
                          <td>{job.organization}</td>
                          <td>{job.location}</td>
                          <td>{job.postDate}</td>
                          <td>{job.deadLine}</td>
                          <td>৳{job.salaryTo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* <div className=' d-flex justify-content-center'>
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
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAllJob;

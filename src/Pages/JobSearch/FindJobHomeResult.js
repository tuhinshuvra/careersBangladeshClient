import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Authentication/AuthProvider";
import Loader from "../Shared/Loader/Loader";
import "./FindJob.css";

const FindJobHomeResult = ({ jobList }) => {
  useTitle("FindJob");

  const [search, setSearch] = useState("");
  const [showJobs, setShowJobs] = useState([]);
  const searchRef = useRef();
  const { searchData, searchOrganizationData, searchLocationtionData, setSearchData, setSearchLocationtionData, setSearchOrganizationData } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const foundJobs = showJobs.length;
  console.log("FindJobHomeResult foundJobs :", foundJobs);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CABD_server_address}/homeJobSearch/${searchData.jobTitle}/${searchLocationtionData.location}/${searchOrganizationData.orgaType}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(" Home Job Search Result :", data);
        setShowJobs(data);
        setSearchData("");
        setSearchLocationtionData("");
        setSearchOrganizationData("");
        // console.log(" Home Job Search Result22 :", data);
      });
  }, []);

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_CABD_server_address}/jobCategories`
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const respone = await fetch(
        `${process.env.REACT_APP_CABD_server_address}/jobs`
      );
      const data = respone.json();
      return data;
    },
  });

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

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
                {/* <h2><FaFile></FaFile> Result</h2> */}
                {/* <hr /> */}
                {/* 
                                <div className="input-group">

                                    <input
                                        ref={searchRef}
                                        name="inputSearch"
                                        id="inputSearch"
                                        type="text"
                                        className="form-control"
                                        placeholder='input search data'
                                    />

                                    <span className="input-group-btn">
                                        <button
                                            onClick={() => handleSearch()}
                                            className="custom_btn"
                                            type="button"><FaSearch className='' />
                                            Search</button>
                                    </span>
                                </div> */}

                <h2 className=" fs-4 fw-bold text-center">
                  {foundJobs ? <> Showing Job Search Result</> : <></>}
                </h2>

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
                                        <div className=' float-end'>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default active"><FaList></FaList> </button>
                                                <button type="button" className="btn btn-default"><FaTh></FaTh></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                {/*#####################33 job search result table #############################*/}

                {
                  foundJobs ?
                    <>
                      <div className="table-responsive">
                        <table className="table table-hover  table-bordered">
                          <thead>
                            <tr className="table-secondary text-center">
                              <th>SL</th>
                              <th>Job Title</th>
                              <th>Institution</th>
                              <th>Organization Type</th>
                              <th>Work Place</th>
                              <th>Posted</th>
                              <th>DeadLine</th>
                              <th>Salary</th>
                            </tr>
                          </thead>

                          <tbody>
                            {
                              // jobs.map((job, index) =>
                              showJobs.map((job, index) => (
                                <tr key={job._id} className="">
                                  <td>{index + 1}</td>
                                  <td className="fw-bold">
                                    <Link
                                      className=" text-decoration-none text-primary "
                                      to={`/jobDetails/${job._id}`}
                                    >
                                      {job.jobTitle}
                                    </Link>
                                  </td>
                                  <td>{job.organization}</td>
                                  <td>{job.orgaType}</td>
                                  <td>{job.location}</td>
                                  <td>{job.postDate}</td>
                                  <td>{job.deadLine}</td>
                                  <td>৳{job.salaryTo}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </>
                    :
                    <>
                      <h3 className=" text-center fw-bold">No job is found, please fill at least one search field</h3>
                    </>}



                {foundJobs > 0 ? (
                  <>
                    {foundJobs > 1 ? (
                      <>
                        <p className=" fs-5 text-success   text-center fw-bold">
                          {foundJobs} jobs found in this category
                        </p>
                      </>
                    ) : (
                      <>
                        <p className=" fs-5 text-success   text-center fw-bold">
                          {foundJobs} job found in this category
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

export default FindJobHomeResult;

import React, { useEffect, useRef, useState } from 'react';
import { FaSearchDollar, FaChartLine, FaRegBuilding } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import './FindJobHome.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import './FindJobAndStatistics.css';

const FindJobAndStatistics = () => {

    const [totalJobs, setTotalJobs] = useState('1');
    const [totalCompanies, setTotalCompanies] = useState('1');
    const [totalEmployers, setTotalEmployers] = useState('1');
    const [search, setSearch] = useState('web developer');
    const searchRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(response => response.json())
            .then(data => setTotalJobs(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/employers')
            .then(response => response.json())
            .then(data => setTotalEmployers(data))
    }, [])


    const totalJobNo = totalJobs.length + 10000;
    const totalCompanyNo = totalEmployers.length + 1000;
    const totalEmployersNo = totalEmployers.length + 2000;
    console.log("totalJobs : ", totalJobNo);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/jobSearch?search=${search}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("Find Job Home Search Result :", data)
    //         })
    // }, [search]);

    const handleSearch = () => {
        // console.log("searchRef : ", searchRef.current.value)
        setSearch(searchRef.current.value);
    }

    return (
        <div className='findAndStat'>
            <div className='col-lg-10 mx-auto '>
                <h2 className='careers_title_one'><FaSearchDollar className='mx-1'></FaSearchDollar>LETS FIND YOUR JOB</h2>
                <div className="d-flex  justify-content-center mt-4">
                    <input
                        ref={searchRef}
                        name="jobTitle"
                        type="text"
                        id="jobTitle"
                        placeholder="Job Title"
                        className="form-control  w-25"
                    />

                    <select
                        name='orgaType'
                        className="form-select w-25 mx-2">
                        {/* <option>Company Type</option> */}
                        <option>Select Company Type</option>
                        <option value="Government">Government</option>
                        <option value="Semi Government">Semi Government</option>
                        <option value="NGO">NGO</option>
                        <option value="Private Firm">Private Firm</option>
                        <option value="International Agencies">International Agencies</option>
                        <option value="Others">Others</option>
                    </select>
                    <input type="text" id="location" placeholder="Location" className="form-control  w-25" />
                    {/* <button onClick={() => handleSearch()} */}
                    {/* className=' text-decoration-none custom_btn ms-2'/  > */}
                    <Link to={`/searchHomeResult/:${search}`} className=' text-decoration-none custom_btn ms-2' > Search</Link>

                    {/* </button> */}
                </div>

                <div className=' my-5'>

                    <div className="row justify-content-center">
                        <div className=" col-md-3 ">
                            <div className="counter-box glow-on-hover ">
                                <FaChartLine className='  text-secondary fs-1 mt-1'></FaChartLine>
                                <span className="counter">
                                    <CountUp
                                        start={1}
                                        end={totalJobNo}
                                        duration={5}
                                    />
                                </span>

                                <p>Live Jobs</p>
                            </div>
                        </div>

                        <div className=" col-md-3 ">
                            <div className="counter-box  glow-on-hover">
                                <FaRegBuilding className='  text-secondary fs-1 mt-1'></FaRegBuilding>
                                <span className="counter">
                                    <CountUp
                                        start={1}
                                        end={totalCompanyNo}
                                        duration={5}
                                    />
                                </span>
                                <p className=''>Companies</p>
                            </div>
                        </div>

                        <div className=" col-md-3 ">
                            <div className="counter-box glow-on-hover ">
                                <BsPeopleFill className='  text-secondary fs-1 mt-1'></BsPeopleFill>
                                <span className="counter">
                                    <CountUp
                                        start={1}
                                        end={totalEmployersNo}
                                        duration={5}
                                    />
                                </span>
                                <p>Employers</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindJobAndStatistics;
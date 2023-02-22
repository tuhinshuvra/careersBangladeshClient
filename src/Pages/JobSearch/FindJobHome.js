import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaSearchDollar } from 'react-icons/fa';
import './FindJobHome.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const FindJobHome = () => {
    const [search, setSearch] = useState('web developer');
    const searchRef = useRef();

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
        <div className='my-5 col-lg-10 mx-auto'>
            <h2 className='careers_title_one my-5'><FaSearchDollar className='mx-1'></FaSearchDollar>LETS FIND YOUR JOB</h2>
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
                    <option disabled selected>Company Type</option>
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


        </div>
    );
};

export default FindJobHome;
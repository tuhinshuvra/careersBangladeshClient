import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';
import { FaSearch } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';
import './Navbar.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("User logout successfully!")
            })
            .catch((error) => { console.log("Error : ", error); })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar_bg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand spin_logo">
                        <img className='navlogo' src={Logo} alt="" />
                    </Link>

                    {/* <p><i className="fa fa-spinner w3-spin" style="font-size:64px"></i></p> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cbNavbarToggler" aria-controls="cbNavbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="cbNavbarToggler">
                        <ul className=" navbar-nav d-flex justify-content-center align-items-center mx-auto ">
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/findJobs">FindJobs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/about">AboutUs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/contact">Contact</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link to='/dashboardEmployers' className=" border-0  mx-lg-1  fw-bold nav_btn">Employer</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link to='/dashboardMyJobs' className=" border-0  mx-lg-1  fw-bold nav_btn">MyJobs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                {user?.uid ?
                                    <>
                                        <Link onClick={handleLogOut} className=' border-0  mx-lg-1  fw-bold nav_btn'>Logout</Link>
                                    </> : <>
                                        <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/login">Login</Link>
                                    </>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
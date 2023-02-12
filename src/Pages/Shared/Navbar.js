import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';
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
                            {/* <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/findJobs">FindJobs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/elearning">Elearning</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/about">AboutUs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/contact">Contact</Link>
                            </li>


                            {
                                user?.uid ?
                                    <>
                                        <li className='nav-item nav_btn mb-2'> <Link className='nav_btn' to="/dashboard">Dashboard</Link> </li>
                                        <li className='nav-item  nav_btn mb-2'>  {user?.displayName}</li>
                                        <li className='nav-item  border-0  mx-lg-1  fw-bold mb-2 '>  <Link className='nav_btn' onClick={handleLogOut} >Logout</Link></li>
                                    </>
                                    :
                                    <>
                                        <li className=" border-0  mx-lg-1  fw-bold mb-2 ">  <Link className=' nav_btn' aria-current="page" to="/login">Login</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
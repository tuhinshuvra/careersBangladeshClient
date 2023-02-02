import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/carreers-bangladesh-small.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold d-flex justify-content-center align-items-center " href="#">
                        <img className='navlogo' src={Logo} alt="" />
                        <h3>Careers Bangladesh</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav_btn" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav_btn" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav_btn">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboardMyJobs' className="nav_btn">Emplyeer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboardEmployers' className="nav_btn">MyJobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signin' className="nav_btn">Signin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
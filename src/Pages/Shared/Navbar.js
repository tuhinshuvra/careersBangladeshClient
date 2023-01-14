import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold" href="#">Careers Bangladesh</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link fw-bold " aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link fw-bold " href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link fw-bold">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboardMyJobs' className="nav-link fw-bold">Emplyeer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboardEmployers' className="nav-link fw-bold">MyJobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/singin' className="nav-link fw-bold">Signin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
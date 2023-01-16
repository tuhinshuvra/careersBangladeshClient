import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import './Dashboard.css';


const MyJobDashboard = () => {
    return (
        <div>
            <main>
                <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="#">Dark offcanvas navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark"
                            aria-controls="offcanvasNavbarDark">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbarDark"
                            aria-labelledby="offcanvasNavbarDarkLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Offcanvas</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Link</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar bg-light" aria-label="Light offcanvas navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="#">Light offcanvas navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight"
                            aria-controls="offcanvasNavbarLight">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarLight"
                            aria-labelledby="offcanvasNavbarLightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Link</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="#">Responsive offcanvas navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                            aria-controls="offcanvasNavbar2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                            aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Link</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3 mt-lg-0" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container my-5">
                    <div className="bg-light p-5 rounded">
                        <div className="col-sm-8 py-5 mx-auto">
                            <h1 className="display-5 fw-normal">Navbar with offcanvas examples</h1>
                            <p className="fs-5">This example shows how responsive offcanvas menus work within the navbar. For positioning of
                                navbars, checkout the <Link href="../examples/navbar-static/">top</Link> and <Link
                                    href="../examples/navbar-fixed/">fixed top</Link> examples.</p>
                            <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases
                                built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
                            <p>
                                <Link className="btn btn-primary" href="../components/navbar/#offcanvas" role="button">Learn more about offcanvas
                                    navbars &raquo;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyJobDashboard;
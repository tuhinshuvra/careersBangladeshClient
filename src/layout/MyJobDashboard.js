import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import './Dashboard.css';


const MyJobDashboard = () => {
    return (
        <div>
            <main>
                <nav class="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Dark offcanvas navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark"
                            aria-controls="offcanvasNavbarDark">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbarDark"
                            aria-labelledby="offcanvasNavbarDarkLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarDarkLabel">Offcanvas</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href="#">Link</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" href="#">Action</Link></li>
                                            <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav class="navbar bg-light" aria-label="Light offcanvas navbar">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Light offcanvas navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight"
                            aria-controls="offcanvasNavbarLight">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarLight"
                            aria-labelledby="offcanvasNavbarLightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href="#">Link</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" href="#">Action</Link></li>
                                            <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">Responsive offcanvas navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                            aria-controls="offcanvasNavbar2">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                            aria-labelledby="offcanvasNavbar2Label">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href="#">Link</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" href="#">Action</Link></li>
                                            <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3 mt-lg-0" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container my-5">
                    <div class="bg-light p-5 rounded">
                        <div class="col-sm-8 py-5 mx-auto">
                            <h1 class="display-5 fw-normal">Navbar with offcanvas examples</h1>
                            <p class="fs-5">This example shows how responsive offcanvas menus work within the navbar. For positioning of
                                navbars, checkout the <Link href="../examples/navbar-static/">top</Link> and <Link
                                    href="../examples/navbar-fixed/">fixed top</Link> examples.</p>
                            <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases
                                built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
                            <p>
                                <Link class="btn btn-primary" href="../components/navbar/#offcanvas" role="button">Learn more about offcanvas
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
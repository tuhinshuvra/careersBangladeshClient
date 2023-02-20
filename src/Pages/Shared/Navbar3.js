import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';

const Navbar3 = () => {



    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <Link class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Link</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" href="#">Action</Link></li>
                                <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar3;
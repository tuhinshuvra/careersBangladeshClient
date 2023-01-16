import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

function MyJobDashboard() {
    return (
        <div className=' container'>
            <Navbar></Navbar>
            <div class="row">

                <div class="col-lg-4">
                    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav class="nav nav-pills flex-column">
                            <Link to="/" >Home</Link>
                            <Link to="/about" >About</Link>
                            <Link to="/contact" >Contact</Link>
                        </nav>
                    </nav>
                </div>

                <div class=" col-lg-8 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default MyJobDashboard;
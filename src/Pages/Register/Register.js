import React, { useContext, useState } from 'react';
import LoginLogo from '../../assets/logo/carriers-bangladesh-logo.png';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import { toast } from 'react-hot-toast';
import { Form } from 'react-bootstrap';
import '../Login/Login.css';

const Register = () => {
    const { setLoading } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();
    useTitle('Register');

    const { createUser } = useContext(AuthContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        // console.log("Email and Password : ", email, password)

        if (password.length < 6) {
            setError('Password must be more than 6 character.');
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log("User Data:", result.user);
                toast.success('User created and login successfully.')
                navigate("/");

                setError('');
                form.reset();
            })
            .catch(error => {
                console.log("Error : ", error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }




    return (
        <div>
            <section className="  gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card text-black">
                                <div className="row g-0  rounded-5">
                                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo-area" style={{ backgroundColor: "#505b79" }}>
                                        <div className="px-3 py-lg-4 p-md-5  mx-auto">
                                            <img className='login_logo' src={LoginLogo} alt="" />
                                        </div>
                                        <h2 className=" mb-lg-4 text-white text-center">Careers Bangladesh</h2>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="card-body login_form p-5" style={{ backgroundColor: "#EEF1F6" }}>




                                            <Form onSubmit={handleOnSubmit} className=' rounded rounded-2 bg-sm p-5 '>
                                                <Form.Text className="text-danger text-center">
                                                    {error}
                                                </Form.Text>
                                                <div className=''>
                                                    <h5 className=' mb-4'>Please login to your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="username">Username</label>
                                                        <input type="name" id="name" className="form-control"
                                                            placeholder="Enter Name" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                        <input type="email" id="email" className="form-control"
                                                            placeholder="Enter email address" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" className="form-control" placeholder='Enter password' />
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button className="custom_btn mb-3" type="submit">
                                                            Register
                                                        </button>
                                                        <a className="text-muted m-2 " href="#!">Forgot password?</a>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Already have an account?</p>
                                                        <Link to="/login"><button type="button" className=" custom_btn">Go Login</button></Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <p>or sign up with:</p>
                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            <FaFacebook />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            <FaGoogle />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            <FaTwitter />
                                                        </button>

                                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                                            <FaGithub />
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
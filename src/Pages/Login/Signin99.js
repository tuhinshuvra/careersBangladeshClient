import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signin99 = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || '/';


    const handleLogin = (data) => {
        console.log(data);

    }

    return (
        <div className=' h-[500px] flex justify-center items-center my-32'>
            <div className=' w-96 p-4 '>
                <h2 className=' text-2xl font-bold  text-center'>Singin</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className=' flex   mt-8 mb-4 justify-center gap-2'>
                        <button className='btn btn-primary'>Employers</button>
                        <button className='btn btn-secondary'>Job Seeker</button>
                        <FaGoogle></FaGoogle>
                        {/* <button className="btn bg-violet-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Job Seeker</button> */}
                    </div>

                    <div> {loginError && <p className=' text-red-600'>{loginError}</p>}</div>
                    <label className="label"><span className="label-text font-bold">Email</span></label>
                    <input type="email"  {...register("email",
                        { required: 'Email is required' })}
                        className="input input-bordered w-full" placeholder="Email" />
                    {errors.email && <p className=' text-red-600' role="alert">{errors.email?.message}</p>}

                    <label className="label"><span className="label-text font-bold">Password</span></label>
                    <input type="password"  {...register("password", { required: 'Password is required' })}
                        className="input input-bordered  w-full" placeholder="Password" />
                    {errors.password && <p className=' text-red-600' role="alert">{errors.password?.message}</p>}

                    <label className="label"><span className="label-text">Forget Password ? </span></label>

                    <input className=' btn  btn-primary my-3 float-right w-full' value='Login' type="submit" />
                </form>
                <p>New to doctors portal<Link to='/register' className=' text-accent '> Create New Account</Link> </p>
                <div className="divider">OR</div>
                <input className='btn  btn-primary btn-outline my-3 float-right w-full' value='Continue with Google' type="submit" />
                <p className=' text-center'> OR</p>
                <input className='btn  btn-primary btn-outline my-3 float-right w-full' value='Continue with Facebook' type="submit" />
            </div>
        </div>
    );
};

export default Signin99;
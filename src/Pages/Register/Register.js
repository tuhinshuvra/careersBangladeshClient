import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');


    const submitHandler = (data) => {
        console.log(data);
    }



    return (
        <div className=' flex justify-center items-center my-16 '>
            <div className=' w-96 p-4'>
                <h2 className=' text-2xl font-bold  text-center'>Register</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    {signUpError && <p className=' text-red-600'>{signUpError}</p>}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="name"
                            name='name'
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>Name is required</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">User Type</span> </label>
                        <select type="text"
                            {...register("userType")}
                            className="input input-bordered w-full">
                            <option selected value="jobseeker">Job Seeker</option>
                            <option value="employer">Employer</option>
                        </select>
                        {/* {errors.userType && <p className='text-red-500'>{errors.userType.message}</p>} */}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email"
                            name='email'
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-600'>Email is required</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input
                            type="password"
                            name='password'
                            {...register("password",
                                {
                                    required: true,
                                    minLength: { value: 6, message: "Password length must be minimum 6" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                },
                            )}

                            placeholder="Password"
                            className="input input-bordered w-full"
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className=' mt-3 btn btn-primary form-control w-full' type="submit" value='SingUp' />
                    <p className=' my-3 text-center'> <b> Already have an account?</b> <Link to='/signin'> <span className=' text-accent '>Go to login</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
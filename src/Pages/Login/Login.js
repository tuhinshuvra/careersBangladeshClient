import React, { useContext, useState } from "react";
import LoginLogo from "../../assets/logo/carriers-bangladesh-logo.png";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Authentication/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./Login.css";

const Login = () => {
  useTitle("Login");

  const {user,signIn}=useContext(AuthContext);
  const { register, handleSubmit,formState: { errors },  } = useForm();
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User Login Successfully",{duration:1000, position:'bottom-center',icon:'👏'});
        navigate(from, { replace: true });
        // console.log(user);
        // setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
        toast.error(error.message);
        // console.log(error);
      });
    // console.log(data);
  };  
  


  // const userType = allUser.find((user)=> user.email === loginUser.email )

  const handleShowPassword = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };



  return (
    <div>
      <section className="gradient-form" style={{}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card text-black">
                <div className="row g-0  rounded-5">
                  <div
                    className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo-area"
                    style={{}}
                  >
                    <div className="px-3 py-lg-4 p-md-5  mx-auto">
                      <img className="login_logo" src={LoginLogo} alt="" />
                    </div>
                    <h2 className=" mb-lg-4 text-white">Careers Bangladesh</h2>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="card-body login_form p-5"
                      style={{ backgroundColor: "#EEF1F6" }}
                    >
                      <form
                        onSubmit={handleSubmit(handleLogin)}
                        className=" rounded rounded-2 bg-sm p-5 "
                      >
                        {loginError && (
                          <p className=" font-bold text-red-600">
                            {loginError}
                          </p>
                        )}
                        <div className="">
                          <h5 className=" mb-4 text-center fw-bold">
                            Please login to your account
                          </h5>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="userType">
                              Select Role
                            </label>
                            <select
                              type="text"
                              {...register("userType")}
                              className="form-control"
                            >
                              <option value="employer">Employer</option>
                              <option value="jobseeker" selected>
                                Job Seeker
                              </option>
                            </select>
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="username">
                              Email
                            </label>
                            <input
                              type="email"
                              id="username"
                              {...register("email", {
                                required: "Email address is required",
                              })}
                              className="form-control"
                              placeholder="Phone number or email address"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              {...register("password", {
                                required: "Password is required",
                                minLength: {
                                  value: 6,
                                  message:
                                    "Password must be minimum 6 characters",
                                },
                              })}
                              className="form-control"
                              placeholder="Enter password"
                            />
                          </div>

                          {/* show password */}
                          <input type="checkbox" onClick={handleShowPassword} />
                          <span className=" ms-2"> Show Password</span>

                          {errors.password && (
                            <p className=" text-red-600" role="alert">
                              {errors.password?.message}
                            </p>
                          )}
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="custom_btn mb-3"
                              type="submit"
                              value="login"
                            >
                              Log In
                            </button>
                            <Link
                              className="text-muted m-2 text-decoration-none "
                              to="#"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <Link to="/register">
                              <button type="button" className=" custom_btn">
                                Create new
                              </button>
                            </Link>
                          </div>
                          <div className="text-center">
                            <p>or sign up with:</p>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <FaFacebook />
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <FaGoogle />
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <FaTwitter />
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <FaGithub />
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Login;

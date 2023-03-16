import React, { useContext, useState } from "react";
import LoginLogo from "../../assets/logo/carriers-bangladesh-logo.png";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../Authentication/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-hot-toast";
import { Form } from "react-bootstrap";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    refetch,
  } = useForm();
  const { createUser, updateUser, setLoading } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();
  useTitle("Register");

  const handleOnSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log("User Info:", user)
        toast.success("User created and login successfully.");
        refetch();

        const userInfo = {
          displayName: data?.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.userType);
          })
          .catch((error) => {
            // console.log(error)
            setSignUpError(errors.message);
          });
        // form.reset();
        navigate("/");
        refetch();
      })
      .catch((error) => {
        // console.log("Error : ", error)
        setSignUpError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleTermsAndConditions = (event) => {
    setAccepted(event.target.checked);
  };

  const saveUser = (name, email, userType) => {
    const user = { name, email, userType };

    fetch(`${process.env.REACT_APP_CABD_server_address}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

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
      <section className="  gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card text-black">
                <div className="row g-0  rounded-5">
                  <div
                    className="col-lg-5 d-flex flex-column justify-content-center align-items-center logo-area"
                    style={{ backgroundColor: "#505b79" }}
                  >
                    <div className="px-3 py-lg-4 p-md-5  mx-auto">
                      <img className="login_logo" src={LoginLogo} alt="" />
                    </div>
                    <h2 className=" mb-lg-4 text-white text-center">
                      Careers Bangladesh
                    </h2>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="card-body login_form p-5"
                      style={{ backgroundColor: "#EEF1F6" }}
                    >
                      <Form
                        onSubmit={handleSubmit(handleOnSubmit)}
                        className=" rounded rounded-2 bg-sm p-5 "
                      >
                        <Form.Text className="text-danger text-center">
                          {signUpError}
                        </Form.Text>
                        <div className="">
                          <h5 className=" mb-4 text-center fw-bold">
                            Please Register
                          </h5>

                          <div className=" d-flex justify-content-end">
                            <p className="">
                              <span className="star">&#x2605; </span>
                              <b> field must be filled</b>
                            </p>
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="fullname">
                              Full Name<span className="star">&#x2605;</span>
                            </label>
                            <input
                              type="name"
                              name="name"
                              {...register("name", { required: true })}
                              className="form-control"
                              placeholder="Enter Name"
                            />
                            {errors.name && (
                              <p className="text-red-600">Name is required</p>
                            )}
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="userType">
                              Select Role <span className="star">&#x2605;</span>
                            </label>
                            <select
                              type="text"
                              {...register("userType")}
                              className="form-control"
                              required
                            >
                              <option value="employer">Employer</option>
                              <option value="jobseeker" selected>
                                Job Seeker
                              </option>
                            </select>
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              Email <span className="star">&#x2605;</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              {...register("email", { required: true })}
                              className="form-control"
                              placeholder="Enter email address"
                            />
                            {errors.email && (
                              <p className="text-red-600">Email is required</p>
                            )}
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                              Password <span className="star">&#x2605;</span>
                            </label>
                            {/* <input type="password" id="password" className="form-control" placeholder='Enter password' /> */}

                            <input
                              name="password"
                              id="password"
                              type="password"
                              {...register("password", {
                                required: true,
                                minLength: {
                                  value: 6,
                                  message: "Password length must be minimum 6",
                                },
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                              })}
                              placeholder="Enter a password"
                              className=" form-control"
                            />
                            {errors.password && (
                              <p className="text-red-500">
                                {errors.password.message}
                              </p>
                            )}
                          </div>

                          {/* show password */}
                          <input
                            // className=" form-check "
                            type="checkbox"
                            onClick={handleShowPassword}
                          />
                          <span className=" ms-2"> Show Password</span>

                          <div className="">
                            <Form.Check
                              onClick={handleTermsAndConditions}
                              className=""
                              type="checkbox"
                              label={
                                <>
                                  Accept{" "}
                                  <Link
                                    to="/termsAndConditions"
                                    className=" text-decoration-none fw-bold"
                                  >
                                    {" "}
                                    Terms and Conditons
                                  </Link>{" "}
                                </>
                              }
                            />
                          </div>

                          {/* {termsAndConditions != checked } */}

                          <div className="text-center pt-1 mb-5 pb-1">
                            <Button
                              className="custom_btn"
                              disabled={!accepted}
                              type="submit"
                            >
                              Register
                            </Button>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">
                              Already have an account?
                            </p>
                            <Link to="/login">
                              <button type="button" className=" custom_btn">
                                Go Login
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

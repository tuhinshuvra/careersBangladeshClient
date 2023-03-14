import React, { useContext } from "react";
import { HiBell } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import "./Subscriber.css";

const Subscriber = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

  const handleEmployeProfile = (data) => {
    const subscribers = {
      name: user?.displayName,
      subsEmail: data.subsEmail,
    };

    console.log("Employee Data :", subscribers);

    fetch(`${process.env.REACT_APP_CABD_server_address}/subscribers`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscribers),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Your Email Subscribed Successfully");
          data.target.reset();
        } else toast.error(data.message);
      });
  };

  return (
    <div className=" subscriber_bg">
      <div className=" col-lg-10 mx-auto pt-5">
        <h2 className="careers_title_one">
          <HiBell className=" mx-1"></HiBell> GET RELEVANT JOB ALERT
        </h2>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-5 text-center text-lg-start">
            <h2 className="fw-bold lh-1 mb-3 text-white ">
              Get your job alert and always be one step ahead from others
            </h2>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form
              onSubmit={handleSubmit(handleEmployeProfile)}
              className="p-4 px-md-3 py-md-5 border rounded-3  d-flex justify-content-between"
            >
              <input
                {...register("subsEmail", { required: true })}
                name="subsEmail"
                className="input form-control"
                id="subsEmail"
                type="email"
                placeholder="Enter an active email id"
              />
              <button type="submit" name="submit" className="custom_btn ms-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;

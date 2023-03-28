import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import JobSeekersProfileEntry from "./JobSeekersProfileEntry";

const JobSeekersPersonalDetailsEntry = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // const address = require("@bangladeshi/bangladesh-address");
  // console.log("address allUpazila: ", address.allUpazila());

  const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

  const handleJobSeekerProfile = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const jobSeekersPersonal = {
            email: user.email,
            name: user.displayName,

            skill: data.skill,
            fathersName: data.fathers_name,
            mothersName: data.mothers_name,
            nationality: data.nationality,
            nationalId: data.nationalId,
            passportNo: data.passportNo,
            phone: data.phone,
            birthDate: data.birthDate,
            gender: data.gender,
            religion: data.religion,
            maritalStatus: data.maritalStatus,
            image: imgData.data.url,

            // presentAddress
            presentDistrict: data.presentDistrict,
            presentThana: data.presentThana,
            presentPostOffice: data.presentPostOffice,
            presentAddressLine2: data.presentAddressLine2,

            // permanentAddress
            permanentDistrict: data.permanentDistrict,
            permanentThana: data.permanentThana,
            permanentPostOffice: data.permanentPostOffice,
            permanentAddressLine2: data.permanentAddressLine2,

            careerObjective: data.career_objective,
          };

          // console.log("Job Seeker Data :", data);

          fetch(
            `${process.env.REACT_APP_CABD_server_address}/jobSeekersPersonal`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(jobSeekersPersonal),
          }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                toast.success(
                  `${user.displayName} Profile Data Saved Successfully`
                );
                navigate("/dashboard/jobSeekerProfileEntry");
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };

  const handlePermanentAddress = () => {
    console.log("I am clicked");
    let presentDistrict = document.getElementById("presentDistrict");
    let presentThana = document.getElementById("presentThana");
    let presentPostOffice = document.getElementById("presentPostOffice");
    let presentAddressLine2 = document.getElementById("presentAddressLine2");

    let permanentDistrict = document.getElementById("permanentDistrict");
    let permanentThana = document.getElementById("permanentThana");
    let permanentPostOffice = document.getElementById("permanentPostOffice");
    let permanentAddressLine2 = document.getElementById("permanentAddressLine2");

    permanentDistrict.value = presentDistrict.value;
    permanentThana.value = presentThana.value;
    permanentPostOffice.value = presentPostOffice.value;
    permanentAddressLine2.value = presentAddressLine2.value;
  };

  return (
    <div>
      <JobSeekersProfileEntry></JobSeekersProfileEntry>

      <div>
        <h2 className=" text-center fw-bold my-4">
          Enter Personal Details Data
        </h2>

        <div className=" d-flex justify-content-end">
          <p className="">
            {" "}
            <span className="star">&#x2605; </span>{" "}
            <b>(Red Star) denotes must be filled</b>
          </p>
        </div>

        <form onSubmit={handleSubmit(handleJobSeekerProfile)}>
          <div className="row ">
            <div className="col-md-6 mb-3 mb-3">
              <span className="label-text text-md fw-bold">
                Father's Name <span className="star">&#x2605;</span>
              </span>
              <input
                {...register("fathers_name", { required: true })}
                name="fathers_name"
                className="input form-control "
                id="fathers_name"
                type="text"
                placeholder="Enter Fathers Name"
              />
            </div>

            <div className="col-md-6 mb-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Mother's Name<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("mothers_name", { required: true })}
                name="mothers_name"
                className="input form-control "
                id="mothers_name"
                type="text"
                placeholder="Enter Mothers Name"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                Phone<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("phone", { required: true })}
                name="phone"
                className="input form-control "
                id="phone"
                type="text"
                placeholder="Enter Phone No"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                Date of Birth<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("birthDate", { required: true })}
                name="birthDate"
                className="input form-control "
                id="birthDate"
                type="date"
              />
            </div>

            <div className="col-md-4 mb-3  ">
              <span className="label-text text-md fw-bold  ">
                Gender<span className="star">&#x2605;</span>
              </span>
              <select
                {...register("gender")}
                name="gender"
                className="form-select  "
              >
                <option>-Select Gender-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                Nationality<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("nationality")}
                name="nationality"
                className="input form-control "
                id="nationality"
                type="text"
                placeholder="Enter nationality"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                National Id No.<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("nationalId")}
                name="nationalId"
                className="input form-control "
                id="nationalId"
                type="text"
                required
                placeholder="Enter nationalId No"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">Passport No.</span>
              <input
                {...register("passportNo")}
                name="passportNo"
                className="input form-control "
                id="passportNo"
                type="text"
                placeholder="Enter passport no"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">Religion</span>
              <select
                {...register("religion")}
                name="religion"
                className="form-select"
              >
                <option>-Select Religion-</option>
                <option value="Islam">Islam</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Christianity">Christianity</option>
                <option value="Judaism">Judaism</option>
                <option value="Irreligion">Irreligion</option>
                <option value="Folk religions">Folk religions</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-4 mb-3 ">
              <span className={`label-text text-md fw-bold`}>
                Marital Status
              </span>
              <select
                {...register("maritalStatus")}
                name="maritalStatus"
                id="maritalStatus"
                className="form-select select-bordered"
              >
                <option>-Select Marital Status-</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                Photo<span className="star">&#x2605;</span>
              </span>
              <input
                {...register("image", { required: true })}
                name="image"
                className="input form-control "
                id="image"
                type="file"
              />
            </div>
          </div>

          {/* present Address section start */}
          <div className=" mb-3 mt-3">
            <span className="label-text text-md fw-bold ">Present Address</span>

            <div className=" row border border-secondary-subtel rounded-2">
              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold">
                  District <span className="star">&#x2605;</span>
                </span>
                <select
                  {...register("presentDistrict")}
                  name="presentDistrict"
                  id="presentDistrict"
                  required
                  className="form-select select-bordered"
                >
                  <option>-Select District-</option>
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Cox'sBazar">Cox'sBazar</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Feni">Feni</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Jaipurhat">Jaipurhat</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Jessore">Jessore</option>
                  <option value="Jhalokati">Jhalokati</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Khagrachari">Khagrachari</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Lalmonirhat">Lalmonirhat</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Magura">Magura</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Maulvibazar">Maulvibazar</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Narail">Narail</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Natore">Natore</option>
                  <option value="Nawabganj">Nawabganj</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Nilphamari">Nilphamari</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Sirajganj">Sirajganj</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                </select>
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">
                  Thana <span className="star">&#x2605;</span>
                </span>
                <input
                  {...register("presentThana")}
                  name="presentThana"
                  className="input form-control "
                  id="presentThana"
                  type="text"
                  required
                  placeholder="Enter thana"
                />
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">
                  Post Office<span className="star">&#x2605;</span>
                </span>
                <input
                  {...register("presentPostOffice")}
                  name="presentPostOffice"
                  className="input form-control "
                  id="presentPostOffice"
                  type="text"
                  required
                  placeholder="Enter post office"
                />
              </div>

              <div className="p-2">
                <span
                  className="label-text text-md fw-bold ms-1
                   "
                >
                  Address Line 2
                </span>
                <input
                  {...register("presentAddressLine2")}
                  name="presentAddressLine2"
                  id="presentAddressLine2"
                  className="input form-control "
                  type="text"
                  placeholder="Enter address line 2"
                />
              </div>
            </div>
          </div>
          {/* present Address section end */}

          {/* permanent Address section start */}

          <div className=" mt-5 mb-3">
            <div className=" d-flex justify-content-between">
              <span className="label-text text-md fw-bold ">
                Permanent Address
              </span>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="handlePermanentAddress"
                  onClick={handlePermanentAddress}
                />
                <label className="form-check-label fw-bold " for="flexCheckDefault">
                  Same as Present Address
                </label>
              </div>
            </div>

            <div className=" row border border-secondary-subtel rounded-2">
              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold">District</span>
                <select
                  {...register("permanentDistrict")}
                  name="permanentDistrict"
                  id="permanentDistrict"
                  required
                  className="form-select select-bordered"
                >
                  <option>-Select District-</option>
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Cox'sBazar">Cox'sBazar</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Feni">Feni</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Jaipurhat">Jaipurhat</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Jessore">Jessore</option>
                  <option value="Jhalokati">Jhalokati</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Khagrachari">Khagrachari</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Lalmonirhat">Lalmonirhat</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Magura">Magura</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Maulvibazar">Maulvibazar</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Narail">Narail</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Natore">Natore</option>
                  <option value="Nawabganj">Nawabganj</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Nilphamari">Nilphamari</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Sirajganj">Sirajganj</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                </select>
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">Thana</span>
                <input
                  {...register("permanentThana")}
                  name="permanentThana"
                  id="permanentThana"
                  className="input form-control "
                  type="text"
                  required
                  placeholder="Enter thana"
                />
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">
                  Post Office
                </span>
                <input
                  {...register("permanentPostOffice")}
                  name="permanentPostOffice"
                  className="input form-control "
                  id="permanentPostOffice"
                  type="text"
                  required
                  placeholder="Enter post office"
                />
              </div>

              <div className="p-2">
                <span
                  className="label-text text-md fw-bold ms-1
                   "
                >
                  Address Line 2
                </span>
                <input
                  {...register("permanentAddressLine2")}
                  name="permanentAddressLine2"
                  id="permanentAddressLine2"
                  className="input form-control "
                  type="text"
                  placeholder="Enter address line 2"
                />
              </div>
            </div>
          </div>
          {/* permanent  Address section end */}

          <div className="mb-3 ">
            <span className="label-text text-md fw-bold text-center ">
              Career Objective<span className="star">&#x2605;</span>
            </span>
            <div className=" ">
              <textarea
                {...register("career_objective", { required: true })}
                name="career_objective"
                className="input form-control "
                id="career_objective"
                type="text"
                placeholder="Enter Career Objective"
                maxLength={250}
              />
            </div>
          </div>

          <div className=" d-flex justify-content-between my-lg-5">
            <button className="btn btn-warning fw-bold">Cancel</button>
            <button type="submit" name="submit" className="custom_btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSeekersPersonalDetailsEntry;

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import JobSeekersProfileManage from "./JobSeekersProfileManage";

const JobSeekersPersonalDetailsManage = () => {
  // const { user } = useContext(AuthContext)

  const storedData = useLoaderData();
  const [personalDetails, setPersonalDetails] = useState(storedData);

  // const navigate = useNavigate();

  // const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

  const handleUpdatePersonalDoc = (event) => {
    event.preventDefault();

    console.log("personalDetails :", personalDetails);

    fetch(
      `${process.env.REACT_APP_CABD_server_address}/jobSeekersPersonal/${storedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(personalDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Data :", data);
        if (data.modifiedCount > 0) {
          toast.success("Data Updated Successfully.");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...personalDetails };
    newData[field] = value;
    setPersonalDetails(newData);
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
    let permanentAddressLine2 = document.getElementById(
      "permanentAddressLine2"
    );

    permanentDistrict.value = presentDistrict.value;
    permanentThana.value = presentThana.value;
    permanentPostOffice.value = presentPostOffice.value;
    permanentAddressLine2.value = presentAddressLine2.value;
  };

  return (
    <div>
      <JobSeekersProfileManage></JobSeekersProfileManage>

      <div>
        {/* <h2>Personal Details</h2> */}

        <h2 className=" text-center fw-bold my-4">
          Update Personal Details Data
        </h2>

        <div className=" d-flex justify-content-end">
          <p className="">
            {" "}
            <span className="star">&#x2605; </span>{" "}
            <b>(Red Star) denotes must be filled</b>
          </p>
        </div>

        <form onSubmit={handleUpdatePersonalDoc}>
          <div className="row ">
            <div className="col-md-6 mb-3 mb-3">
              <span className="label-text text-md fw-bold">
                Father's Name <span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.fathersName}
                name="fathersName"
                className="input form-control "
                id="fathersName"
                type="text"
              />
            </div>

            <div className="col-md-6 mb-3 mb-3">
              <span className="label-text text-md fw-bold  ">
                Mother's Name<span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.mothersName}
                name="mothersName"
                className="input form-control "
                id="mothersName"
                type="text"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold">
                Phone<span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.phone}
                name="phone"
                className="input form-control "
                id="phone"
                type="text"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">
                Date of Birth<span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.birthDate}
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
                onChange={handleInputChange}
                name="gender"
                className="form-select  "
              >
                <option defaultValue={storedData.gender}>
                  {storedData.gender}
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold">
                Nationality<span className="star">&#x2605;</span>
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.nationality}
                name="nationality"
                className="input form-control "
                id="nationality"
                type="text"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold">
                National Id No.
              </span>
              <input
                onChange={handleInputChange}
                defaultValue={storedData.nationalId}
                name="nationalId"
                className="input form-control "
                id="nationalId"
                type="text"
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">Passport No.</span>
              <input
                onChange={handleInputChange}
                name="passportNo"
                className="input form-control "
                id="passportNo"
                type="text"
                defaultValue={storedData.passportNo}
              />
            </div>

            <div className="col-md-4 mb-3 ">
              <span className="label-text text-md fw-bold  ">Religion</span>
              <select
                onChange={handleInputChange}
                name="religion"
                className="form-select select-bordered"
              >
                <option defaultValue={storedData.religion}>
                  {storedData.religion}
                </option>
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
                onChange={handleInputChange}
                name="maritalStatus"
                className="form-select select-bordered"
              >
                <option defaultValue={storedData.maritalStatus}>
                  {storedData.maritalStatus}
                </option>
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
                // onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="presentDistrict"
                  id="presentDistrict"
                  className="form-select select-bordered"
                >
                  <option defaultValue={storedData.presentDistrict}>
                    {storedData.presentDistrict}
                  </option>
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
                  onChange={handleInputChange}
                  name="presentThana"
                  className="input form-control "
                  id="presentThana"
                  type="text"
                  defaultValue={storedData.presentThana}
                />
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">
                  Post Office<span className="star">&#x2605;</span>
                </span>
                <input
                  onChange={handleInputChange}
                  name="presentPostOffice"
                  className="input form-control "
                  id="presentPostOffice"
                  type="text"
                  defaultValue={storedData.presentPostOffice}
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
                  onChange={handleInputChange}
                  name="presentAddressLine2"
                  id="presentAddressLine2"
                  className="input form-control "
                  type="text"
                  defaultValue={storedData.presentAddressLine2}
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

              <div class="form-check">
                {/* <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="handlePermanentAddress"
                  onClick={handlePermanentAddress}
                />
                <label class="form-check-label fw-bold " for="flexCheckDefault">
                  Same as Present Address
                </label> */}
              </div>
            </div>

            <div className=" row border border-secondary-subtel rounded-2">
              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold">District</span>
                <select
                  onChange={handleInputChange}
                  defaultValue={storedData.permanentDistrict}
                  name="permanentDistrict"
                  id="permanentDistrict"
                  required
                  className="form-select select-bordered"
                >
                  <option defaultValue={storedData.permanentDistrict}>
                    {storedData.permanentDistrict}
                  </option>
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
                  onChange={handleInputChange}
                  name="permanentThana"
                  id="permanentThana"
                  className="input form-control "
                  type="text"
                  defaultValue={storedData.permanentThana}
                />
              </div>

              <div className="col-md-4 my-2 ">
                <span className="label-text text-md fw-bold  ">
                  Post Office
                </span>
                <input
                  onChange={handleInputChange}
                  name="permanentPostOffice"
                  className="input form-control "
                  id="permanentPostOffice"
                  type="text"
                  defaultValue={storedData.permanentPostOffice}
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
                  onChange={handleInputChange}
                  name="permanentAddressLine2"
                  id="permanentAddressLine2"
                  className="input form-control "
                  type="text"
                  defaultValue={storedData.permanentAddressLine2}
                />
              </div>
            </div>
          </div>

          <div className="mb-3 ">
            <span className="label-text text-md fw-bold text-center ">
              Career Objective<span className="star">&#x2605;</span>
            </span>
            <div className=" ">
              <textarea
                onChange={handleInputChange}
                defaultValue={storedData.careerObjective}
                name="careerObjective"
                className="input form-control "
                id="career_objective"
                type="text"
                placeholder="Enter Career Objective"
                maxLength={450}
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

export default JobSeekersPersonalDetailsManage;

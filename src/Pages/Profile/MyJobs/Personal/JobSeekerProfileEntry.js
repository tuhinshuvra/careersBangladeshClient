import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';

const JobSeekerProfileEntry = () => {

    const { user } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleJobSeekerProfile = (data) => {
        const jobseekerProfile = {
            email: user.email,
            name: user.displayName,
            careerObjective: data.career_objective,
            skill: data.skill,
            experience: data.experience,
            achivement: data.achivement,
            birthDete: data.birth_dete,
            qualification: data.qualification,
            institute: data.institute,
            passingYear: data.passing_year,
            linkOne: data.link_one,
            linkTwo: data.link_two,
            linkThree: data.link_three,
            portfolio: data.portfolio,
            language: data.language,
            fathersName: data.fathers_name,
            mothersName: data.mothers_name,
            phone: data.phone,
            image: data.image,
            gender: data.gender,
            religion: data.religion,
            maritialStatus: data.maritial_status,
            presentAddress: data.present_addres,
            permanentAddress: data.permanent_address,
            refOneName: data.ref_one_name,
            refOneDetails: data.ref_one_details,
            refTwoName: data.ref_two_name,
            refTwoDetails: data.ref_two_details,
            other: data.other,

        }
        console.log("Job Seeker Data :", data);

        fetch('https://careers-bangladesh-server.vercel.app/jobseekerProfile', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobseekerProfile)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast('My Profile Data Saved Successfully')
                navigate("/dashboard/jobSeekerProfile");
            })
    }

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">
                Job Seeker Profile Entry
            </h2>

            <form onSubmit={handleSubmit(handleJobSeekerProfile)} >

                <div className="row my-4">
                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Father's Name</span>
                        <input
                            {...register("fathers_name", { required: true })}
                            name='fathers_name'
                            className='input form-control my-lg-3'
                            id="fathers_name"
                            type="text"
                            placeholder='Enter Fathers Name'
                        />
                    </div>

                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Mother's Name</span>
                        <input
                            {...register("mothers_name", { required: true })}
                            name='mothers_name'
                            className='input form-control my-lg-3'
                            id="mothers_name"
                            type="text"
                            placeholder='Enter Mothers Name'
                        />
                    </div>


                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Phone</span>
                        <input
                            {...register("phone", { required: true })}
                            name='phone'
                            className='input form-control my-lg-3'
                            id="phone"
                            type="text"
                            placeholder='Enter Phone No'
                        />
                    </div>

                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Photo</span>
                        <input
                            {...register("image",)}
                            name='image'
                            className='input form-control my-lg-3'
                            id="image"
                            type="file"
                        />
                    </div>
                </div>

                <span className="label-text text-md font-bold ">Career Objective</span>
                <div>
                    <textarea {...register("career_objective", { required: true })}
                        name='career_objective'
                        className='input form-control my-lg-3'
                        id='career_objective' type="text"
                        placeholder='Enter Career Objective'
                    />
                </div>

                <span className="label-text text-md font-bold ">Obtained Skill</span>
                <div>
                    <textarea {...register("skill", { required: true })}
                        name='skill'
                        className='input form-control my-lg-3'
                        id='skill' type="text"
                        placeholder='Enter Obtained Skill'
                    />
                </div>




                <span className="label-text text-md font-bold ">Experience</span>
                <div>
                    <textarea {...register("experience",)}
                        name='experience'
                        className='input form-control my-lg-3'
                        id='experience' type="text"
                        placeholder='Enter Experience'
                    />
                </div>

                <span className="label-text text-md font-bold ">Achivement</span>
                <div>
                    <textarea {...register("achivement",)}
                        name='achivement'
                        className='input form-control my-lg-3'
                        id='achivement' type="text"
                        placeholder='Enter achivement'
                    />
                </div>

                <div className="row my-2">
                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Date of Birth</span>
                        <input
                            {...register("birth_dete", { required: true })}
                            name='birth_dete'
                            className='input form-control my-lg-3'
                            id="birth_date"
                            type="date"
                        />
                    </div>


                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Qualification</span>
                        <input
                            {...register("qualification", { required: true })}
                            name='qualification'
                            className='input form-control my-lg-3'
                            id="qualification"
                            type="text"
                            placeholder='Enter last obtain degree'
                        />
                    </div>

                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Institute</span>
                        <input
                            {...register("institute", { required: true })}
                            name='institute'
                            className='input form-control my-lg-3'
                            id="institute"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>




                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Passing Year</span>
                        <select
                            {...register("passing_year", { required: true })}
                            id="passing_year"
                            name="passing_year"
                            className='input form-control my-lg-3'
                        >
                            <option selected disabled>Select Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>

                        </select>


                    </div>

                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Enter Work Link</span>
                        <input
                            {...register("link_one",)}
                            name='link_one'
                            className='input form-control my-lg-3'
                            id="link_one"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Enter Link</span>
                        <input
                            {...register("link_two",)}
                            name='link_two'
                            className='input form-control my-lg-3'
                            id="link_two"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>

                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Enter Link</span>
                        <input
                            {...register("link_three",)}
                            name='link_three'
                            className='input form-control my-lg-3'
                            id="link_three"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Enter Portfolio Link</span>
                        <input
                            {...register("portfolio")}
                            name='portfolio'
                            className='input form-control my-lg-3'
                            id="portfolio"
                            type="text"
                            placeholder='Enter Portfolio Link'
                        />
                    </div>
                </div>

                <span className="label-text text-md font-bold ">Language</span>
                <input
                    {...register("language", { required: true })}
                    name='language'
                    className='input form-control my-lg-3'
                    id="language"
                    type="text"
                    placeholder='Enter skilld language'
                />



                <div className="row my-4">
                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Gender</span>
                        <select
                            {...register("gender")}
                            name="gender"
                            className="form-select">
                            <option disabled selected>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Regigion</span>
                        <select
                            {...register("religion")}
                            name="religion"
                            className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>Islam</option>
                            <option value={1}>Buddhism</option>
                            <option value={2}>Hinduism</option>
                            <option value={3}>Christianity</option>
                            <option value={4}>Judaism</option>
                            <option value={5}>Irreligion</option>
                            <option value={6}>Folk religions</option>
                            <option value={99}>Others</option>
                        </select>
                    </div>

                    <div className='col-md-4 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Marital Status</span>
                        <select
                            {...register("maritial_status")}
                            name="maritial_status"
                            className="form-select select-bordered  ">
                            <option disabled selected>Select</option>
                            <option value={0}>Married</option>
                            <option value={1}>Unmarried</option>
                            <option value={2}>Single</option>
                        </select>
                    </div>
                </div>

                <span className="label-text text-md font-bold ">Present Address</span>
                <div>
                    <textarea {...register("present_address", { required: true })}
                        name='present_address'
                        className='input form-control my-lg-3'
                        id='present_address' type="text"
                        placeholder='Write Your Pressent Address'
                    />
                </div>

                <span className="label-text text-md font-bold ">Permanent Address</span>
                <div>
                    <textarea {...register("permanent_address",)}
                        name='permanent_address'
                        className='input form-control my-lg-3'
                        id='permanent_address' type="text"
                        placeholder='Write Your Permanent Address'
                    />
                </div>


                <div className="row my-4">
                    <div className='col-md-6 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Refferece One Name</span>
                        <input
                            {...register("ref_one_name",)}
                            name='ref_one_name'
                            className='input form-control my-lg-3'
                            id="ref_one_name"
                            type="text"
                            placeholder='Enter Refferece One Name'
                        />
                    </div>

                    <div className='col-md-6 my-lg-0 margin-sm'>

                        <span className="label-text text-md font-bold ">Refferece One Details</span>
                        <div>
                            <textarea {...register("ref_one_details",)}
                                name='ref_one_details'
                                className='input form-control my-lg-3'
                                id='ref_one_details' type="text"
                                placeholder='Enter Refference One Details'
                            />
                        </div>
                    </div>

                    <div className='col-md-6 my-lg-0 margin-sm'>
                        <span className="label-text text-md font-bold ">Refferece Two Name</span>
                        <input
                            {...register("ref_two_name",)}
                            name='ref_two_name'
                            className='input form-control my-lg-3'
                            id="ref_two_name"
                            type="text"
                            placeholder='Enter Refferece Two Name'
                        />
                    </div>


                    <div className='col-md-6 my-lg-0 margin-sm'>

                        <span className="label-text text-md font-bold ">Refferece Two Details</span>
                        <div>
                            <textarea {...register("ref_two_details",)}
                                name='ref_two_details'
                                className='input form-control my-lg-3'
                                id='ref_two_details' type="text"
                                placeholder='Enter Refference Two Details'
                            />
                        </div>
                    </div>
                </div>


                <span className="label-text text-md font-bold ">Other</span>
                <div>
                    <textarea {...register("other")}
                        name='other'
                        className='input form-control my-lg-3'
                        id='other' type="text"
                        placeholder='Enter Other Relevant Information'
                    />
                </div>


                <div className=' d-flex justify-content-between my-lg-5'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default JobSeekerProfileEntry;
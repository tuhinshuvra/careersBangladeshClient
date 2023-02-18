import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

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

        fetch('http://localhost:5000/jobseekerProfile', {
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

                <h4 className="label-text text-md fw-bold  text-center">Personal Details</h4>

                <div className="row my-3">
                    <div className='col-md-6'>
                        <span className="label-text text-md fw-bold my-3 ">Father's Name</span>
                        <input
                            {...register("fathers_name", { required: true })}
                            name='fathers_name'
                            className='input form-control '
                            id="fathers_name"
                            type="text"
                            placeholder='Enter Fathers Name'
                        />
                    </div>

                    <div className='col-md-6'>
                        <span className="label-text text-md fw-bold my-3 ">Mother's Name</span>
                        <input
                            {...register("mothers_name", { required: true })}
                            name='mothers_name'
                            className='input form-control '
                            id="mothers_name"
                            type="text"
                            placeholder='Enter Mothers Name'
                        />
                    </div>


                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Nationality</span>
                        <input
                            {...register("nationality",)}
                            name='nationality'
                            className='input form-control '
                            id="nationality"
                            type="text"
                            placeholder='Enter nationality'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">National Id No.</span>
                        <input
                            {...register("nationalId",)}
                            name='nationalId'
                            className='input form-control '
                            id="nationalId"
                            type="text"
                            placeholder='Enter nationalId No'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Phone</span>
                        <input
                            {...register("phone", { required: true })}
                            name='phone'
                            className='input form-control '
                            id="phone"
                            type="text"
                            placeholder='Enter Phone No'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Date of Birth</span>
                        <input
                            {...register("birth_dete", { required: true })}
                            name='birth_dete'
                            className='input form-control '
                            id="birth_date"
                            type="date"
                        />
                    </div>



                    <div className="row my-4">

                        <div className='col-md-3 my-3 '>
                            <span className="label-text text-md fw-bold my-3 ">Gender</span>
                            <select
                                {...register("gender")}
                                name="gender"
                                className="form-select  ">
                                <option disabled selected>-Select Gender-</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className='col-md-3 my-3'>
                            <span className="label-text text-md fw-bold my-3 ">Religion</span>
                            <select
                                {...register("religion")}
                                name="religion"
                                className="form-select select-bordered  ">
                                <option disabled selected>-Select Religion-</option>
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

                        <div className='col-md-3 my-3'>
                            <span className="label-text text-md fw-bold my-3 ">Marital Status</span>
                            <select
                                {...register("maritial_status")}
                                name="marital_status"
                                id="marital_status"
                                className="form-select select-bordered  "
                            >
                                <option disabled selected>-Select Marital Status-</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Separated">Separated</option>
                                <option value="Divorced">Divorced</option>
                            </select>
                        </div>


                        <div className='col-md-3 my-3'>
                            <span className="label-text text-md fw-bold my-3 ">Photo</span>
                            <input
                                {...register("image",)}
                                name='image'
                                className='input form-control '
                                id="image"
                                type="file"
                            />
                        </div>
                    </div>
                </div>

                <div className=' my-3'>
                    <span className="label-text text-md fw-bold ">Career Objective</span>
                    <div className=' '>
                        <textarea {...register("career_objective", { required: true })}
                            name='career_objective'
                            className='input form-control '
                            id='career_objective' type="text"
                            placeholder='Enter Career Objective'
                        />
                    </div>
                </div>

                <div className=' my-3'>
                    <span className="label-text text-md fw-bold my-3 ">Obtained Skill</span>
                    <div>
                        <textarea {...register("skill", { required: true })}
                            name='skill'
                            className='input form-control '
                            id='skill' type="text"
                            placeholder='Enter Obtained Skill'
                        />
                    </div>
                </div>



                <div className=' my-3'>
                    <span className="label-text text-md fw-bold my-3 ">Experience</span>
                    <div>
                        <textarea {...register("experience",)}
                            name='experience'
                            className='input form-control '
                            id='experience' type="text"
                            placeholder='Enter Experience'
                        />
                    </div>
                </div>


                <div className=' my-3'>
                    <span className="label-text text-md fw-bold my-3 ">Achivement</span>
                    <div>
                        <textarea {...register("achivement",)}
                            name='achivement'
                            className='input form-control '
                            id='achivement' type="text"
                            placeholder='Enter achivement'
                        />
                    </div>
                </div>


                {/* Academic Qualification Section Start */}

                <h4 className="label-text text-md fw-bold mt-md-5 mb-md-4 text-center">Enter Academic Qualification</h4>
                {/* Exam Title	Concentration/Major	Institute	Result	Pas.Year	Duration */}


                {/* Enter Educational Qualification One */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Exam Title</span>
                        <input
                            {...register("examTitleOne", { required: true })}
                            name='examTitleOne'
                            className='input form-control '
                            id="examTitleOne"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Concentration/Major</span>
                        <input
                            {...register("majorOne", { required: true })}
                            name='majorOne'
                            className='input form-control '
                            id="majorOne"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute</span>
                        <input
                            {...register("instituteOne", { required: true })}
                            name='instituteOne'
                            className='input form-control '
                            id="instituteOne"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Result</span>
                        <input
                            {...register("resultOne", { required: true })}
                            name='resultOne'
                            className='input form-control '
                            id="resultOne"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Pass.Year</span>
                        <select
                            {...register("passYearOne", { required: true })}
                            id="passYearOne"
                            name="passYearOne"
                            className='input form-control '
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
                </div>

                {/* Enter Educational Qualification Two */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Exam Title</span>
                        <input
                            {...register("examTitleTwo", { required: true })}
                            name='examTitleTwo'
                            className='input form-control '
                            id="examTitleTwo"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Concentration/Major</span>
                        <input
                            {...register("majorTwo", { required: true })}
                            name='majorTwo'
                            className='input form-control '
                            id="majorTwo"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute</span>
                        <input
                            {...register("instituteTwo", { required: true })}
                            name='instituteTwo'
                            className='input form-control '
                            id="instituteTwo"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Result</span>
                        <input
                            {...register("resultTwo", { required: true })}
                            name='instituteTwo'
                            className='input form-control '
                            id="instituteTwo"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Pass.Year</span>
                        <select
                            {...register("passYearTwo", { required: true })}
                            id="passYearTwo"
                            name="passYearTwo"
                            className='input form-control '
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
                </div>

                {/* Enter Educational Qualification Three */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Exam Title</span>
                        <input
                            {...register("examTitleThree", { required: true })}
                            name='examTitleThree'
                            className='input form-control '
                            id="examTitleThree"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Concentration/Major</span>
                        <input
                            {...register("majorThree", { required: true })}
                            name='majorThree'
                            className='input form-control '
                            id="majorThree"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute</span>
                        <input
                            {...register("instituteThree", { required: true })}
                            name='instituteThree'
                            className='input form-control '
                            id="instituteThree"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Result</span>
                        <input
                            {...register("resultThree", { required: true })}
                            name='resultThree'
                            className='input form-control '
                            id="resultThree"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Pass.Year</span>
                        <select
                            {...register("passYearTwo", { required: true })}
                            id="passYearTwo"
                            name="passYearTwo"
                            className='input form-control '
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
                </div>

                {/* Enter Educational Qualification Four */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Exam Title</span>
                        <input
                            {...register("examTitleFour", { required: true })}
                            name='examTitleFour'
                            className='input form-control '
                            id="examTitleFour"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Concentration/Major</span>
                        <input
                            {...register("majorFour", { required: true })}
                            name='majorFour'
                            className='input form-control '
                            id="majorFour"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute</span>
                        <input
                            {...register("instituteFour", { required: true })}
                            name='instituteFour'
                            className='input form-control '
                            id="instituteFour"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Result</span>
                        <input
                            {...register("resultFour", { required: true })}
                            name='resultFour'
                            className='input form-control '
                            id="resultFour"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Pass.Year</span>
                        <select
                            {...register("passYearTwo", { required: true })}
                            id="passYearTwo"
                            name="passYearTwo"
                            className='input form-control '
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
                </div>


                {/* Academic Qualification Section End */}


                {/* Academic Qualification Section Start */}

                <h4 className="label-text text-md fw-bold mt-md-5 mb-md-4 text-center">Enter Training Summary</h4>
                {/* Training Title	Topic	Institute	Country	Location	Year	Duration */}

                {/* Enter Educational Qualification One */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Training Title</span>
                        <input
                            {...register("trainingTitleOne", { required: true })}
                            name='trainingTitleOne'
                            className='input form-control '
                            id="trainingTitleOne"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Topic</span>
                        <input
                            {...register("topicOne", { required: true })}
                            name='topicOne'
                            className='input form-control '
                            id="topicOne"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute and Location</span>
                        <input
                            {...register("insAndLocationOne", { required: true })}
                            name='insAndLocationOne'
                            className='input form-control '
                            id="insAndLocationOne"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Duration</span>
                        <input
                            {...register("durationTwo", { required: true })}
                            name='durationOne'
                            className='input form-control '
                            id="durationOne"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Year</span>
                        <select
                            {...register("traningYearOne", { required: true })}
                            id="traningYearOne"
                            name="traningYearOne"
                            className='input form-control '
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
                </div>

                {/* Enter Educational Qualification Two */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Training Title</span>
                        <input
                            {...register("trainingTitleTwo", { required: true })}
                            name='trainingTitleTwo'
                            className='input form-control '
                            id="trainingTitleTwo"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Topic</span>
                        <input
                            {...register("topicTwo", { required: true })}
                            name='topicTwo'
                            className='input form-control '
                            id="topicTwo"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute and Location</span>
                        <input
                            {...register("insAndLocationTwo", { required: true })}
                            name='insAndLocationTwo'
                            className='input form-control '
                            id="insAndLocationTwo"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Duration</span>
                        <input
                            {...register("durationTwo", { required: true })}
                            name='durationTwo'
                            className='input form-control '
                            id="durationTwo"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Year</span>
                        <select
                            {...register("traningYearTwo", { required: true })}
                            id="traningYearTwo"
                            name="traningYearTwo"
                            className='input form-control '
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
                </div>

                {/* Enter Educational Qualification Three */}
                <div className="row my-3">
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Training Title</span>
                        <input
                            {...register("trainingTitleThree", { required: true })}
                            name='trainingTitleThree'
                            className='input form-control '
                            id="trainingTitleThree"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Topic</span>
                        <input
                            {...register("topicThree", { required: true })}
                            name='topicThree'
                            className='input form-control '
                            id="topicThree"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Institute and Location</span>
                        <input
                            {...register("insAndLocationThree", { required: true })}
                            name='insAndLocationThree'
                            className='input form-control '
                            id="insAndLocationThree"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Duration</span>
                        <input
                            {...register("durationThree", { required: true })}
                            name='durationThree'
                            className='input form-control '
                            id="durationThree"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Year</span>
                        <select
                            {...register("traningYearThree", { required: true })}
                            id="traningYearThree"
                            name="traningYearThree"
                            className='input form-control '
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
                </div>



                <h4 className="label-text text-md fw-bold mt-md-5 mb-md-4 text-center">Enter Work Link</h4>
                <div className="row my-3">
                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Github Link</span>
                        <input
                            {...register("link_one",)}
                            name='link_one'
                            className='input form-control '
                            id="link_one"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Link Other</span>
                        <input
                            {...register("link_two",)}
                            name='link_two'
                            className='input form-control '
                            id="link_two"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>

                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Link Other</span>
                        <input
                            {...register("link_three",)}
                            name='link_three'
                            className='input form-control '
                            id="link_three"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Portfolio</span>
                        <input
                            {...register("portfolio")}
                            name='portfolio'
                            className='input form-control '
                            id="portfolio"
                            type="text"
                            placeholder='Enter Portfolio Link'
                        />
                    </div>
                </div>

                <span className="label-text text-md fw-bold my-3 ">Language</span>
                <input
                    {...register("language", { required: true })}
                    name='language'
                    className='input form-control '
                    id="language"
                    type="text"
                    placeholder='Enter skilld language'
                />





                <span className="label-text text-md fw-bold my-3 ">Present Address</span>
                <div>
                    <textarea {...register("present_address", { required: true })}
                        name='present_address'
                        className='input form-control '
                        id='present_address' type="text"
                        placeholder='Write Your Pressent Address'
                    />
                </div>

                <span className="label-text text-md fw-bold my-3 ">Permanent Address</span>
                <div>
                    <textarea {...register("permanent_address",)}
                        name='permanent_address'
                        className='input form-control '
                        id='permanent_address' type="text"
                        placeholder='Write Your Permanent Address'
                    />
                </div>


                <div className="row my-4">
                    <div className='col-md-6 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Refferece One Name</span>
                        <input
                            {...register("ref_one_name",)}
                            name='ref_one_name'
                            className='input form-control '
                            id="ref_one_name"
                            type="text"
                            placeholder='Enter Refferece One Name'
                        />
                    </div>

                    <div className='col-md-6 my-3'>

                        <span className="label-text text-md fw-bold my-3 ">Refferece One Details</span>
                        <div>
                            <textarea {...register("ref_one_details",)}
                                name='ref_one_details'
                                className='input form-control '
                                id='ref_one_details' type="text"
                                placeholder='Enter Refference One Details'
                            />
                        </div>
                    </div>

                    <div className='col-md-6 my-3'>
                        <span className="label-text text-md fw-bold my-3 ">Refferece Two Name</span>
                        <input
                            {...register("ref_two_name",)}
                            name='ref_two_name'
                            className='input form-control '
                            id="ref_two_name"
                            type="text"
                            placeholder='Enter Refferece Two Name'
                        />
                    </div>


                    <div className='col-md-6 my-3'>

                        <span className="label-text text-md fw-bold my-3 ">Refferece Two Details</span>
                        <div>
                            <textarea {...register("ref_two_details",)}
                                name='ref_two_details'
                                className='input form-control '
                                id='ref_two_details' type="text"
                                placeholder='Enter Refference Two Details'
                            />
                        </div>
                    </div>
                </div>


                <span className="label-text text-md fw-bold my-3 ">Other</span>
                <div>
                    <textarea {...register("other")}
                        name='other'
                        className='input form-control '
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
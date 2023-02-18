import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const JobSeekerProfileEntry = () => {

    const { user } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();



    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobCategories');
            const data = await res.json();
            return data;
        }
    })


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
            <h2 className=" text-center fw-bold my-4">Manage Profile</h2>

            <form onSubmit={handleSubmit(handleJobSeekerProfile)} >

                <h4 className="label-text text-md fw-bold  text-center">Personal Details</h4>

                <div className="row ">
                    <div className='col-md-6 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Father's Name</span>
                        <input
                            {...register("fathers_name", { required: true })}
                            name='fathers_name'
                            className='input form-control '
                            id="fathers_name"
                            type="text"
                            placeholder='Enter Fathers Name'
                        />
                    </div>

                    <div className='col-md-6 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Mother's Name</span>
                        <input
                            {...register("mothers_name", { required: true })}
                            name='mothers_name'
                            className='input form-control '
                            id="mothers_name"
                            type="text"
                            placeholder='Enter Mothers Name'
                        />
                    </div>


                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Nationality</span>
                        <input
                            {...register("nationality",)}
                            name='nationality'
                            className='input form-control '
                            id="nationality"
                            type="text"
                            placeholder='Enter nationality'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">National Id No.</span>
                        <input
                            {...register("nationalId",)}
                            name='nationalId'
                            className='input form-control '
                            id="nationalId"
                            type="text"
                            placeholder='Enter nationalId No'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Phone</span>
                        <input
                            {...register("phone", { required: true })}
                            name='phone'
                            className='input form-control '
                            id="phone"
                            type="text"
                            placeholder='Enter Phone No'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Date of Birth</span>
                        <input
                            {...register("birth_dete", { required: true })}
                            name='birth_dete'
                            className='input form-control '
                            id="birth_date"
                            type="date"
                        />
                    </div>



                    <div className="row">
                        <div className='col-md-3 mb-3  '>
                            <span className="label-text text-md fw-bold  ">Gender</span>
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

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Religion</span>
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

                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Marital Status</span>
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


                        <div className='col-md-3 mb-3 '>
                            <span className="label-text text-md fw-bold  ">Photo</span>
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

                <div className='row'>
                    <div className=' col-md-6 mb-3'>
                        <span className="label-text text-md fw-bold ">Present Address</span>
                        <div>
                            <textarea {...register("present_address", { required: true })}
                                name='present_address'
                                className='input form-control '
                                id='present_address' type="text"
                                placeholder='Write Your Pressent Address'
                            />
                        </div>
                    </div>
                    <div className=' col-md-6 mb-3'>
                        <span className="label-text text-md fw-bold  ">Permanent Address</span>
                        <div>
                            <textarea {...register("permanent_address",)}
                                name='permanent_address'
                                className='input form-control '
                                id='permanent_address' type="text"
                                placeholder='Write Your Permanent Address'
                            />
                        </div>
                    </div>
                </div>


                <div className='mb-3 '>
                    <span className="label-text text-md fw-bold text-center ">Career Objective</span>
                    <div className=' '>
                        <textarea {...register("career_objective", { required: true })}
                            name='career_objective'
                            className='input form-control '
                            id='career_objective' type="text"
                            placeholder='Enter Career Objective'
                        />
                    </div>
                </div>


                <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Experience</h4>
                <div className=' row'>
                    <div className=' col-md-6'>

                        <div className='mb-3 '>
                            <span className="label-text text-md fw-bold">Experience  One Title</span>
                            <div>
                                <input {...register("exprTitleOne",)}
                                    name='exprTitleOne'
                                    className='input form-control '
                                    id='exprTitleOne' type="text"
                                    placeholder='Enter data'
                                />
                            </div>
                        </div>

                        <div className='mb-3 '>
                            <span className="label-text text-md fw-bold mt-2">Experience One Details</span>
                            <div>
                                <textarea {...register("exprDetailsOne",)}
                                    name='exprDetailsOne'
                                    className='input form-control '
                                    id='exprDetailsOne' type="text"
                                    placeholder='Enter data'
                                />
                            </div>
                        </div>

                    </div>
                    <div className=' col-md-6'>
                        <div className='mb-3 '>
                            <span className="label-text text-md fw-bold">Experience Two Title</span>
                            <div>
                                <input {...register("exprTitleOne",)}
                                    name='exprTitleTwo'
                                    className='input form-control '
                                    id='exprTitleOne' type="text"
                                    placeholder='Enter data'
                                />
                            </div>
                        </div>

                        <div className='mb-3 '>
                            <span className="label-text text-md fw-bold mt-2">Experience Two Details</span>
                            <div>
                                <textarea {...register("exprDetailsOne",)}
                                    name='exprDetailsTwo'
                                    className='input form-control '
                                    id='exprDetailsOne' type="text"
                                    placeholder='Enter data'
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' mb-3'>
                    <span className="label-text text-md fw-bold  ">Achivement</span>
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

                <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Academic Qualification</h4>
                {/* Exam Title	Concentration/Major	Institute	Result	Pas.Year	Duration */}


                {/* Enter Educational Qualification One */}
                <h5 className="label-text text-md fw-bold ">Academic One</h5>
                <div className="row  ">
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleOne", { required: true })}
                            name='examTitleOne'
                            className='input form-control '
                            id="examTitleOne"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Concentration/Major</span>
                        <input
                            {...register("majorOne", { required: true })}
                            name='majorOne'
                            className='input form-control '
                            id="majorOne"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Institute</span>
                        <input
                            {...register("instituteOne", { required: true })}
                            name='instituteOne'
                            className='input form-control '
                            id="instituteOne"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Result</span>
                        <input
                            {...register("resultOne", { required: true })}
                            name='resultOne'
                            className='input form-control '
                            id="resultOne"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Pass.Year</span>
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
                <h5 className="label-text text-md fw-bold ">Academic Two</h5>
                <div className="row  ">
                    <div className='col-md-2   '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleTwo", { required: true })}
                            name='examTitleTwo'
                            className='input form-control '
                            id="examTitleTwo"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Concentration/Major</span>
                        <input
                            {...register("majorTwo", { required: true })}
                            name='majorTwo'
                            className='input form-control '
                            id="majorTwo"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Institute</span>
                        <input
                            {...register("instituteTwo", { required: true })}
                            name='instituteTwo'
                            className='input form-control '
                            id="instituteTwo"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Result</span>
                        <input
                            {...register("resultTwo", { required: true })}
                            name='instituteTwo'
                            className='input form-control '
                            id="instituteTwo"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Pass.Year</span>
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
                <h5 className="label-text text-md fw-bold ">Academic Three</h5>
                <div className="row  ">
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleThree", { required: true })}
                            name='examTitleThree'
                            className='input form-control '
                            id="examTitleThree"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Concentration/Major</span>
                        <input
                            {...register("majorThree", { required: true })}
                            name='majorThree'
                            className='input form-control '
                            id="majorThree"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Institute</span>
                        <input
                            {...register("instituteThree", { required: true })}
                            name='instituteThree'
                            className='input form-control '
                            id="instituteThree"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Result</span>
                        <input
                            {...register("resultThree", { required: true })}
                            name='resultThree'
                            className='input form-control '
                            id="resultThree"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Pass.Year</span>
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
                <h5 className="label-text text-md fw-bold ">Academic Four</h5>
                <div className="row  ">
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleFour", { required: true })}
                            name='examTitleFour'
                            className='input form-control '
                            id="examTitleFour"
                            type="text"
                            placeholder='Enter exam title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Concentration/Major</span>
                        <input
                            {...register("majorFour", { required: true })}
                            name='majorFour'
                            className='input form-control '
                            id="majorFour"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Institute</span>
                        <input
                            {...register("instituteFour", { required: true })}
                            name='instituteFour'
                            className='input form-control '
                            id="instituteFour"
                            type="text"
                            placeholder='Enter Institute'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Result</span>
                        <input
                            {...register("resultFour", { required: true })}
                            name='resultFour'
                            className='input form-control '
                            id="resultFour"
                            type="text"
                            placeholder='Enter result'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Pass.Year</span>
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



                {/* Enter Tranning Section*/}
                <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Training Summary</h4>

                {/* Enter Educational Qualification One */}
                <h5 className="label-text text-md fw-bold  ">Tranning One</h5>
                <div className="row  ">
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Training Title</span>
                        <input
                            {...register("trainingTitleOne", { required: true })}
                            name='trainingTitleOne'
                            className='input form-control '
                            id="trainingTitleOne"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Topic</span>
                        <input
                            {...register("topicOne", { required: true })}
                            name='topicOne'
                            className='input form-control '
                            id="topicOne"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Institute and Location</span>
                        <input
                            {...register("insAndLocationOne", { required: true })}
                            name='insAndLocationOne'
                            className='input form-control '
                            id="insAndLocationOne"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Duration</span>
                        <input
                            {...register("durationTwo", { required: true })}
                            name='durationOne'
                            className='input form-control '
                            id="durationOne"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Year</span>
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
                <h5 className="label-text text-md fw-bold mt-3  ">Tranning Two</h5>
                <div className="row  ">
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Training Title</span>
                        <input
                            {...register("trainingTitleTwo", { required: true })}
                            name='trainingTitleTwo'
                            className='input form-control '
                            id="trainingTitleTwo"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Topic</span>
                        <input
                            {...register("topicTwo", { required: true })}
                            name='topicTwo'
                            className='input form-control '
                            id="topicTwo"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Institute and Location</span>
                        <input
                            {...register("insAndLocationTwo", { required: true })}
                            name='insAndLocationTwo'
                            className='input form-control '
                            id="insAndLocationTwo"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Duration</span>
                        <input
                            {...register("durationTwo", { required: true })}
                            name='durationTwo'
                            className='input form-control '
                            id="durationTwo"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Year</span>
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
                <h5 className="label-text text-md fw-bold mt-3  ">Tranning Three</h5>
                <div className="row">
                    <div className='col-md-2'>
                        <span className="label-text text-md fw-bold  ">Training Title</span>
                        <input
                            {...register("trainingTitleThree", { required: true })}
                            name='trainingTitleThree'
                            className='input form-control '
                            id="trainingTitleThree"
                            type="text"
                            placeholder='Enter training title'
                        />
                    </div>

                    <div className='col-md-3 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Topic</span>
                        <input
                            {...register("topicThree", { required: true })}
                            name='topicThree'
                            className='input form-control '
                            id="topicThree"
                            type="text"
                            placeholder='Enter topic here'
                        />
                    </div>

                    <div className='col-md-3 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Institute and Location</span>
                        <input
                            {...register("insAndLocationThree", { required: true })}
                            name='insAndLocationThree'
                            className='input form-control '
                            id="insAndLocationThree"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className='col-md-2'>
                        <span className="label-text text-md fw-bold  ">Duration</span>
                        <input
                            {...register("durationThree", { required: true })}
                            name='durationThree'
                            className='input form-control '
                            id="durationThree"
                            type="text"
                            placeholder='Enter duration'
                        />
                    </div>

                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Year</span>
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



                <h4 className="label-text text-md fw-bold  text-center mt-5 mb-2">Work Link</h4>

                <div className="row ">
                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold   ">Github Link</span>
                        <input
                            {...register("link_one",)}
                            name='link_one'
                            className='input form-control '
                            id="link_one"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold   ">Link Other</span>
                        <input
                            {...register("link_two",)}
                            name='link_two'
                            className='input form-control '
                            id="link_two"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>

                    <div className='col-md-3 mb-3 '>
                        <span className="label-text text-md fw-bold   ">Link Other</span>
                        <input
                            {...register("link_three",)}
                            name='link_three'
                            className='input form-control '
                            id="link_three"
                            type="text"
                            placeholder='Enter Link Address'
                        />
                    </div>
                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold   ">Portfolio</span>
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

                <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Career and Application Information</h4>

                <div className="row  mb-3 ">
                    <div className='col-md-3 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Looking for (Job Level)</span>
                        <select
                            {...register("lookingFor")}
                            name="lookingFor"
                            id="lookingFor"
                            className="form-select"
                        >
                            <option disabled selected>-Select Job Level-</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="top">Top Level</option>
                        </select>
                    </div>
                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Available for (Job Nature)</span>
                        <input
                            {...register("availbaleFor",)}
                            name='availbaleFor'
                            className='input form-control '
                            id="availbaleFor"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>

                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold  ">Present Salary</span>
                        <input
                            {...register("presentSalary",)}
                            name='presentSalary'
                            className='input form-control '
                            id="presentSalary"
                            type="text"
                            placeholder='Enter present salary'
                        />
                    </div>

                    <div className='col-md-3 mb-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Expected Salary</span>
                        <input
                            {...register("expectedSalary")}
                            name='expectedSalary'
                            className='input form-control '
                            id="expectedSalary"
                            type="text"
                            placeholder='Enter expected salary'
                        />
                    </div>

                    <div className='col-md-6 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Preferred Job Category</span>
                        <select
                            {...register("category")}
                            name='category'
                            type="text"
                            className="form-select">
                            {
                                categories &&
                                categories.map((category, index) =>
                                    <option key={index}
                                        value={category._id}>
                                        {category.name}
                                    </option>)
                            }
                        </select>

                    </div>

                    <div className='col-md-6 mb-3 '>
                        <span className="label-text text-md fw-bold  ">Preferred Locations</span>
                        <input
                            {...register("p")}
                            name='preferredLocations'
                            className='input form-control '
                            id="preferredLocations"
                            type="text"
                            placeholder='Enter data here'
                        />
                    </div>
                    <div className=' '>
                        <span className="label-text text-md fw-bold  ">Preferred Organization Type</span>
                        <input
                            {...register("preferredOrg")}
                            name='preferredOrg'
                            className='input form-control '
                            id="preferredOrg"
                            type="text"
                            placeholder='Enter Preferred Organization'
                        />
                    </div>

                </div>


                <div className=' mb-3'>
                    <span className="label-text text-md fw-bold  ">Language</span>
                    <input
                        {...register("language", { required: true })}
                        name='language'
                        className='input form-control '
                        id="language"
                        type="text"
                        placeholder='Enter skilld language'
                    />
                </div>


                {/* Specialization Section start */}
                <h4 className="label-text text-md fw-bold text-center mt-5  ">Specialization</h4>
                <h5 className="label-text text-md fw-bold text-center   mb-2">Skill Section</h5>

                <div className='row'>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill One</span>
                        <input
                            {...register("skillOne",)}
                            name='skillOne'
                            className='input form-control '
                            id="skillOne"
                            type="text"
                            placeholder='Enter Skil'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Two</span>
                        <input
                            {...register("skillTwo",)}
                            name='skillTwo'
                            className='input form-control '
                            id="skillTwo"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Three</span>
                        <input
                            {...register("skillThree",)}
                            name='skillThree'
                            className='input form-control '
                            id="skillThree"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Four</span>
                        <input
                            {...register("skillFour",)}
                            name='skillFour'
                            className='input form-control '
                            id="skillFour"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Five</span>
                        <input
                            {...register("skillFive",)}
                            name='skillFive'
                            className='input form-control '
                            id="skillFive"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Six</span>
                        <input
                            {...register("skillSix",)}
                            name='skillSix'
                            className='input form-control '
                            id="skillSix"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Seven</span>
                        <input
                            {...register("skillSeven",)}
                            name='skillSeven'
                            className='input form-control '
                            id="skillSeven"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Eight</span>
                        <input
                            {...register("skillEight",)}
                            name='skillEight'
                            className='input form-control '
                            id="skillEight"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Nine</span>
                        <input
                            {...register("skillNine",)}
                            name='skillNine'
                            className='input form-control '
                            id="skillNine"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill Ten</span>
                        <input
                            {...register("skillTen",)}
                            name='skillTen'
                            className='input form-control '
                            id="skillTen"
                            type="text"
                            placeholder='Enter Skill'
                        />
                    </div>

                    <div className=' col-md-6 mb-3'>
                        <span className="label-text text-md fw-bold  ">Skill learned by</span>
                        <input
                            {...register("skillLearnedBy",)}
                            name='skillLearnedBy'
                            className='input form-control '
                            id="skillLearnedBy"
                            type="text"
                            placeholder='Enter Skill Learned By'
                        />
                    </div>

                    <div className=''>
                        <span className="label-text text-md fw-bold">Skill Description</span>
                        <textarea {...register("skillDesciption",)}
                            name='skillDesciption'
                            className='input form-control '
                            id='skillDesciption' type="text"
                            placeholder='Enter skill desciption'
                        />
                    </div>

                </div>

                {/* Specialization Section end */}


                {/* Language Section start */}
                <h4 className="label-text text-md fw-bold text-center mt-5  ">Language Proficiency</h4>

                {/* language one  */}
                <div className='row'>
                    <h5 className="label-text text-md fw-bold mb-2">Language One</h5>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Language</span>
                        <input
                            {...register("languOne", { required: true })}
                            name='languOne'
                            id='languOne'
                            className='input form-control'
                            type="text"
                            placeholder='Enter Language'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Reading</span>
                        <select
                            {...register("readingOne")}
                            name="readingOne"
                            id="readingOne"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Writing</span>
                        <select
                            {...register("writingOne")}
                            name="wriingOne"
                            id="wriingOne"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Speaking</span>
                        <select
                            {...register("readingOne")}
                            name="readingOne"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>



                {/* language two */}
                <div className='row'>
                    <h5 className="label-text text-md fw-bold mb-2">Language Two</h5>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Language</span>
                        <input
                            {...register("languTwo",)}
                            name='languTwo'
                            id='languTwo'
                            className='input form-control'
                            type="text"
                            placeholder='Enter Language'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Reading</span>
                        <select
                            {...register("readingTwo")}
                            name="readingTwo"
                            id="readingTwo"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Writing</span>
                        <select
                            {...register("writingTwo")}
                            name="writingTwo"
                            id="writingTwo"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Speaking</span>
                        <select
                            {...register("readingTwo")}
                            name="readingTwo"
                            id="readingTwo"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>



                {/* language three */}
                <div className='row'>
                    <h5 className="label-text text-md fw-bold mb-2">Language Three</h5>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Language</span>
                        <input
                            {...register("languThree",)}
                            name='languThree'
                            id='languThree'
                            className='input form-control'
                            type="text"
                            placeholder='Enter Language'
                        />
                    </div>
                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Reading</span>
                        <select
                            {...register("readingThree")}
                            name="readingThree"
                            id="readingThree"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Writing</span>
                        <select
                            {...register("writingThree")}
                            name="writingThree"
                            id="writingThree"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className=' col-md-3 mb-3'>
                        <span className="label-text text-md fw-bold  ">Speaking</span>
                        <select
                            {...register("readingThree")}
                            name="readingThree"
                            id="readingThree"
                            className="form-select select-bordered  ">
                            <option disabled selected>-Select-</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>


                {/* Language Section end */}


                {/* Refference area start */}

                <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Refference</h4>
                <div className="row my-4">
                    <div className=' col-md-6'>
                        <div className=' mb-3'>
                            <span className="label-text text-md fw-bold  mb-3">Refference One Name</span>
                            <input
                                {...register("ref_one_name",)}
                                name='ref_one_name'
                                className='input form-control '
                                id="ref_one_name"
                                type="text"
                                placeholder='Enter Refference One Name'
                            />
                        </div>

                        <div className=''>
                            <span className="label-text text-md fw-bold">Refference One Details</span>
                            <textarea {...register("ref_one_details",)}
                                name='ref_one_details'
                                className='input form-control '
                                id='ref_one_details' type="text"
                                placeholder='Enter Refference One Details'
                            />
                        </div>
                    </div>


                    <div className=' col-md-6 mb-3'>
                        <div className='  mb-3 '>
                            <span className="label-text text-md fw-bold  ">Refference Two Name</span>
                            <input
                                {...register("ref_two_name",)}
                                name='ref_two_name'
                                className='input form-control '
                                id="ref_two_name"
                                type="text"
                                placeholder='Enter Refference Two Name'
                            />
                        </div>


                        <div className='  '>
                            <span className="label-text text-md fw-bold  ">Refference Two Details</span>
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
                </div>
                {/* Refference area end */}


                <h4 className="label-text text-md fw-bold  text-center ">Other</h4>
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
            </form >
        </div >
    );
};

export default JobSeekerProfileEntry;
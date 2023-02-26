import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import '../../JobSeekers/JobSeekerProfile.css';

const EmployeesAcademicAndTrainingEntry = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleJobSeekerProfile = (data) => {

        const emplyeesAcademics = {
            email: user.email,
            name: user.displayName,

            examTitleOne: data.examTitleOne,
            majorOne: data.majorOne,
            instituteOne: data.instituteOne,
            resultOne: data.resultOne,
            passYearOne: data.passYearOne,


            examTitleTwo: data.examTitleTwo,
            majorTwo: data.majorTwo,
            instituteTwo: data.instituteTwo,
            resultTwo: data.resultTwo,
            passYearTwo: data.passYearTwo,


            examTitleThree: data.examTitleThree,
            majorThree: data.majorThree,
            instituteThree: data.instituteThree,
            resultThree: data.resultThree,
            passYearThree: data.passYearThree,


            examTitleFour: data.examTitleFour,
            majorFour: data.majorFour,
            instituteFour: data.instituteFour,
            resultFour: data.resultFour,
            passYearFour: data.passYearFour,


            trainingTitleOne: data.trainingTitleOne,
            topicOne: data.topicOne,
            insAndLocationOne: data.insAndLocationOne,
            durationOne: data.durationOne,
            traningYearOne: data.traningYearOne,


            trainingTitleTwo: data.trainingTitleTwo,
            topicTwo: data.topicTwo,
            insAndLocationTwo: data.insAndLocationTwo,
            durationTwo: data.durationTwo,
            traningYearTwo: data.traningYearTwo,


            trainingTitleThree: data.trainingTitleThree,
            topicThree: data.topicThree,
            insAndLocationThree: data.insAndLocationThree,
            durationThree: data.durationThree,
            traningYearThree: data.traningYearThree,


            gitHubLink: data.gitHubLink,
            link_two: data.link_two,
            link_three: data.link_three,
            portfolio: data.portfolio,
        }
        // console.log("Job Seeker Data :", data);

        fetch('http://localhost:5000/employeesAcademics', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(emplyeesAcademics)
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success(`${user.displayName} Academic and Training Data Saved Successfully`)
                    navigate("/dashboard/jobSeekerProfile");
                }
                else {
                    toast.error(data.message)
                }
            })
    }


    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Academic and Training Data</h2>

            {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
            <form onSubmit={handleSubmit(handleJobSeekerProfile)}>
                {/* Enter Educational Qualification One */}
                <div className=' d-flex justify-content-between'>
                    <h5 className="label-text text-md fw-bold ">Academic One</h5>
                    <p className=' float-end '> <span className="star">&#x2605; </span> <b>(Red Star) denotes must be filled</b></p>
                </div>
                <div className="row  ">
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Exam Title<span className="star">&#x2605;</span></span>
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
                        <span className="label-text text-md fw-bold  ">Concentration/Major<span className="star">&#x2605;</span></span>
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
                        <span className="label-text text-md fw-bold  ">Institute<span className="star">&#x2605;</span></span>
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
                        <span className="label-text text-md fw-bold  ">Result<span className="star">&#x2605;</span></span>
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
                        <span className="label-text text-md fw-bold  ">Pass.Year<span className="star">&#x2605;</span></span>
                        <select
                            {...register("passYearOne", { required: true })}
                            id="passYearOne"
                            name="passYearOne"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>


                {/* Enter Educational Qualification Two */}
                <h5 className="label-text text-md fw-bold ">Academic Two</h5>
                <div className="row  ">
                    <div className='col-md-2   '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleTwo", {})}
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
                            {...register("majorTwo", {})}
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
                            {...register("instituteTwo", {})}
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
                            {...register("resultTwo", {})}
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
                            {...register("passYearTwo", {})}
                            id="passYearTwo"
                            name="passYearTwo"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>

                {/* Enter Educational Qualification Three */}
                <h5 className="label-text text-md fw-bold ">Academic Three</h5>
                <div className="row  ">
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleThree", {})}
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
                            {...register("majorThree", {})}
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
                            {...register("instituteThree", {})}
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
                            {...register("resultThree", {})}
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
                            {...register("passYearThree",)}
                            id="passYearThree"
                            name="passYearThree"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>

                {/* Enter Educational Qualification Four */}
                <h5 className="label-text text-md fw-bold ">Academic Four</h5>
                <div className="row  ">
                    <div className='col-md-2 '>
                        <span className="label-text text-md fw-bold  ">Exam Title</span>
                        <input
                            {...register("examTitleFour", {})}
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
                            {...register("majorFour", {})}
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
                            {...register("instituteFour", {})}
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
                            {...register("resultFour", {})}
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
                            {...register("passYearFour", {})}
                            id="passYearFour"
                            name="passYearFour"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                            {...register("trainingTitleOne", {})}
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
                            {...register("topicOne", {})}
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
                            {...register("insAndLocationOne", {})}
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
                            {...register("durationOne", {})}
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
                            {...register("traningYearOne", {})}
                            id="traningYearOne"
                            name="traningYearOne"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>

                {/* Enter Educational Qualification Two */}
                <h5 className="label-text text-md fw-bold mt-3  ">Tranning Two</h5>
                <div className="row  ">
                    <div className='col-md-2  '>
                        <span className="label-text text-md fw-bold  ">Training Title</span>
                        <input
                            {...register("trainingTitleTwo",)}
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
                            {...register("topicTwo",)}
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
                            {...register("insAndLocationTwo",)}
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
                            {...register("durationTwo",)}
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
                            {...register("traningYearTwo",)}
                            id="traningYearTwo"
                            name="traningYearTwo"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>

                {/* Enter Educational Qualification Three */}
                <h5 className="label-text text-md fw-bold mt-3  ">Tranning Three</h5>
                <div className="row">
                    <div className='col-md-2'>
                        <span className="label-text text-md fw-bold  ">Training Title</span>
                        <input
                            {...register("trainingTitleThree",)}
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
                            {...register("topicThree",)}
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
                            {...register("insAndLocationThree",)}
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
                            {...register("durationThree",)}
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
                            {...register("traningYearThree",)}
                            id="traningYearThree"
                            name="traningYearThree"
                            className='input form-control '
                        >
                            <option>-Select Pass.Year-</option>
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
                        </select>
                    </div>
                </div>



                <h4 className="label-text text-md fw-bold  text-center mt-5 mb-2">Work Link</h4>

                <div className="row ">
                    <div className='col-md-3 mb-3  '>
                        <span className="label-text text-md fw-bold   ">Github Link</span>
                        <input
                            {...register("gitHubLink",)}
                            name='gitHubLink'
                            className='input form-control '
                            id="gitHubLink"
                            type="text"
                            placeholder='Enter your gitHub Link'
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
                        <span className="label-text text-md fw-bold">Link Other</span>
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
                        <span className="label-text text-md fw-bold">Portfolio</span>
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

                <div className=' d-flex justify-content-between my-lg-5'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form >
        </div >
    );
};

export default EmployeesAcademicAndTrainingEntry;
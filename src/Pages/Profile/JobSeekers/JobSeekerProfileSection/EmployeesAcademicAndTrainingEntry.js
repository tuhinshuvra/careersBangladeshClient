// import { useQuery } from '@tanstack/react-query';
// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Authentication/AuthProvider';
// import './JobSeekerProfile.css';

// const EmployeesAcademicAndTrainingEntry = () => {

//     const { user } = useContext(AuthContext)

  



//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate = useNavigate();

//     const imageHostKey = process.env.REACT_APP_CABD_imagebb_hostKey;

//     // console.log("imageBBHostKey  : ", imageHostKey)


 

//     const handleJobSeekerProfile = (data) => {
     

//                     const jobseekerProfile = {
//                         email: user.email,
//                         name: user.displayName,                       
                         
//                         examTitleOne: data.examTitleOne,
//                         majorOne: data.majorOne,
//                         instituteOne: data.instituteOne,
//                         resultOne: data.resultOne,
//                         passYearOne: data.passYearOne,


//                         examTitleTwo: data.examTitleTwo,
//                         majorTwo: data.majorTwo,
//                         instituteTwo: data.instituteTwo,
//                         resultTwo: data.resultTwo,
//                         passYearTwo: data.passYearTwo,


//                         examTitleThree: data.examTitleThree,
//                         majorThree: data.majorThree,
//                         instituteThree: data.instituteThree,
//                         resultThree: data.resultThree,
//                         passYearThree: data.passYearThree,


//                         examTitleFour: data.examTitleFour,
//                         majorFour: data.majorFour,
//                         instituteFour: data.instituteFour,
//                         resultFour: data.resultFour,
//                         passYearFour: data.passYearFour,


//                         trainingTitleOne: data.trainingTitleOne,
//                         topicOne: data.topicOne,
//                         insAndLocationOne: data.insAndLocationOne,
//                         durationOne: data.durationOne,
//                         traningYearOne: data.traningYearOne,


//                         trainingTitleTwo: data.trainingTitleTwo,
//                         topicTwo: data.topicTwo,
//                         insAndLocationTwo: data.insAndLocationTwo,
//                         durationTwo: data.durationTwo,
//                         traningYearTwo: data.traningYearTwo,


//                         trainingTitleThree: data.trainingTitleThree,
//                         topicThree: data.topicThree,
//                         insAndLocationThree: data.insAndLocationThree,
//                         durationThree: data.durationThree,
//                         traningYearThree: data.traningYearThree,


//                         gitHubLink: data.gitHubLink,
//                         link_two: data.link_two,
//                         link_three: data.link_three,
//                         portfolio: data.portfolio,


//                         lookingFor: data.lookingFor,
//                         availbaleFor: data.availbaleFor,
//                         presentSalary: data.presentSalary,
//                         expectedSalary: data.expectedSalary,
//                         category: data.category,
//                         preferredLocations: data.preferredLocations,
//                         preferredOrg: data.preferredOrg,

//                         skillOne: data.skillOne,
//                         skillTwo: data.skillTwo,
//                         skillThree: data.skillThree,
//                         skillFour: data.skillFour,
//                         skillFive: data.skillFive,
//                         skillSix: data.skillSix,
//                         skillSeven: data.skillSeven,
//                         skillEight: data.skillEight,
//                         skillNine: data.skillNine,
//                         skillTen: data.skillTen,
//                         skillLearnedBy: data.skillLearnedBy,
//                         skillDesciption: data.skillDesciption,


//                         languOne: data.languOne,
//                         writingOne: data.writingOne,
//                         readingOne: data.readingOne,

//                         languTwo: data.languTwo,
//                         writingTwo: data.writingTwo,
//                         readingTwo: data.readingTwo,


//                         languThree: data.languThree,
//                         readingThree: data.readingThree,
//                         writingThree: data.writingThree,

//                         refOneName: data.ref_one_name,
//                         refOneDetails: data.ref_one_details,
//                         refTwoName: data.ref_two_name,
//                         refTwoDetails: data.ref_two_details,

//                         other: data.other,

//                     }
//                     // console.log("Job Seeker Data :", data);

//                     fetch('http://localhost:5000/jobseekerProfile', {
//                         method: 'POST',
//                         headers: {
//                             "content-type": "application/json"
//                         },
//                         body: JSON.stringify(jobseekerProfile)
//                     })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log(data)
//                             toast.promise(`${user.displayName}Profile Data Saved Successfully`)
//                             navigate("/dashboard/jobSeekerProfile");
//                         })
//                 }
            
//     }

//     return (
//         <div>
//             <h2 className=" text-center fw-bold my-4">Manage Profile</h2>
//             <div className=' d-flex justify-content-between'>

//                 <button
//                     onClick={() => setPersonalDetails(!personalDetails)}
//                     className="btn btn-primary mb-1">
//                     Personal Details
//                 </button>
//                 <button
//                     onClick={() => setExperience(!experience)}
//                     className="btn btn-primary mb-1 mx-1">
//                     Experience
//                 </button>

//                 <button
//                     onClick={() => setAcademic(!academic)}
//                     className="btn btn-primary mb-1 mx-1">
//                     Academic Qualification
//                 </button>

//                 <button
//                     onClick={() => setCareer(!career)}
//                     className="btn btn-primary mb-1 mx-1">
//                     Career and Application
//                 </button>

//                 <button
//                     onClick={() => setLanguage(!language)}
//                     className="btn btn-primary mb-1 mx-1">
//                     Language and Reference
//                 </button>
//             </div>


//             {/* <p className=' float-end '> <span className="star">&#x2605; </span> <b> denodes must be filled</b></p> */}
//             <form onSubmit={handleSubmit(handleJobSeekerProfile)} >
//                 {
//                     personalDetails && (
//                         <div>
//                             {/* <h2>Personal Details</h2> */}


//                             <h4 className="label-text text-md fw-bold  text-center">Personal Details</h4>


//                             <div className="row ">
//                                 <div className='col-md-6 mb-3 mb-3'>
//                                     <span className="label-text text-md fw-bold">Father's Name <span className="star">&#x2605;</span></span>
//                                     <input
//                                         {...register("fathers_name", { required: true })}
//                                         name='fathers_name'
//                                         className='input form-control '
//                                         id="fathers_name"
//                                         type="text"
//                                         placeholder='Enter Fathers Name'
//                                     />
//                                 </div>

//                                 <div className='col-md-6 mb-3 mb-3'>
//                                     <span className="label-text text-md fw-bold  ">Mother's Name<span className="star">&#x2605;</span></span>
//                                     <input
//                                         {...register("mothers_name", { required: true })}
//                                         name='mothers_name'
//                                         className='input form-control '
//                                         id="mothers_name"
//                                         type="text"
//                                         placeholder='Enter Mothers Name'
//                                     />
//                                 </div>


//                                 <div className='col-md-3 mb-3 '>
//                                     <span className="label-text text-md fw-bold  ">Nationality<span className="star">&#x2605;</span></span>
//                                     <input
//                                         {...register("nationality",)}
//                                         name='nationality'
//                                         className='input form-control '
//                                         id="nationality"
//                                         type="text"
//                                         placeholder='Enter nationality'
//                                     />
//                                 </div>

//                                 <div className='col-md-3 mb-3 '>
//                                     <span className="label-text text-md fw-bold  ">National Id No.</span>
//                                     <input
//                                         {...register("nationalId",)}
//                                         name='nationalId'
//                                         className='input form-control '
//                                         id="nationalId"
//                                         type="text"
//                                         placeholder='Enter nationalId No'
//                                     />
//                                 </div>

//                                 <div className='col-md-3 mb-3 '>
//                                     <span className="label-text text-md fw-bold  ">Phone<span className="star">&#x2605;</span></span>
//                                     <input
//                                         {...register("phone", { required: true })}
//                                         name='phone'
//                                         className='input form-control '
//                                         id="phone"
//                                         type="text"
//                                         placeholder='Enter Phone No'
//                                     />
//                                 </div>

//                                 <div className='col-md-3 mb-3 '>
//                                     <span className="label-text text-md fw-bold  ">Date of Birth<span className="star">&#x2605;</span></span>
//                                     <input
//                                         {...register("birth_dete", { required: true })}
//                                         name='birth_dete'
//                                         className='input form-control '
//                                         id="birth_date"
//                                         type="date"
//                                     />
//                                 </div>

//                                 <div className="row">
//                                     <div className='col-md-3 mb-3  '>
//                                         <span className="label-text text-md fw-bold  ">Gender<span className="star">&#x2605;</span></span>
//                                         <select
//                                             {...register("gender")}
//                                             name="gender"
//                                             className="form-select  ">
//                                             <option>-Select Gender-</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                             <option value="others">Others</option>
//                                         </select>
//                                     </div>

//                                     <div className='col-md-3 mb-3 '>
//                                         <span className="label-text text-md fw-bold  ">Religion</span>
//                                         <select
//                                             {...register("religion")}
//                                             name="religion"
//                                             className="form-select select-bordered  ">
//                                             <option>-Select Religion-</option>
//                                             <option value="Islam">Islam</option>
//                                             <option value="Buddhism">Buddhism</option>
//                                             <option value="Hinduism">Hinduism</option>
//                                             <option value="Christianity">Christianity</option>
//                                             <option value="Judaism">Judaism</option>
//                                             <option value="Irreligion">Irreligion</option>
//                                             <option value="Folk religions">Folk religions</option>
//                                             <option value="Others">Others</option>
//                                         </select>
//                                     </div>

//                                     <div className='col-md-3 mb-3 '>
//                                         <span className={`label-text text-md fw-bold`}>Marital Status</span>
//                                         <select
//                                             {...register("maritial_status")}
//                                             name="marital_status"
//                                             id="marital_status"
//                                             className="form-select select-bordered">

//                                             <option>-Select Marital Status-</option>
//                                             <option value="Single">Single</option>
//                                             <option value="Married">Married</option>
//                                             <option value="Widowed">Widowed</option>
//                                             <option value="Separated">Separated</option>
//                                             <option value="Divorced">Divorced</option>
//                                         </select>
//                                     </div>


//                                     <div className='col-md-3 mb-3 '>
//                                         <span className="label-text text-md fw-bold  ">Photo<span className="star">&#x2605;</span></span>
//                                         <input
//                                             {...register("image", { required: true })}
//                                             name='image'
//                                             className='input form-control '
//                                             id="image"
//                                             type="file"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='row'>
//                                 <div className=' col-md-6 mb-3'>
//                                     <span className="label-text text-md fw-bold ">Present Address<span className="star">&#x2605;</span></span>
//                                     <div>
//                                         <textarea {...register("present_address", { required: true })}
//                                             name='present_address'
//                                             className='input form-control '
//                                             id='present_address' type="text"
//                                             placeholder='Write Your Pressent Address'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className=' col-md-6 mb-3'>
//                                     <span className="label-text text-md fw-bold  ">Permanent Address</span>
//                                     <div>
//                                         <textarea {...register("permanent_address",)}
//                                             name='permanent_address'
//                                             className='input form-control '
//                                             id='permanent_address' type="text"
//                                             placeholder='Write Your Permanent Address'
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='mb-3 '>
//                                 <span className="label-text text-md fw-bold text-center ">Career Objective<span className="star">&#x2605;</span></span>
//                                 <div className=' '>
//                                     <textarea {...register("career_objective", { required: true })}
//                                         name='career_objective'
//                                         className='input form-control '
//                                         id='career_objective' type="text"
//                                         placeholder='Enter Career Objective'
//                                     />
//                                 </div>
//                             </div>

//                         </div>
//                     )
//                 }





//                 {/* experience section start */}

//                 {

//                     experience && <div>


//                         <h4 className="label-text text-md fw-bold text-center mt-5">Experience</h4>

//                         <h5 className="label-text text-md fw-bold  mb-2">Experience One</h5>
//                         <div className=' row'>
//                             <div className=' col-md-6 mb-3'>
//                                 <span className="label-text text-md fw-bold">Company Name</span>
//                                 <div>
//                                     <input {...register("expOneCompanayName",)}
//                                         name='expOneCompanayName'
//                                         className='input form-control '
//                                         id='expOneCompanayName' type="text"
//                                         placeholder='Enter data'
//                                     />
//                                 </div>
//                             </div>


//                             <div className=' col-md-6 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Company Business</span>
//                                 <div>
//                                     <input {...register("expOneCompanayBusiness",)}
//                                         name='expOneCompanayBusiness'
//                                         className='input form-control '
//                                         id='expOneCompanayBusiness' type="text"
//                                         placeholder='Enter data'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Designation</span>
//                                 <div>
//                                     <input {...register("expOneDesignation",)}
//                                         name='expOneDesignation'
//                                         className='input form-control '
//                                         id='expOneDesignation' type="text"
//                                         placeholder='Enter data'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Departemnt</span>
//                                 <div>
//                                     <input {...register("expOneDepartment",)}
//                                         name='expOneDepartment'
//                                         className='input form-control '
//                                         id='expOneDepartment' type="text"
//                                         placeholder='Enter data'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Employment Period</span>
//                                 <div className=' d-flex '>
//                                     <div className='col-md-5'>
//                                         <input {...register("expOneFrom",)}
//                                             name='expOneFrom'
//                                             className='input form-control '
//                                             id='expOneFrom'
//                                             type="date"
//                                         />
//                                     </div>

//                                     <b className=' mx-2'>To</b>

//                                     <div className='col-md-5'>
//                                         <input {...register("expOneTo",)}
//                                             name='expOneTo'
//                                             className='input form-control '
//                                             id='expOneTo'
//                                             type="date"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="form-check">
//                                     <input
//                                         {...register("exOnecurrtlyWorkHere",)}
//                                         className="form-check-input"
//                                         type="checkbox" value="currentlyWorkHere"
//                                         id="exprOneWorkPeriod"
//                                     />
//                                     <label className="form-check-label" htmlFor="exprOneWorkPeriod">
//                                         Currently working here
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className='  mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Responsibilities</span>
//                                 <div>
//                                     <textarea {...register("exprOneResp",)}
//                                         name='exprOneResp'
//                                         className='input form-control '
//                                         id='exprOneResp' type="text"
//                                         placeholder='Enter Responsibilities'
//                                     />
//                                 </div>
//                             </div>

//                             <div className='  mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Expertise Area</span>
//                                 <div>
//                                     <textarea {...register("exprOneExpertise",)}
//                                         name='exprOneExpertise'
//                                         className='input form-control '
//                                         id='exprOneExpertise' type="text"
//                                         placeholder='Enter Expertise'
//                                     />
//                                 </div>
//                             </div>

//                             <div className='   mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Company Address</span>
//                                 <div>
//                                     <textarea {...register("exprCompOneAddress",)}
//                                         name='exprCompOneAddress'
//                                         className='input form-control '
//                                         id='exprCompOneAddress' type="text"
//                                         placeholder='Enter Company Address'
//                                     />
//                                 </div>
//                             </div>
//                         </div >


//                         <h5 className="label-text text-md fw-bold  mt-3 mb-2">Experience Two</h5>
//                         <div className=' row'>
//                             <div className=' col-md-6 mb-3'>
//                                 <span className="label-text text-md fw-bold">Company Name</span>
//                                 <div>
//                                     <input {...register("expTwoCompanayName",)}
//                                         name='expTwoCompanayName'
//                                         className='input form-control '
//                                         id='expTwoCompanayName' type="text"
//                                         placeholder='Enter Company Name'
//                                     />
//                                 </div>
//                             </div>


//                             <div className=' col-md-6 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Company Business</span>
//                                 <div>
//                                     <input {...register("expTwoCompanayBusiness",)}
//                                         name='expTwoCompanayBusiness'
//                                         className='input form-control '
//                                         id='expTwoCompanayBusiness' type="text"
//                                         placeholder='Enter Company Business'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Designation</span>
//                                 <div>
//                                     <input {...register("expTwoDesignation",)}
//                                         name='expTwoDesignation'
//                                         className='input form-control '
//                                         id='expTwoDesignation' type="text"
//                                         placeholder='Enter Designation'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Departemnt</span>
//                                 <div>
//                                     <input {...register("expTwoDepartment",)}
//                                         name='expTwoDepartment'
//                                         className='input form-control '
//                                         id='expTwoDepartment' type="text"
//                                         placeholder='Enter data'
//                                     />
//                                 </div>
//                             </div>

//                             <div className=' col-md-4 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Employment Period</span>
//                                 <div className=' d-flex '>
//                                     <div className='col-md-5'>
//                                         <input {...register("expTwoFrom",)}
//                                             name='expTwoFrom'
//                                             className='input form-control '
//                                             id='expTwoFrom'
//                                             type="date"
//                                         />
//                                     </div>

//                                     <b className=' mx-2'>To</b>

//                                     <div className='col-md-5'>
//                                         <input {...register("expTwoeTo",)}
//                                             name='expTwoeTo'
//                                             className='input form-control '
//                                             id='expTwoeTo'
//                                             type="date"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="form-check">
//                                     <input
//                                         {...register("exprTwoWorkPeriod",)}
//                                         className="form-check-input"
//                                         type="checkbox" value="exprTwoWorkPeriod"
//                                         id="exprTwoWorkPeriod"
//                                     />
//                                     <label className="form-check-label" htmlFor="exprTwoWorkPeriod">
//                                         Currently working here
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className='  mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Responsibilities</span>
//                                 <div>
//                                     <textarea {...register("exprTwoResp",)}
//                                         name='exprTwoResp'
//                                         className='input form-control '
//                                         id='exprTwoResp' type="text"
//                                         placeholder='Enter Responsibilities'
//                                     />
//                                 </div>
//                             </div>

//                             <div className='  mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Expertise Area</span>
//                                 <div>
//                                     <textarea {...register("exprTwoExpertise",)}
//                                         name='exprTwoExpertise'
//                                         className='input form-control '
//                                         id='exprTwoExpertise' type="text"
//                                         placeholder='Enter Expertise'
//                                     />
//                                 </div>
//                             </div>

//                             <div className='   mb-3 '>
//                                 <span className="label-text text-md fw-bold mt-2">Company Address</span>
//                                 <div>
//                                     <textarea {...register("exprCompTwoAddress",)}
//                                         name='exprCompTwoAddress'
//                                         className='input form-control '
//                                         id='exprCompTwoAddress' type="text"
//                                         placeholder='Enter Company Address'
//                                     />
//                                 </div>
//                             </div>
//                         </div >
//                     </div>
//                 }



//                 {/* Academic Qualification Section Start */}

//                 {
//                     academic && <div>

//                         < h4 className="label-text text-md fw-bold text-center mt-5 mb-2" > Academic Qualification</ h4>
//                         {/* Exam Title	Concentration/Major	Institute	Result	Pas.Year	Duration */}


//                         {/* Enter Educational Qualification One */}
//                         <h5 className="label-text text-md fw-bold ">Academic One</h5>
//                         <div className="row  ">
//                             <div className='col-md-2  '>
//                                 <span className="label-text text-md fw-bold  ">Exam Title</span>
//                                 <input
//                                     {...register("examTitleOne", { required: true })}
//                                     name='examTitleOne'
//                                     className='input form-control '
//                                     id="examTitleOne"
//                                     type="text"
//                                     placeholder='Enter exam title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Concentration/Major<span className="star">&#x2605;</span></span>
//                                 <input
//                                     {...register("majorOne", { required: true })}
//                                     name='majorOne'
//                                     className='input form-control '
//                                     id="majorOne"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Institute<span className="star">&#x2605;</span></span>
//                                 <input
//                                     {...register("instituteOne", { required: true })}
//                                     name='instituteOne'
//                                     className='input form-control '
//                                     id="instituteOne"
//                                     type="text"
//                                     placeholder='Enter Institute'
//                                 />
//                             </div>
//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Result<span className="star">&#x2605;</span></span>
//                                 <input
//                                     {...register("resultOne", { required: true })}
//                                     name='resultOne'
//                                     className='input form-control '
//                                     id="resultOne"
//                                     type="text"
//                                     placeholder='Enter result'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Pass.Year<span className="star">&#x2605;</span></span>
//                                 <select
//                                     {...register("passYearOne", { required: true })}
//                                     id="passYearOne"
//                                     name="passYearOne"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>


//                         {/* Enter Educational Qualification Two */}
//                         <h5 className="label-text text-md fw-bold ">Academic Two</h5>
//                         <div className="row  ">
//                             <div className='col-md-2   '>
//                                 <span className="label-text text-md fw-bold  ">Exam Title</span>
//                                 <input
//                                     {...register("examTitleTwo", {})}
//                                     name='examTitleTwo'
//                                     className='input form-control '
//                                     id="examTitleTwo"
//                                     type="text"
//                                     placeholder='Enter exam title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Concentration/Major</span>
//                                 <input
//                                     {...register("majorTwo", {})}
//                                     name='majorTwo'
//                                     className='input form-control '
//                                     id="majorTwo"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Institute</span>
//                                 <input
//                                     {...register("instituteTwo", {})}
//                                     name='instituteTwo'
//                                     className='input form-control '
//                                     id="instituteTwo"
//                                     type="text"
//                                     placeholder='Enter Institute'
//                                 />
//                             </div>
//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Result</span>
//                                 <input
//                                     {...register("resultTwo", {})}
//                                     name='instituteTwo'
//                                     className='input form-control '
//                                     id="instituteTwo"
//                                     type="text"
//                                     placeholder='Enter result'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Pass.Year</span>
//                                 <select
//                                     {...register("passYearTwo", {})}
//                                     id="passYearTwo"
//                                     name="passYearTwo"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Enter Educational Qualification Three */}
//                         <h5 className="label-text text-md fw-bold ">Academic Three</h5>
//                         <div className="row  ">
//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Exam Title</span>
//                                 <input
//                                     {...register("examTitleThree", {})}
//                                     name='examTitleThree'
//                                     className='input form-control '
//                                     id="examTitleThree"
//                                     type="text"
//                                     placeholder='Enter exam title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Concentration/Major</span>
//                                 <input
//                                     {...register("majorThree", {})}
//                                     name='majorThree'
//                                     className='input form-control '
//                                     id="majorThree"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Institute</span>
//                                 <input
//                                     {...register("instituteThree", {})}
//                                     name='instituteThree'
//                                     className='input form-control '
//                                     id="instituteThree"
//                                     type="text"
//                                     placeholder='Enter Institute'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Result</span>
//                                 <input
//                                     {...register("resultThree", {})}
//                                     name='resultThree'
//                                     className='input form-control '
//                                     id="resultThree"
//                                     type="text"
//                                     placeholder='Enter result'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Pass.Year</span>
//                                 <select
//                                     {...register("passYearThree",)}
//                                     id="passYearThree"
//                                     name="passYearThree"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Enter Educational Qualification Four */}
//                         <h5 className="label-text text-md fw-bold ">Academic Four</h5>
//                         <div className="row  ">
//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Exam Title</span>
//                                 <input
//                                     {...register("examTitleFour", {})}
//                                     name='examTitleFour'
//                                     className='input form-control '
//                                     id="examTitleFour"
//                                     type="text"
//                                     placeholder='Enter exam title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Concentration/Major</span>
//                                 <input
//                                     {...register("majorFour", {})}
//                                     name='majorFour'
//                                     className='input form-control '
//                                     id="majorFour"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Institute</span>
//                                 <input
//                                     {...register("instituteFour", {})}
//                                     name='instituteFour'
//                                     className='input form-control '
//                                     id="instituteFour"
//                                     type="text"
//                                     placeholder='Enter Institute'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Result</span>
//                                 <input
//                                     {...register("resultFour", {})}
//                                     name='resultFour'
//                                     className='input form-control '
//                                     id="resultFour"
//                                     type="text"
//                                     placeholder='Enter result'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Pass.Year</span>
//                                 <select
//                                     {...register("passYearFour", {})}
//                                     id="passYearFour"
//                                     name="passYearFour"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>


//                         {/* Academic Qualification Section End */}


//                         {/* Academic Qualification Section Start */}



//                         {/* Enter Tranning Section*/}
//                         <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Training Summary</h4>

//                         {/* Enter Educational Qualification One */}
//                         <h5 className="label-text text-md fw-bold  ">Tranning One</h5>
//                         <div className="row  ">
//                             <div className='col-md-2  '>
//                                 <span className="label-text text-md fw-bold  ">Training Title</span>
//                                 <input
//                                     {...register("trainingTitleOne", {})}
//                                     name='trainingTitleOne'
//                                     className='input form-control '
//                                     id="trainingTitleOne"
//                                     type="text"
//                                     placeholder='Enter training title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Topic</span>
//                                 <input
//                                     {...register("topicOne", {})}
//                                     name='topicOne'
//                                     className='input form-control '
//                                     id="topicOne"
//                                     type="text"
//                                     placeholder='Enter topic here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Institute and Location</span>
//                                 <input
//                                     {...register("insAndLocationOne", {})}
//                                     name='insAndLocationOne'
//                                     className='input form-control '
//                                     id="insAndLocationOne"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>
//                             <div className='col-md-2  '>
//                                 <span className="label-text text-md fw-bold  ">Duration</span>
//                                 <input
//                                     {...register("durationOne", {})}
//                                     name='durationOne'
//                                     className='input form-control '
//                                     id="durationOne"
//                                     type="text"
//                                     placeholder='Enter duration'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Year</span>
//                                 <select
//                                     {...register("traningYearOne", {})}
//                                     id="traningYearOne"
//                                     name="traningYearOne"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Enter Educational Qualification Two */}
//                         <h5 className="label-text text-md fw-bold mt-3  ">Tranning Two</h5>
//                         <div className="row  ">
//                             <div className='col-md-2  '>
//                                 <span className="label-text text-md fw-bold  ">Training Title</span>
//                                 <input
//                                     {...register("trainingTitleTwo",)}
//                                     name='trainingTitleTwo'
//                                     className='input form-control '
//                                     id="trainingTitleTwo"
//                                     type="text"
//                                     placeholder='Enter training title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Topic</span>
//                                 <input
//                                     {...register("topicTwo",)}
//                                     name='topicTwo'
//                                     className='input form-control '
//                                     id="topicTwo"
//                                     type="text"
//                                     placeholder='Enter topic here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Institute and Location</span>
//                                 <input
//                                     {...register("insAndLocationTwo",)}
//                                     name='insAndLocationTwo'
//                                     className='input form-control '
//                                     id="insAndLocationTwo"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>
//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Duration</span>
//                                 <input
//                                     {...register("durationTwo",)}
//                                     name='durationTwo'
//                                     className='input form-control '
//                                     id="durationTwo"
//                                     type="text"
//                                     placeholder='Enter duration'
//                                 />
//                             </div>

//                             <div className='col-md-2  '>
//                                 <span className="label-text text-md fw-bold  ">Year</span>
//                                 <select
//                                     {...register("traningYearTwo",)}
//                                     id="traningYearTwo"
//                                     name="traningYearTwo"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Enter Educational Qualification Three */}
//                         <h5 className="label-text text-md fw-bold mt-3  ">Tranning Three</h5>
//                         <div className="row">
//                             <div className='col-md-2'>
//                                 <span className="label-text text-md fw-bold  ">Training Title</span>
//                                 <input
//                                     {...register("trainingTitleThree",)}
//                                     name='trainingTitleThree'
//                                     className='input form-control '
//                                     id="trainingTitleThree"
//                                     type="text"
//                                     placeholder='Enter training title'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Topic</span>
//                                 <input
//                                     {...register("topicThree",)}
//                                     name='topicThree'
//                                     className='input form-control '
//                                     id="topicThree"
//                                     type="text"
//                                     placeholder='Enter topic here'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Institute and Location</span>
//                                 <input
//                                     {...register("insAndLocationThree",)}
//                                     name='insAndLocationThree'
//                                     className='input form-control '
//                                     id="insAndLocationThree"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>
//                             <div className='col-md-2'>
//                                 <span className="label-text text-md fw-bold  ">Duration</span>
//                                 <input
//                                     {...register("durationThree",)}
//                                     name='durationThree'
//                                     className='input form-control '
//                                     id="durationThree"
//                                     type="text"
//                                     placeholder='Enter duration'
//                                 />
//                             </div>

//                             <div className='col-md-2 '>
//                                 <span className="label-text text-md fw-bold  ">Year</span>
//                                 <select
//                                     {...register("traningYearThree",)}
//                                     id="traningYearThree"
//                                     name="traningYearThree"
//                                     className='input form-control '
//                                 >
//                                     <option>-Select Pass.Year-</option>
//                                     <option value="2023">2023</option>
//                                     <option value="2022">2022</option>
//                                     <option value="2021">2021</option>
//                                     <option value="2020">2020</option>
//                                     <option value="2019">2019</option>
//                                     <option value="2018">2018</option>
//                                     <option value="2017">2017</option>
//                                     <option value="2016">2016</option>
//                                     <option value="2015">2015</option>
//                                     <option value="2014">2014</option>
//                                     <option value="2013">2013</option>
//                                     <option value="2012">2012</option>
//                                     <option value="2011">2011</option>
//                                     <option value="2010">2010</option>
//                                     <option value="2009">2009</option>
//                                     <option value="2008">2008</option>
//                                     <option value="2007">2007</option>
//                                     <option value="2006">2006</option>
//                                     <option value="2005">2005</option>
//                                     <option value="2004">2004</option>
//                                     <option value="2003">2003</option>
//                                     <option value="2002">2002</option>
//                                     <option value="2001">2001</option>
//                                     <option value="2000">2000</option>
//                                     <option value="1999">1999</option>
//                                     <option value="1998">1998</option>
//                                     <option value="1997">1997</option>
//                                     <option value="1996">1996</option>
//                                     <option value="1995">1995</option>
//                                     <option value="1994">1994</option>
//                                     <option value="1993">1993</option>
//                                     <option value="1992">1992</option>
//                                     <option value="1991">1991</option>
//                                     <option value="1990">1990</option>
//                                     <option value="1989">1989</option>
//                                     <option value="1988">1988</option>
//                                     <option value="1987">1987</option>
//                                     <option value="1986">1986</option>
//                                     <option value="1985">1985</option>
//                                     <option value="1984">1984</option>
//                                     <option value="1983">1983</option>
//                                     <option value="1982">1982</option>
//                                     <option value="1981">1981</option>
//                                     <option value="1980">1980</option>
//                                     <option value="1979">1979</option>
//                                     <option value="1978">1978</option>
//                                     <option value="1977">1977</option>
//                                     <option value="1976">1976</option>
//                                     <option value="1975">1975</option>
//                                     <option value="1974">1974</option>
//                                     <option value="1973">1973</option>
//                                     <option value="1972">1972</option>
//                                     <option value="1971">1971</option>
//                                 </select>
//                             </div>
//                         </div>



//                         <h4 className="label-text text-md fw-bold  text-center mt-5 mb-2">Work Link</h4>

//                         <div className="row ">
//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold   ">Github Link</span>
//                                 <input
//                                     {...register("gitHubLink",)}
//                                     name='gitHubLink'
//                                     className='input form-control '
//                                     id="gitHubLink"
//                                     type="text"
//                                     placeholder='Enter your gitHub Link'
//                                 />
//                             </div>
//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold   ">Link Other</span>
//                                 <input
//                                     {...register("link_two",)}
//                                     name='link_two'
//                                     className='input form-control '
//                                     id="link_two"
//                                     type="text"
//                                     placeholder='Enter Link Address'
//                                 />
//                             </div>

//                             <div className='col-md-3 mb-3 '>
//                                 <span className="label-text text-md fw-bold">Link Other</span>
//                                 <input
//                                     {...register("link_three",)}
//                                     name='link_three'
//                                     className='input form-control '
//                                     id="link_three"
//                                     type="text"
//                                     placeholder='Enter Link Address'
//                                 />
//                             </div>
//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold">Portfolio</span>
//                                 <input
//                                     {...register("portfolio")}
//                                     name='portfolio'
//                                     className='input form-control '
//                                     id="portfolio"
//                                     type="text"
//                                     placeholder='Enter Portfolio Link'
//                                 />
//                             </div>
//                         </div>


//                     </div>
//                 }

//                 {
//                     career && <div>


//                         <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Career and Application Information</h4>

//                         <div className="row  mb-3 ">
//                             <div className='col-md-3 mb-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Looking for (Job Level)</span>
//                                 <select
//                                     {...register("lookingFor")}
//                                     name="lookingFor"
//                                     id="lookingFor"
//                                     className="form-select"
//                                 >
//                                     <option>-Select Job Level-</option>
//                                     <option value="entry">Entry Level</option>
//                                     <option value="mid">Mid Level</option>
//                                     <option value="top">Top Level</option>
//                                 </select>
//                             </div>
//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Available for (Job Nature)</span>
//                                 <select
//                                     {...register("availbaleFor",)}
//                                     name='availbaleFor'
//                                     className='input form-control '
//                                     id="availbaleFor"
//                                 >
//                                     <option>-Select Job Nature-</option>
//                                     <option value="Full time">Full time</option>
//                                     <option value="Part time">Part time</option>
//                                     <option value="Contract">Contract</option>
//                                     <option value="Contract">Contract</option>
//                                     <option value="Internship">Internship</option>
//                                     <option value="Freelance">Freelance</option>

//                                 </select>
//                             </div>

//                             <div className='col-md-3 mb-3  '>
//                                 <span className="label-text text-md fw-bold  ">Present Salary</span>
//                                 <div className=' d-flex'>
//                                     <input
//                                         {...register("presentSalary",)}
//                                         name='presentSalary'
//                                         className='input form-control '
//                                         id="presentSalary"
//                                         type="text"
//                                         placeholder='Ex. 50000'
//                                     />
//                                     <p>TK/Month</p>
//                                 </div>
//                             </div>

//                             <div className='col-md-3 mb-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Expected Salary</span>
//                                 <div className=' d-flex justify-content-center align-items-center'>
//                                     <input
//                                         {...register("expectedSalary")}
//                                         name='expectedSalary'
//                                         className='input form-control '
//                                         id="expectedSalary"
//                                         type="text"
//                                         placeholder='Enter expected salary'
//                                     />
//                                     <p>TK/Month</p>
//                                 </div>
//                             </div>

//                             <div className='col-md-6 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Preferred Job Category</span>
//                                 <select
//                                     {...register("category")}
//                                     name='category'
//                                     type="text"
//                                     className="form-select">
//                                     <option>-Select Job Category-</option>
//                                     {
//                                         categories &&
//                                         categories.map((category, index) =>
//                                             <option key={index}
//                                                 value={category._id}>
//                                                 {category.name}
//                                             </option>)
//                                     }
//                                 </select>

//                             </div>

//                             <div className='col-md-6 mb-3 '>
//                                 <span className="label-text text-md fw-bold  ">Preferred Locations</span>
//                                 <input
//                                     {...register("p")}
//                                     name='preferredLocations'
//                                     className='input form-control '
//                                     id="preferredLocations"
//                                     type="text"
//                                     placeholder='Enter data here'
//                                 />
//                             </div>
//                             <div className=' '>
//                                 <span className="label-text text-md fw-bold  ">Preferred Organization Type</span>
//                                 <input
//                                     {...register("preferredOrg")}
//                                     name='preferredOrg'
//                                     className='input form-control '
//                                     id="preferredOrg"
//                                     type="text"
//                                     placeholder='Enter Preferred Organization'
//                                 />
//                             </div>
//                         </div>


//                         {/* Specialization Section start */}
//                         <h4 className="label-text text-md fw-bold text-center mt-5  ">Specialization</h4>
//                         <h5 className="label-text text-md fw-bold text-center   mb-2">Skill Section</h5>

//                         <div className='row'>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill One</span>
//                                 <input
//                                     {...register("skillOne",)}
//                                     name='skillOne'
//                                     className='input form-control '
//                                     id="skillOne"
//                                     type="text"
//                                     placeholder='Enter Skil'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Two</span>
//                                 <input
//                                     {...register("skillTwo",)}
//                                     name='skillTwo'
//                                     className='input form-control '
//                                     id="skillTwo"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Three</span>
//                                 <input
//                                     {...register("skillThree",)}
//                                     name='skillThree'
//                                     className='input form-control '
//                                     id="skillThree"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Four</span>
//                                 <input
//                                     {...register("skillFour",)}
//                                     name='skillFour'
//                                     className='input form-control '
//                                     id="skillFour"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Five</span>
//                                 <input
//                                     {...register("skillFive",)}
//                                     name='skillFive'
//                                     className='input form-control '
//                                     id="skillFive"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Six</span>
//                                 <input
//                                     {...register("skillSix",)}
//                                     name='skillSix'
//                                     className='input form-control '
//                                     id="skillSix"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Seven</span>
//                                 <input
//                                     {...register("skillSeven",)}
//                                     name='skillSeven'
//                                     className='input form-control '
//                                     id="skillSeven"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Eight</span>
//                                 <input
//                                     {...register("skillEight",)}
//                                     name='skillEight'
//                                     className='input form-control '
//                                     id="skillEight"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Nine</span>
//                                 <input
//                                     {...register("skillNine",)}
//                                     name='skillNine'
//                                     className='input form-control '
//                                     id="skillNine"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill Ten</span>
//                                 <input
//                                     {...register("skillTen",)}
//                                     name='skillTen'
//                                     className='input form-control '
//                                     id="skillTen"
//                                     type="text"
//                                     placeholder='Enter Skill'
//                                 />
//                             </div>

//                             <div className=' col-md-6 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Skill learned by</span>
//                                 <input
//                                     {...register("skillLearnedBy",)}
//                                     name='skillLearnedBy'
//                                     className='input form-control '
//                                     id="skillLearnedBy"
//                                     type="text"
//                                     placeholder='Enter Skill Learned By'
//                                 />
//                             </div>

//                             <div className=''>
//                                 <span className="label-text text-md fw-bold">Skill Description</span>
//                                 <textarea {...register("skillDesciption",)}
//                                     name='skillDesciption'
//                                     className='input form-control '
//                                     id='skillDesciption' type="text"
//                                     placeholder='Enter skill desciption'
//                                 />
//                             </div>

//                         </div>

//                         {/* Specialization Section end */}

//                     </div>
//                 }

//                 {
//                     language && <div>


//                         {/* Language Section start */}
//                         <h4 className="label-text text-md fw-bold text-center mt-5  ">Language Proficiency</h4>

//                         {/* language one  */}
//                         <div className='row'>
//                             <h5 className="label-text text-md fw-bold mb-2">Language One</h5>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Language <span className="star">&#x2605;</span></span>
//                                 <input
//                                     {...register("languOne", { required: true })}
//                                     name='languOne'
//                                     id='languOne'
//                                     className='input form-control'
//                                     type="text"
//                                     placeholder='Enter Language'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Reading<span className="star">&#x2605;</span></span>
//                                 <select
//                                     {...register("readingOne", { required: 'true' })}
//                                     name="readingOne"
//                                     id="readingOne"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Writing<span className="star">&#x2605;</span></span>
//                                 <select
//                                     {...register("writingOne", { required: 'true' })}
//                                     name="wriingOne"
//                                     id="wriingOne"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Speaking<span className="star">&#x2605;</span></span>
//                                 <select
//                                     {...register("readingOne", { required: 'true' })}
//                                     name="readingOne"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>
//                         </div>



//                         {/* language two */}
//                         <div className='row'>
//                             <h5 className="label-text text-md fw-bold mb-2">Language Two</h5>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Language</span>
//                                 <input
//                                     {...register("languTwo",)}
//                                     name='languTwo'
//                                     id='languTwo'
//                                     className='input form-control'
//                                     type="text"
//                                     placeholder='Enter Language'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Reading</span>
//                                 <select
//                                     {...register("readingTwo")}
//                                     name="readingTwo"
//                                     id="readingTwo"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Writing</span>
//                                 <select
//                                     {...register("writingTwo")}
//                                     name="writingTwo"
//                                     id="writingTwo"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Speaking</span>
//                                 <select
//                                     {...register("readingTwo")}
//                                     name="readingTwo"
//                                     id="readingTwo"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>
//                         </div>



//                         {/* language three */}
//                         <div className='row'>
//                             <h5 className="label-text text-md fw-bold mb-2">Language Three</h5>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Language</span>
//                                 <input
//                                     {...register("languThree",)}
//                                     name='languThree'
//                                     id='languThree'
//                                     className='input form-control'
//                                     type="text"
//                                     placeholder='Enter Language'
//                                 />
//                             </div>
//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Reading</span>
//                                 <select
//                                     {...register("readingThree",)}
//                                     name="readingThree"
//                                     id="readingThree"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Writing</span>
//                                 <select
//                                     {...register("writingThree",)}
//                                     name="writingThree"
//                                     id="writingThree"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>

//                             <div className=' col-md-3 mb-3'>
//                                 <span className="label-text text-md fw-bold  ">Speaking</span>
//                                 <select
//                                     {...register("readingThree",)}
//                                     name="readingThree"
//                                     id="readingThree"
//                                     className="form-select select-bordered  ">
//                                     <option>-Select-</option>
//                                     <option value="high">High</option>
//                                     <option value="medium">Medium</option>
//                                     <option value="low">Low</option>
//                                 </select>
//                             </div>
//                         </div>


//                         {/* Language Section end */}


//                         {/* Refference area start */}

//                         <h4 className="label-text text-md fw-bold text-center mt-5 mb-2">Refference</h4>
//                         <div className="row my-4">
//                             <div className=' col-md-6'>
//                                 <div className=' mb-3'>
//                                     <span className="label-text text-md fw-bold  mb-3">Refference One Name</span>
//                                     <input
//                                         {...register("ref_one_name",)}
//                                         name='ref_one_name'
//                                         className='input form-control '
//                                         id="ref_one_name"
//                                         type="text"
//                                         placeholder='Enter Refference One Name'
//                                     />
//                                 </div>

//                                 <div className=''>
//                                     <span className="label-text text-md fw-bold">Refference One Details</span>
//                                     <textarea {...register("ref_one_details",)}
//                                         name='ref_one_details'
//                                         className='input form-control '
//                                         id='ref_one_details' type="text"
//                                         placeholder='Enter Refference One Details'
//                                     />
//                                 </div>
//                             </div>


//                             <div className=' col-md-6 mb-3'>
//                                 <div className='  mb-3 '>
//                                     <span className="label-text text-md fw-bold  ">Refference Two Name</span>
//                                     <input
//                                         {...register("ref_two_name",)}
//                                         name='ref_two_name'
//                                         className='input form-control '
//                                         id="ref_two_name"
//                                         type="text"
//                                         placeholder='Enter Refference Two Name'
//                                     />
//                                 </div>


//                                 <div className='  '>
//                                     <span className="label-text text-md fw-bold  ">Refference Two Details</span>
//                                     <div>
//                                         <textarea {...register("ref_two_details",)}
//                                             name='ref_two_details'
//                                             className='input form-control '
//                                             id='ref_two_details' type="text"
//                                             placeholder='Enter Refference Two Details'
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Refference area end */}


//                         <h4 className="label-text text-md fw-bold  text-center ">Other</h4>
//                         <div>
//                             <textarea {...register("other")}
//                                 name='other'
//                                 className='input form-control '
//                                 id='other' type="text"
//                                 placeholder='Enter Other Relevant Information'
//                             />
//                         </div>

//                     </div>
//                 }



//                 <div className=' d-flex justify-content-between my-lg-5'>
//                     <button className="btn btn-warning fw-bold">Cancel</button>
//                     <button type='submit' name='submit' className="custom_btn">Save</button>
//                 </div>
//             </form >
//         </div >
//     );
// };

// export default EmployeesAcademicAndTrainingEntry;
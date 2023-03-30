import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const JobSeekersProfileEntry = () => {

    const { user, loading, setLoading, showPersonalData, setShowPersonalData } = useContext(AuthContext);

    const [personalData, setPersonaData] = useState([]);
    const [academicsTrainingData, setAcademicsTrainingData] = useState([]);
    const [careerSkillData, setCareerSkillData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [languageReferenceData, setLanguageReferenceData] = useState([]);

    const email = user?.email;
    const navigate = useNavigate();

    if (loading) {
        <Loader></Loader>
    }


    // #################### show JobSeekers personal details data #########################
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersPersonal/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("jobSeekersPersonal Data",data); 
                setPersonaData(data);
                setLoading(false)
            })
    }, [email, setLoading])

    // console.log("personalData personalData : ", personalData);


    // #################### show JobSeekers academics and training data ###################
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersAcademics/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("jobSeekersAcademics Data", data);
                setAcademicsTrainingData(data);
                setLoading(false)
            })
    }, [email, setLoading])


    // #################### show JobSeekers careers and skill data #########################
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersCareers/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("jobSeekersCareers Data", data);
                setCareerSkillData(data);
                setLoading(false)
            })
    }, [email, setLoading])


    // #################### show jobSeekers Exprience Data #################################
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersExpriences/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("jobSeekersExpriences Data", data);
                setExperienceData(data);
                setLoading(false)
            })
    }, [email, setLoading])


    // #################### show jobSeekers References Data #################################
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CABD_server_address}/jobSeekersReferences/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("jobSeekersReferences Data", data);
                setLanguageReferenceData(data);
                setLoading(false)
            })
    }, [email, setLoading])

    console.log("job Seekers language Reference Data : ", languageReferenceData);



    // ########### control default show personal data ####################
    useEffect(() => {
        console.log("showPersonalData : ", showPersonalData);
        if (showPersonalData) {
            navigate('/dashboard/jobSeekersPersonalDetailsEntry')
        }
    }, [])

    return (
        <div>
            <h2 className=" text-center fw-bold my-4">Create Profile</h2>
            <div className=' d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Employee_profile_button_group">

                    {
                        personalData?.email
                            ?
                            <>
                                <button className=' btn btn-outline-secondary disabled'>Personal Data</button>
                            </>
                            :
                            <>
                                <button type="button" className="btn btn-outline-secondary">
                                    <Link to="/dashboard/jobSeekersPersonalDetailsEntry" className=' text-decoration-none'>Personal</Link>
                                </button>

                            </>
                    }

                    {
                        academicsTrainingData?.email
                            ?
                            <>
                                <button className=' btn btn-outline-secondary disabled'>Education/Training</button>
                            </>
                            :
                            <>
                                <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                                    <Link to="/dashboard/jobSeekerAcademicAndTrainingEntry" className=' text-decoration-none'>Education/Training</Link>
                                </button>
                            </>
                    }

                    {
                        careerSkillData?.email
                            ?
                            <>
                                <button className=' btn btn-outline-secondary disabled'>Career and Skilll</button>
                            </>
                            :
                            <>
                                <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                                    <Link to="/dashboard/jobSeekerCareersAndSkillEntry" className=' text-decoration-none'>Career and Skilll</Link>
                                </button>
                            </>
                    }
                    {
                        experienceData?.email
                            ?
                            <>
                                <button className=' btn btn-outline-secondary disabled'>Experience</button>
                            </>
                            :
                            <>
                                <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                                    <Link to="/dashboard/jobSeekerExperienceDataEntry" className=' text-decoration-none'>Experience</Link>
                                </button>
                            </>
                    }

                    {
                        languageReferenceData.email
                            ?
                            <>
                                <button className=' btn btn-outline-secondary disabled'>Language and Reference</button>
                            </>
                            :
                            <>
                                <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                                    <Link to="/dashboard/jobSeekerLanguageAndReferenceEntry" className=' text-decoration-none'>Language and Reference</Link>
                                </button>
                            </>
                    }
                </div>


            </div>

        </div >
    );
};

export default JobSeekersProfileEntry;
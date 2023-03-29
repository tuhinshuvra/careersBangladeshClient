import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const JobSeekersProfileEntry = () => {

    const { loading, showPersonalData, setShowPersonalData } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        <Loader></Loader>
    }


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

                    <button type="button" className="btn btn-outline-secondary">
                        <Link to="/dashboard/jobSeekersPersonalDetailsEntry" className=' text-decoration-none'>Personal</Link>
                    </button>

                    <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                        <Link to="/dashboard/jobSeekerAcademicAndTrainingEntry" className=' text-decoration-none'>Education/Training</Link>
                    </button>

                    <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                        <Link to="/dashboard/jobSeekerCareersAndSkillEntry" className=' text-decoration-none'>Career and Skilll</Link>
                    </button>

                    <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                        <Link to="/dashboard/jobSeekerExperienceDataEntry" className=' text-decoration-none'>Experience</Link>
                    </button>

                    <button onClick={() => setShowPersonalData(false)} type="button" className="btn btn-outline-secondary">
                        <Link to="/dashboard/jobSeekerLanguageAndReferenceEntry" className=' text-decoration-none'>Language and Reference</Link>
                    </button>
                </div>


            </div>

        </div >
    );
};

export default JobSeekersProfileEntry;
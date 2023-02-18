import React from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CarrerAndApplication from './CarrerAndApplication';
import PreferredAreas from './PreferredAreas';
import OtherInformation from './OtherInformation';
import JobSeekerProfileEntry from './JobSeekerProfileEntry';


const Personal = () => {
    return (
        <div>
            <JobSeekerProfileEntry></JobSeekerProfileEntry>
            <PersonalDetails></PersonalDetails>
            <AddressDetails></AddressDetails>
            <CarrerAndApplication></CarrerAndApplication>
            <PreferredAreas></PreferredAreas>
            <OtherInformation></OtherInformation>
        </div>
    );
};

export default Personal;
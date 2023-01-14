import React from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import CarrerAndApplication from './CarrerAndApplication';
import PreferredAreas from './PreferredAreas';
import OtherRelevantInformation from './OtherRelevantInformation';

const Personal = () => {
    return (
        <div>
            <PersonalDetails></PersonalDetails>
            <AddressDetails></AddressDetails>
            <CarrerAndApplication></CarrerAndApplication>
            <PreferredAreas></PreferredAreas>
            <OtherRelevantInformation></OtherRelevantInformation>
        </div>
    );
};

export default Personal;
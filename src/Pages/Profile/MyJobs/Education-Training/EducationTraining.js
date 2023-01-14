import React from 'react';
import AcademicSummary from './AcademicSummary';
import TranningSummary from './TranningSummary';
import ProfessionalCertificationSummary from './ProfessionalCertificationSummary';

const EducationTraining = () => {
    return (
        <div>
            <AcademicSummary></AcademicSummary>
            <TranningSummary></TranningSummary>
            <ProfessionalCertificationSummary></ProfessionalCertificationSummary>
        </div>
    );
};

export default EducationTraining;
import React from 'react';
import AnimatedBanner from '../Banner/AnimatedBanner';
import FindJobHome from '../JobSearch/FindJobHome';
import JobCategory from '../JobCategory/JobCategory';
import HotJobs from '../HotJobs/HotJobs';
import JobAlert from '../JobAlert/JobAlert';
import ELearning from '../ELearning/ELearning';
import useTitle from '../../hooks/useTitle';
import NewJobs from '../NewJobs/NewJobs';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <FindJobHome></FindJobHome>
            <JobCategory></JobCategory>
            <HotJobs></HotJobs>
            <NewJobs></NewJobs>
            {/* <ELearning></ELearning> */}
            <JobAlert></JobAlert>

            {/* <PracticePurpose></PracticePurpose> */}
            {/* <AllUser></AllUser> */}
        </div>
    );
};

export default Home;
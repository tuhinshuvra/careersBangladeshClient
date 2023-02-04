import React from 'react';
import AnimatedBanner from '../Banner/AnimatedBanner';
import JobSearch from '../JobSearch/JobSearch';
import JobCategory from '../JobCategory/JobCategory';
import HotJobs from '../HotJobs/HotJobs';
import JobAlert from '../JobAlert/JobAlert';
import ELearning from '../ELearning/ELearning';
import useTitle from '../Hooks/useTitle';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            {/* <AnimatedBanner></AnimatedBanner> */}
            <JobSearch></JobSearch>
            <JobCategory></JobCategory>
            <HotJobs></HotJobs>
            <JobAlert></JobAlert>
            <ELearning></ELearning>
        </div>
    );
};

export default Home;
import React from 'react';
import FindJobAndStatistics from '../JobSearch/FindJobAndStatistics';
import JobCategory from '../JobCategory/JobCategory';
import HotJobs from '../HotJobs/HotJobs';
import Subscriber from '../Subscriber/Subscriber';
import ELearning from '../ELearning/ELearning';
import useTitle from '../../hooks/useTitle';
import NewJobs from '../NewJobs/NewJobs';
import './cb_animation.css';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <FindJobAndStatistics></FindJobAndStatistics>
            <JobCategory></JobCategory>
            <HotJobs></HotJobs>
            <NewJobs></NewJobs>
            {/* <ELearning></ELearning> */}
            <Subscriber></Subscriber>
        </div>
    );
};

export default Home;
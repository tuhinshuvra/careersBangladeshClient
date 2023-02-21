import React from 'react';
import { FaChartLine, FaRegBuilding } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

const StatisticsHome = () => {
    return (
        <div className=" my-5">
            <div className="row justify-content-center">

                <div className=" col-md-3 ">
                    <div className="counter-box ">
                        <FaChartLine className='  text-secondary fs-1 mt-1'></FaChartLine>
                        <span className="counter">21471</span>
                        <p>Live Jobs</p>
                    </div>
                </div>
                <div className=" col-md-3 ">
                    <div className="counter-box ">
                        <FaRegBuilding className='  text-secondary fs-1 mt-1'></FaRegBuilding>
                        <span className="counter">2343</span>
                        <p>Companies</p>
                    </div>
                </div>
                <div className=" col-md-3 ">
                    <div className="counter-box ">
                        <BsPeopleFill className='  text-secondary fs-1 mt-1'></BsPeopleFill>
                        <span className="counter">2147</span>
                        <p>Employers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsHome;
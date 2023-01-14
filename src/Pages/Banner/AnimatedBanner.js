import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedBanner = () => {
    return (

        <div className='mt-10'>
            <div className="carousel w-full bg-slate-200">
                <div id="slide1" className="carousel-item relative w-full h-36 flex justify-center align-middle mx-auto">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" /> */}
                    <div className="hidden md:block absolute my-10">
                        <h5 className="text-3xl font-bold text-center  ">Careers Bangladesh Your Career Partner</h5>
                        <p className=' mx-40 mt-2 '>You can enrich yourself by e-learning  and applying for jobs from Careers Bangladesh</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-36 flex justify-center align-middle mx-auto">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" /> */}
                    <div className="hidden md:block absolute my-10">
                        <h5 className="text-3xl font-bold text-center ">Go Ahead With Careers Bangladesh</h5>
                        <p className=' mx-40 mt-2 '>Attach always with us to get the latest and top job news of Bangladesh and the rest of the world.</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-36 flex justify-center align-middle mx-auto">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" /> */}
                    <div className="hidden md:block absolute my-10">
                        <h5 className="text-3xl font-bold text-center ">Careers Bangladesh Your Job Solution</h5>
                        <p className=' mx-40 mt-2 '>From Careers Bangladesh any person can find his/her desired job solution and may help to get a decision about the career.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-36 flex justify-center align-middle mx-auto">
                    {/* <img src="https://placeimg.com/800/200/arch" className="w-full" alt="" /> */}
                    <div className="hidden md:block absolute my-10">
                        <h5 className="text-3xl font-bold text-center ">Go Ahead With Careers Bangladesh</h5>
                        <p className=' mx-40 mt-2 '>Attach always with us to get the latest and top job news of Bangladesh and the rest of the world.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedBanner;
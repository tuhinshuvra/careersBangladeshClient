import React from 'react';
import { Link } from 'react-router-dom';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix }) => {
    return (
        <div className="row ">

            <div className="col-xl-2 col-md-3 col-6  mt-1 ">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgOne} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"> <small>{titleOne}</small> </p>
                    </div>

                </div>
            </div>

            <div className="col-xl-2 col-md-3 col-6 mt-1">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgTwo} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"> <small>{titleTwo}</small></p>
                    </div>
                </div>
            </div>

            <div className="col-xl-2 col-md-3 col-6  mt-1  clearfix d-none d-md-block">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgThree} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"><small>{titleThree}</small></p>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-3 col-6  mt-1  clearfix d-none d-md-block">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgFour} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"><small>{titleFour}</small></p>
                    </div>
                </div>
            </div>

            <div className="col-xl-2 col-md-3 col-6  mt-1 clearfix d-none d-xl-block">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgFive} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"><small>{titleFive}</small></p>
                    </div>
                </div>
            </div>

            <div className="col-xl-2 col-md-3 col-6  mt-1 clearfix d-none d-xl-block">
                <div className="card mb-2 mx-md-0 ">
                    <img className="card-img-top carosolImg mx-auto" src={imgSix} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <p className="card-title text-center"><small>{titleSix}</small></p>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default GridCarousolItem;
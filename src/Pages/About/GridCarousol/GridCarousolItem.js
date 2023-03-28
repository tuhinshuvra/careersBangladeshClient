import React from 'react';
import { Link } from 'react-router-dom';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree, titleOne, titleTwo, titleThree }) => {
    return (
        <div className="row">
            <div className="col-lg-4  col-sm-6">
                <div className="card mb-2 mx-md-0 mx-2">
                    <img className="card-img-top" src={imgOne} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <h5 className="card-title fw-bold text-center">{titleOne}</h5>
                    </div>

                </div>
            </div>

            <div className="col-lg-4 col-sm-6 clearfix d-none d-md-block">
                <div className="card mb-2 mx-md-0 mx-3">
                    <img className="card-img-top" src={imgTwo} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <h5 className="card-title fw-bold text-center">{titleTwo}</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6  clearfix d-none d-lg-block">
                <div className="card mb-2 mx-md-0 mx-3">
                    <img className="card-img-top" src={imgThree} alt="Card_image_cap" />

                    <div className=" my-2 mx-1">
                        <h5 className="card-title fw-bold text-center">{titleThree}</h5>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default GridCarousolItem;
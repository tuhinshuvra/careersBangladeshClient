import React from 'react';
// import ElearningImage from '../../assets/images/elearning.jpg';
import './Elearning.css';

const ELearning = () => {
    return (
        <div className="  px-4 py-5 text-center mt-5 elearning_bg ">
            <div className="py-2   bg-transparent ">
                <h1 className="display-5 fw-bold careers_title_one">Welcome to your eLearning</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 ">
                        Visit eLearning of Careers Bangladesh to find out all the newest articles about Text In eLearning, written by our top eLearning authors. Share our valuable Text In eLearning resources or submit your article.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold custom_btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ELearning;
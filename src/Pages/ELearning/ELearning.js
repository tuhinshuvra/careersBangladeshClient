import React from 'react';

const ELearning = () => {
    return (
        <div>
            <div className="  px-4 py-5 text-center  " style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="py-2   bg-transparent ">
                    <h1 className="display-5 fw-bold careers_title_one">Welcome to your eLearning</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold custom_btn">Get Started</button>
                            {/* <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ELearning;
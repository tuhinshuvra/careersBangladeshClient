import React from 'react';
import useTitle from '../Hooks/useTitle';
import AboutUsImage from '../../assets/images/aboutus.jpg';

const About = () => {
    useTitle('About Us')
    return (
        <div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">About Careers Bangladesh</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Careers Bangladesh is a online job searching website where you can search your desigred job and at a time you can enrich yourself by e-learning
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="px-4 me-sm-3 custom_btn">More Details</button>
                        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                    <div className="container px-5">
                        <img src={AboutUsImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="sampleimage"
                            width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
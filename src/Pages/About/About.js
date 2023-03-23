import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutUsImage from '../../assets/images/aboutus.jpg';
import './About.css';

const About = () => {
    useTitle('About Us')
    return (
        <div className="px-4 bgDownloadApp py-4">
    <div className="col-md-10 mx-auto row flex-lg-row-reverse align-items-center">
      
      <div className="col-lg-6 d-flex justify-content-center">
        <img src={AboutUsImage} className="aboutUsImage" alt="Mobile_App_Img"   loading="lazy"/>
      </div>
      
      <div className="col-lg-6 mt-md-0 mt-sm-5">        
        <div className=''>

        <h3 className="fw-bold  text-black  text-center">About Us</h3>
        <p className="aboutP">Careersbangladesh.com is the most innovative and one of the fast-growing online job portals in Bangladesh. Founded in 2023.  <br /><br />

Careersbangladesh.com  connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology. <br /><br /> 
While most job portals only focus on getting candidates the next job, Careersbangladesh focuses on the entire career growth of candidates.  <br /><br />

As the industry shifts towards mobile, Careersbangladesh is leading the transition and is the fastest-growing job portal on mobile devices, 
 witnessing a 100% YOY growth in mobile traffic and also offering on-the-go jobs through the Careersbangladesh Job Search App. <br /><br />

Careersbangladesh works closely to bridge the gap between talent & opportunities and offers end-to-end recruitment solutions. <br /><br /> Careersbangladesh Job Fair brings candidates and top employers under one roof. While Careersbangladesh HR Conclave brings top HR leaders to share insights on the latest trends, innovations & best practices in the HR industry.  </p>
        </div>
        

        {/* <div className="d-grid gap-2 d-flex justify-content-md-start justify-content-sm-center">
            <a href="https://play.google.com/store/apps/details?id=com.nagair.app&pli=1" target='_blank' rel="noreferrer" > <img className='AndroidStore' src={AndroidStore} alt="" /> </a>
            <a href="/" target='_blank' rel="noreferrer" > <img className='AndroidStore' src={AppleStore} alt="" /> </a>
        </div> */}
      </div>
    </div>
  </div>
    );
};

export default About;
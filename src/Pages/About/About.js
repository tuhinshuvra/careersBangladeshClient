import React from 'react';
import useTitle from '../../hooks/useTitle';
import GridCarousol from './GridCarousol/GridCarousol';
import './About.css';

const About = () => {
  useTitle('About Us')
  return (
    <div className="px-4 bgDownloadApp py-4">
      <div className="col-md-10 mx-auto row flex-lg-row-reverse align-items-center">


        <div className="mt-md-0 mt-sm-5">
          <div className=''>
            <h3 className="fw-bold  text-center location_heading">About Us</h3>
            <p className=" ">
              Careersbangladesh.com is the most innovative and one of the fast-growing online job portals in Bangladesh. Founded in 2023.  <br /><br />

              Careersbangladesh.com  connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology. <br /><br />
              While most job portals only focus on getting candidates the next job, Careersbangladesh focuses on the entire career growth of candidates.  <br /><br />

              As the industry shifts towards mobile, Careersbangladesh is leading the transition and is the fastest-growing job portal on mobile devices,
              witnessing a 100% YOY growth in mobile traffic and also offering on-the-go jobs through the Careersbangladesh Job Search App.
            </p>
          </div>

          <div className=" col-lg-11 mx-auto">
            <GridCarousol></GridCarousol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/logo/carriers-bangladesh-logo.png";
import GooglePlayStore from "../../assets/apps_store/google_play_store.png";
import AppleStore from "../../assets/apps_store/apple_store.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_bg ">
      <div className="container footer_bg">
        <footer className="pt-4">
          <div className="row">

            <div className="col-12 col-lg-4 mb-3 d-flex  flex-column justify-content-center align-items-center">
              <div className=' d-flex justify-content-center'>
                <Link to="/"> <img className='footer_logo' src={FooterLogo} alt="" /></Link>
              </div>
              <h3 className="text-lg font-bold text-center mt-2 careers_title_two ">
                Careers Bangladesh
              </h3>
              <h5 className=" text-center mt-2">Providing reliable job solution</h5>
            </div>

            <div className="col-6 col-lg-2 col-md-3 mb-3">
              <div className=''>

                <div className=''>
                  <h5 className='text-center'>About Us</h5>
                </div>

                <ul className="nav flex-column ">
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Home</Link></li>
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Terms & Conditions</Link></li>
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Abotut us</Link></li>
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Partners</Link></li>
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Services</Link></li>
                  <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-3 mb-3">
              <h5 className='text-center '>Job Seekers</h5>
              <ul className="nav flex-column">
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Create Account</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Edit Resume</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Video Resume</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">About</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">My Jobs Panel</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">List of Features</Link></li>
              </ul>
            </div>

            <div className="col-6 col-lg-2 col-md-3 mb-3">
              <h5 className='text-center'>Employers</h5>
              <ul className="nav flex-column">
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Create Account</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Product</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Sevices</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Pricing</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">FAQ</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">About</Link></li>
              </ul>
            </div>

            <div className="col-6 col-lg-2 col-md-3 mb-3">
              <h5 className=' text-center'>Tools & Media</h5>
              <ul className="nav flex-column">
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Media</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Product</Link></li>
                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Sevices</Link></li>
                <li className=" text-center">
                  <div className="">
                    <a
                      href={`https://play.google.com/store/apps/details?id=com.careers.app`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className=" appStore mt-1"
                        src={GooglePlayStore}
                        alt=""
                      />
                    </a>
                    <a
                      href={`https://play.google.com/store/apps/details?id=com.careers.app`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className=" appStore mt-1" src={AppleStore} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <div className=" d-flex justify-content-center my-2">
            <div className=" ">
              <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current mx-2"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            </div>
          </div>

          <div>
            <p className='text-center mb-0 copyright_text'> <small>Copyright @ 2023, All right reserved by Careersbangladesh.com</small></p>
          </div>
        </footer >
      </div >
    </footer >
  );
};

export default Footer;

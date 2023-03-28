import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterLogo from "../../assets/logo/carriers-bangladesh-logo.png";
import GooglePlayStore from "../../assets/apps_store/google_play_store.png";
import AppleStore from "../../assets/apps_store/apple_store.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_bg ">
      <div className="row">

        <div className="col-12 col-lg-4  d-flex  flex-column justify-content-center align-items-center">
          <div className=" d-flex justify-content-center">
            <Link to="/">
              {" "}
              <img className="footer_logo" src={FooterLogo} alt="" />
            </Link>
          </div>
          <h3 className="text-lg font-bold text-center mt-2 careers_title_two ">
            Careers Bangladesh
          </h3>
          <h5 className=" text-center mt-2">Providing reliable job solution</h5>
        </div>

        <div className="col-6 col-lg-2 mt-3 px-lg-0 ">
          <h5>About Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Terms & Conditions
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Accessibility Statement
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                International Partners{" "}
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Other Partners{" "}
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Feedback
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-lg-2 mt-3 ">
          <h5>Job Seekers</h5>
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                About Careersbangladesh
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Edit Resume
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Video Resume new
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                My Jobs Panel
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                List of Features
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Employability Test
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Video Guides
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-lg-2 mt-3 ">
          <h5>Employers</h5>
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Create Account
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Service
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Pricing
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Post a Job
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                FAQ
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-lg-2 mt-3">
          <h5>Tools & Media</h5>
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Facebook
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                Youtube
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link p-0 text-muted">
                LinkedIn
              </Link>
            </li>

            <li>
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

      <div className=" d-flex justify-content-center">
        <Link to="#" className=" social_icon">
          {" "}
          <FaFacebookF />{" "}
        </Link>
        <Link to="#" className=" social_icon">
          {" "}
          <FaTwitter />{" "}
        </Link>
        <Link to="#" className=" social_icon">
          {" "}
          <FaLinkedinIn />{" "}
        </Link>
      </div>

      <div className=" mb-0">
        <p className="text-center mb-0">
          Copyright @ 2023, All right reserved by Careers Bangladesh Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;

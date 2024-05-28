import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import "../styles/Footer.css";

const Footer = () => {
  return <>
  <footer className="py-4">
  <div className="container-xxl">
    <div className="row align-items-center">
    <div className="col-5">
    <div className="footer-top-data d-flex gap-30 align-items-center">
      <img src={newsletter} alt="newsletter" />
      <h2 className="mb-0 text-white">SignUp for NewsLetter</h2>
    </div>
    </div>
    <div className="col-7">
    <div className="input-group ">
        <input 
        type="text" 
        className="form-control py-1" 
        placeholder="Your Email Address" 
        aria-label="Your Email Address" 
        aria-describedby="basic-addon2"
        />
        <span className="input-group-text p-2 " id="basic-addon2">
          Subscribe
        </span>
      </div>
    </div>
      </div>
      </div>
  </footer>
  <footer className="py-4">
  <div className="container-xxl">
    <div className="row">
    <div className="col-4">
    <h4 className="text-white mb-3">Contact Us</h4>
    <div>
      <address className="text-white fs-6">
        No 82 / 8 , <br /> Crystal Complex 3rd Cross St, Colombo 01100, <br /> Sri Lanka
      </address>
      <a href="Online Store: +(94) 0706 560 560" className="mt-4 d-block mb-1 text-white">+ (94) 0706 560 560</a>
      <a href="Email: onlinetextilemall@genda.com" className="mt-4 d-block mb-0 text-white">onlinetextilemall@genda.com</a>
      <div className="social_icons d-flex align-items-center gap-30 mt-4">
      <a className="text-white" href=""><BsLinkedin className="fs-4" /></a>
      <a className="text-white" href=""><BsGithub className="fs-4" /></a>
      <a className="text-white" href=""><BsYoutube className="fs-4" /></a>
      <a className="text-white" href=""><BsInstagram className="fs-4" /></a>
    </div>
      </div>
    </div>
    <div className="col-3">
    <h4 className="text-white mb-3">Information</h4>
    <div className="footer-link d-flex flex-column">
      <Link className="text-white py-2 mb-1">Privacy Policy</Link>
      <Link className="text-white py-2 mb-1">Shipping Policy</Link>
      <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
      <Link className="text-white py-2 mb-1">Returns & Exchanges</Link>
      <Link className="text-white py-2 mb-1">Refund Policy</Link>
    </div>
    </div>
    <div className="col-3">
    <h4 className="text-white mb-3">Account</h4>
    <div className="footer-link d-flex flex-column">
      <Link className="text-white py-2 mb-1">About Us</Link>
      <Link className="text-white py-2 mb-1">FAQ's</Link>
      <Link className="text-white py-2 mb-1">Contact</Link>
    </div>
    </div>
    <div className="col-2">
    <h4 className="text-white mb-3">Quick Links</h4>
    <div className="footer-link d-flex flex-column">
      <Link className="text-white py-2 mb-1">Women’s Wear </Link>
      <Link className="text-white py-2 mb-1">Men’s Wear </Link>
      <Link className="text-white py-2 mb-1">Kid’s Wear </Link>
      <Link className="text-white py-2 mb-1">Bags & Shoes </Link>
      <Link className="text-white py-2 mb-1">Mother & Baby Care</Link>
    </div>
    </div>
    </div>
    </div>
  </footer>
  <footer className="py-4">
    <div className="container-xxl">
    <div className="row">
    <div className="col-12">
      <p className="text-center mb-0 text-white">
        &copy; {new Date().getFullYear()};Powered by GenDA
      </p>
      </div>
      </div>
      </div>
      </footer>
  </>;
};

export default Footer;
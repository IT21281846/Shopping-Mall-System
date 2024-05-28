import React from "react";
import { NavLink, Link } from "react-router-dom";
import{BsSearch} from "react-icons/bs";
import "../styles/NewHeader.css";


import img1 from "../images/parkingspace.svg";
import img2 from "../images/compare.svg";
import img3 from "../images/user.svg";
import img4 from "../images/cart.svg";
import img5 from "../images/img-zoom.svg";

const Test = () => {
  return  (
  <>
  <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
      <div className="col-6">
        <p className="text-white mb-0">Free Shipping Over 50+ Regions ✔🎯 & Free Returns</p>
      </div>
      <div className="col-6">
        <p className="text-end text-white mb-0">
          Hotline: <a className="text-white" href="tel: +(94)11 2735678">+(94) 11 4457880</a></p>
      </div>
      </div>
      </div> 
  </header>
  <header className="header-upper py-3">
    <div className="container-xxl">
      <div className="row align-items-center">
      <div className="col-2">
        <h1>
          <Link className="text-white">GenDA</Link>
          </h1>
      </div>
      <div className="col-5">
      <div className="input-group ">
        <input 
        type="text" 
        className="form-control py-2" 
        placeholder="Search Product here" 
        aria-label="Search Product here" 
        aria-describedby="basic-addon2"
        />
        <span className="input-group-text p-3" id="basic-addon2">
        <BsSearch className="fs-6"/> 
        </span>
      </div>
          
      </div>
      <div className="col-5">
        <div className="header-upper-links d-flex align-items-center justify-content-between">
          <div>
            <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
            <img src={img2} alt="compare" />
            <p className="mb-0">
              Compare <br /> Products
              </p>
            </Link>
          </div>
          <div>
          <Link to="/my-picks" className="d-flex align-items-center gap-10 text-white">
          <img src={img1} alt="parkingspace" />
            <p className="mb-0">
              My <br /> PICKS
              </p>
            </Link>
          </div>
          <div>
          <Link to="/login" className="d-flex align-items-center gap-10 text-white">
          <img src={img3} alt="user" />
            <p className="mb-0">
              Login <br />My Account
              </p>
            </Link>
          </div>
          <div>
          <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
          <img src={img4} alt="cart" />
            <div className="d-flex flex-column gap-10">
              <span className="badge bg-white text-dark">0</span>
              <p className="mb-0"> $ 500</p>
            </div>
            </Link>
          </div>
          </div>   
      </div>
      </div>
      </div> 
  </header>
  <header className="header-bottom py-3">
    <div className="container-xxl">
      <div className="row ">
      <div className="col-12">
      <div className="menu-bottom d-flex align-items-center gap-30">
      <div>
      <div className ="dropdown">

</div>
      </div>
        <div className="menu-links">
          <div className="d-flex align-items-center gap-15">
            <NavLink to="/home">SHOPS</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/product">OurStore</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        </div>
      </div>
      
      </div>
      </div>
  </header>;
  

  </>
  );    
};

export default Test;
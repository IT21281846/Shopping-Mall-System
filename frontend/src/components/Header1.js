import React from "react";
import "../styles/Header.css";


const Header1 = () =>{
    

    return (

        <div>
        <div className="box3" >
        <h1 style={{ color: 'white', textAlign: 'left', marginRight: '10px' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>GenDA</a>
        </h1>


        <div className="search-bar1">
            <input type="search" disabled />
        </div>
        <p><a href="" >Sign Out</a></p>
        <p1><a href="" >Oders</a></p1>
        <p1><a href="" >Cart</a></p1>
       
        </div>

        
        <div className="box4">
            <nav>
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="/add">Add Shop</a>
        </li>
        <li>
          <a href="/shoplist">Shop List</a>
        </li>
        <li>
          <a href="#">Today's Deals</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>
    </nav>
    </div>
            
        </div>
    );

};

export default Header1;
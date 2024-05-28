import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../styles/View.css';
import ReactPannellum from "react-pannellum";
import NewHeader1 from "./NewHeader1";
import Footer from "./Footer";
import '../styles/Image.css';
import image from "../images/i.jpg";


export default function View(){

    const [data, setdata] = useState({});
    const id = useParams().id;

    // const click = () => {
    //     console.log(getConfig());
    // };
    
    const config = {
        autoRotate: -15
    };
    
    const containerStyle = {
        width: '570px',
        height: '470px',
    };

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:8080/shop/get/${id}`)
                .then((res) => res.data)
                .then((data) => setdata(data.shop));
        };
        fetchHandler();
    }, [id]);

    return (
        <div className="container-fluid">
            <NewHeader1 />
            <div className="Details-container">
                <div className="shop-name">{data?.shopName}</div> 
                <form className="your-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card1">
                                {data.image && (
                                    <ReactPannellum 
                                        style={containerStyle}
                                        id="1"
                                        sceneId="firstScene"
                                        imageSource={`/uploads/${data.image}`}
                                        config={config}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="label-row">
                                    <label htmlFor="shopid" className="font-weight-bold" >Shop ID:</label>
                                </div>
                                <div className="value-row">
                                    <span className="form-value">{data?.shopId}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="label-row">
                                    <label htmlFor="location" className="font-weight-bold">Location:</label>
                                </div>
                                <div className="value-row">
                                    <span className="form-value">{data?.location}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="label-row">
                                    <label htmlFor="customer" className="font-weight-bold">Contact:</label>
                                </div>
                                <div className="value-row">
                                    <span className="form-value">{data?.contact}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="label-row">
                                    <label htmlFor="description" className="font-weight-bold">Description:</label>
                                </div>
                                <div className="value-row">
                                    <span className="form-value1">{data?.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="button-down" style={{ paddingTop: '20px', paddingBottom: '20px' }}></div>
            <Footer />
        </div>
    );
}


/*

import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import '../styles/View.css';
import { Link } from "react-router-dom";
import Header1 from "./Header1";
import zara from "../images/zara.jpg";

export default function View(){

    const [data, setdata] = useState({});
    const id = useParams().id;

 


    useEffect(() => {
        const fetchHandler = async () => {
          await axios
            .get(`http://localhost:8080/shop/get/${id}`)
            .then((res) => res.data)
            .then((data) => setdata(data.shop));
        };
        fetchHandler();
      }, [id]);



      return(
        
<div className="container-fluid">
<Header1 />


        
<div className="Details-container">
<div className="shop-name">{data?.shopName}</div> 
    <form className="your-form">
    <div className="row">
        
        <div className="col-md-6">
        <div className="card1">
        <Link to={`/ProductView`}>

        <img src={zara} alt="Zara" />
                    
        </Link>
        </div>
        </div>

        
<div className="col-md-6">

<div className="form-group">
            <div className="label-row">
            <label htmlFor="shopid" className="font-weight-bold" >Shop ID:</label>
            </div>
             <div className="value-row">
            <span className="form-value">{data?.shopId}</span>
            </div>
</div>

<div className="form-group">
            <div className="label-row">
            <label htmlFor="location" className="font-weight-bold">Location:</label>
            </div>
            <div className="value-row">
            <span className="form-value">{data?.location}</span>
            </div>
</div>
<div className="form-group">
            <div className="label-row">
            <label htmlFor="customer" className="font-weight-bold">Contact:</label>
            </div>
            <div className="value-row">
            <span className="form-value">{data?.contact}</span>
            </div>
</div>
            <div className="form-group">
            <div className="label-row">
            <label htmlFor="description" className="font-weight-bold">Description:</label>
            </div>
            <div className="value-row">
            <span className="form-value1">{data?.description}</span>
            </div>
            </div>
</div>

    </div>

</form>

        </div>
        </div>
      )

}

*/


/*

import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import '../styles/View.css';
import ReactPannellum, { getConfig } from "react-pannellum";
// import { Link } from "react-router-dom";
import NewHeader1 from "./NewHeader1";
import Footer from "./Footer";
import '../styles/Image.css';
import image from "../images/i.jpg";


export default function View(){

    const [data, setdata] = useState({});
    const id = useParams().id;
  

    const click = () => {
        console.log(getConfig());
      };
    
      const config = {
        autoRotate: -15
      };
    
      const containerStyle = {
        width: '570px',
        height: '470px',
      };


    useEffect(() => {
        const fetchHandler = async () => {
          await axios
            .get(`http://localhost:8080/shop/get/${id}`)
            .then((res) => res.data)
            .then((data) => setdata(data.shop));
        };
        fetchHandler();
      }, [id]);
    
      


      return(
        
<div className="container-fluid">
<NewHeader1 />


        
<div className="Details-container">
<div className="shop-name">{data?.shopName}</div> 
    <form className="your-form">
    <div className="row">
        
        <div className="col-md-6">
        <div className="card1">
        <img  src={`/uploads/${data.image}`} alt="Zara" />

        <ReactPannellum 
          style={containerStyle}
          id="1"
          sceneId="firstScene"
          imageSource={`/uploads/${data.image}`}
          config={config}/>

        </div>
        </div>

        
<div className="col-md-6">

<div className="form-group">
            <div className="label-row">
            <label htmlFor="shopid" className="font-weight-bold" >Shop ID:</label>
            </div>
             <div className="value-row">
            <span className="form-value">{data?.shopId}</span>
            </div>
</div>

<div className="form-group">
            <div className="label-row">
            <label htmlFor="location" className="font-weight-bold">Location:</label>
            </div>
            <div className="value-row">
            <span className="form-value">{data?.location}</span>
            </div>
</div>
<div className="form-group">
            <div className="label-row">
            <label htmlFor="customer" className="font-weight-bold">Contact:</label>
            </div>
            <div className="value-row">
            <span className="form-value">{data?.contact}</span>
            </div>
</div>
            <div className="form-group">
            <div className="label-row">
            <label htmlFor="description" className="font-weight-bold">Description:</label>
            </div>
            <div className="value-row">
            <span className="form-value1">{data?.description}</span>
            </div>
            </div>
</div>

    </div>

</form>

        </div>
        <div className="button-down" style={{ paddingTop: '20px', paddingBottom: '20px' }}></div>
        <Footer />
        </div>
      )

}


*/
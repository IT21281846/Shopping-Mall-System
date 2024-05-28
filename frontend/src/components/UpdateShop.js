import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import NewHeader1 from "./NewHeader1"
import Footer from "./Footer";
import '../styles/AddShop.css';



export default function UpdateShop() {

    const [data, setdata] = useState({});
  const id = useParams().id;
  const history = useNavigate();




  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8080/shop/get/${id}`)
        .then((res) => res.data)
        .then((data) => setdata(data.shop));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8080/shop/update/${id}`, {
        shopName: String(data.shopName),
        shopId: String(data.shopId),
        location: String(data.location),
        contact: String(data.contact),
        description: String(data.description),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>history("/shoplist"),window.alert("Shop Successfully Updated!!!"));
  };

  const handleChange = (e) => {
    setdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
    
    


    return(
        <div>
          <div>
            <NewHeader1/>
        </div>


            <div class="container-fluid" style={{ marginTop: "20px",marginLeft:"30px" }}>
            <form onSubmit={handleSubmit}>
            
            <div class="form-group row">
                <label for="name" class="col-sm-1 col-form-label">Shop Name:</label>
                    <div class="col-sm-10 margin-left-60">
                        <input type="text" class="form-control" name="shopName" value={data?.shopName} onChange={handleChange}required/>
                     </div>
            </div>
            <div class="form-group row">
                <label for="id" class="col-sm-1 col-form-label">Shop Id:</label>
                    <div class="col-sm-10 margin-left-60">
                        <input type="text" class="form-control" id="id" name="shopId" value={data?.shopId} onChange={handleChange}disabled/>
                    </div>
            </div>
      
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="location">Location:</label>
                    <input type="text" class="form-control margin-left-60" name="location" value={data?.location} onChange={handleChange}required/>
                </div>
                <div class="form-group col-md-4 margin-left-80">
                    <label for="capacity">Contact:</label>
                    <input type="text" class="form-control margin-left-60" name="contact" value={data?.contact} maxlength="10"
                    pattern="0[0-9]{9}" title="Contact must start with '0' and be 10 digits in total" onChange={handleChange}required/>
                </div>
            </div>

             <div class="form-group">
                <label for="discription">Description</label>
                <textarea class="form-control margin-left-60" id="discription" name="description" value={data?.description} onChange={handleChange} rows="5"></textarea>
            </div>
            
            
            <button type="submit" class="btn btn-primary margin-left-100" >Submit</button>
        </form> 
        </div>
        <div className="button-down" style={{ paddingTop: '20px', paddingBottom: '20px' }}></div>
        <Footer/>
        </div>
    )
   
}

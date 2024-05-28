import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import Header1 from "./Header1";
import NewHeader1 from "./NewHeader1";
import Footer from "./Footer";
import '../styles/AddShop.css';

export default function AddShop() {
    const [shopName, setShopName] = useState("");
    const [shopId, setShopId] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        if (shopId.toLowerCase().startsWith('s')) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [shopId]);

    const sendData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("shopName", shopName);
        formData.append("shopId", shopId);
        formData.append("location", location);
        formData.append("contact", contact);
        formData.append("description", description);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8080/shop/add", formData);
            history("/"); // Assuming history is used for navigation
            window.alert("Shop Successfully Added!!!");
        } catch (error) {
            console.error(error);
            alert("Error adding shop");
        }
    };

    const onChangeFile = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <NewHeader1 />
            <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                <form onSubmit={sendData}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-1 col-form-label">Shop Name:</label>
                        <div className="col-sm-10 margin-left-60">
                            <input type="text" className="form-control" id="name" placeholder="Enter Shop Name" onChange={(e) => {
                                setShopName(e.target.value);
                            }} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="id" className="col-sm-1 col-form-label">Shop Id:</label>
                        <div className="col-sm-10 margin-left-60">
                            <input type="text" className="form-control" id="id" placeholder="Enter Shop Id" maxLength="4"
                                pattern="[sS]\d{3}" title="Shop ID must start with 's' or 'S' followed by three numbers" onChange={(e) => {
                                    setShopId(e.target.value);
                                }} />
                        </div>
                    </div>
                    {!isValid && (
                        <p style={{ color: 'red' }}>
                            Shop ID must start with 's or S'.
                        </p>
                    )}
                    <div className="form-row">
                        <div className="form-group col-md-4 ">
                            <label htmlFor="location">Location:</label>
                            <input type="text" className="form-control margin-left-60" id="location" placeholder="Enter Shop Location" onChange={(e) => {
                                setLocation(e.target.value);
                            }} required />
                        </div>
                        <div className="form-group col-md-4 margin-left-80">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" className="form-control margin-left-60" id="contact" placeholder="Enter Contact Details" maxLength="10"
                                pattern="0[0-9]{9}" title="Contact must start with '0' and be 10 digits in total" onChange={(e) => {
                                    setContact(e.target.value);
                                }} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control margin-left-60" id="description" rows="3" onChange={(e) => {
                            setDescription(e.target.value);
                        }}></textarea>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Image :</Form.Label>
                            <Form.Control type="file" name="image" onChange={onChangeFile} />
                            <Form.Text className="text-muted">
                                <p>* Required</p>
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <button type="submit" className="btn btn-primary margin-left-100"  disabled={!isValid}>Submit</button>
                    <div className="button-down" style={{ paddingTop: '20px', paddingBottom: '20px' }}></div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

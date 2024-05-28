import React,{useState} from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';




import ShopList from './components/ShopList';
import Shops from "./components/Shops";
import AddShop from './components/AddShop';
import UpdateShop from "./components/UpdateShop";
import View from "./components/View";
import Image from "./components/Image";
import FileUpload from "./components/FileUpload";
import Test from "./components/NewHeader"
import Test1 from "./components/Footer"




function App() {





  return (
    <div>
    <Router>
    <Routes>
        
        <Route path="/" element={<Shops />}></Route>
        <Route path="/shoplist" element={<ShopList />}></Route>
        <Route path="/update/:id" element={<UpdateShop />}></Route>
        <Route path="/add" element={<AddShop />}></Route>
        <Route path="/get/:id" element={<View />}></Route>
        <Route path="/ProductView" element={<Image />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/test1" element={<Test1 />}></Route>

        
        
        
     </Routes> 
     
    </Router>
    </div>
    
  ); 
}

export default App; 

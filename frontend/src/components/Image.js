import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import '../styles/Image.css';
import Header1 from "./Header1"
import zara from "../images/zara.jpg";


const Image = () => {
  const click = () => {
    console.log(getConfig());
  };

  const config = {
    autoRotate: -15
  };

  const containerStyle = {
    width: '560px',
    height: '460px',
  };

  return (
    <div>
      <Header1/>
      <div className="card3">
        <ReactPannellum 
          style={containerStyle}
          id="1"
          sceneId="firstScene"
          imageSource="./images/image.jpeg"
          config={config}/>
      </div>
    </div>
  );
};

export default Image;


/*

class Image extends React.Component {
  click() {
    console.log(getConfig());
  }

  render() {
    const config = {
      autoRotate: -15
    };

    // Style for the container div
    const containerStyle = {
      width: '560px',   // Take full width of parent container
      height: '460px',
      
    };

    return (
      <div>
        <div>
        <Header1/>
        </div>
      <div className="card3" >
      <ReactPannellum 
          style={containerStyle}
          id="1"
          sceneId="firstScene"
          imageSource="./images/image.jpeg"
          config={config}/>
      </div>
      </div>
    );
  }
}

export default Image;


*/
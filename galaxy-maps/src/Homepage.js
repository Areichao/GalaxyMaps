import React from "react"
import "./Homepage.css"
import saturn from "./images/saturn.png";
import alien from "./images/alien-spaceship.png";

const Homepage = (props) => {

    return (
      <div>
        <img src={saturn} alt='saturn image' />
        <img src={alien} alt='alien in a spaceship image' />
      </div>
    );
};

export default Homepage
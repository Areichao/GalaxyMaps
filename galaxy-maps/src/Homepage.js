import React from "react"
import "./Homepage.css"
import saturn from "./images/saturn.png";


class Homepage extends React.Component{
    
    renderPlanets() {
        return (
            <img src={saturn} alt="saturn image" />
       
        );
    }
}

export default Homepage
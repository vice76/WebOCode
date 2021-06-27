import React from 'react';
import { NavLink } from "react-router-dom";

const Heading = () => {
    return (
        <div className="heading">
        <div className="option-container">
        <h1>Looking for</h1>
        <div className="options">
        <NavLink to="/resources/oxygen"><button>Oxygen</button></NavLink>
        <NavLink to="/resources/medicine"><button>Medicine</button></NavLink>
        <NavLink to="/resources/plasma"><button>Plasma</button></NavLink>
        </div>
        </div>  
        </div>
    )
}

export default Heading;

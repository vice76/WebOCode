import React from 'react'
import Blood from "../../assets/Blood.png";
import Bottle from "../../assets/Bottle.png";
import Drop from "../../assets/Drop.png";
import "../../scss/components/_bloodbottle.scss";

const Bloodbottle = () => {
    return (
        <div className="bloodbottle">
             <img className="bloodbottle-left" src={Bottle} slt="Website-Logo"/>
             <img className="bloodbottle-center" src={Blood} slt="Website-Logo"/>
             <img className="bloodbottle-right" src={Drop} slt="Website-Logo"/> 
        </div>
    )
}

export default Bloodbottle;

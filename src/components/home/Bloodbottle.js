import React from 'react'
import Blood from "../../assets/Blood.png";
import Bottle from "../../assets/Bottle.png";
import Drop from "../../assets/Drop.png";
import Donateicon from "../../assets/bx-donate-blood.png";
import { Button } from '@material-ui/core';
import "../../scss/components/_bloodbottle.scss";

const Bloodbottle = () => {
    return (
        <div className="bloodbottle">
            <div className="bloodbottle-container">
             <img className="bloodbottle-left" src={Bottle} slt="background -img1"/>
             <img className="bloodbottle-center" src={Blood} slt="main-img"/>
             <img className="bloodbottle-right" src={Drop} slt="background -img2"/> 
            </div>
             <div className="donate-button">
             <Button variant="outlined" >Donate Plasma</Button>
             </div>
             <div className="plasma-heading">
                <h1>BECOME A VOLUNTEER
                <img className="icon" src={Donateicon} slt="background -img2"/> 
                </h1> 
             </div>
        </div>
    )
}

export default Bloodbottle;

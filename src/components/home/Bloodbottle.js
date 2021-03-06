import React, { useState } from 'react'
import Blood from "../../assets/Blood.png";
import Bottle from "../../assets/Bottle.png";
import Drop from "../../assets/Drop.png";
import Donateicon from "../../assets/bx-donate-blood.png";
import { Button } from '@material-ui/core';
import "../../scss/components/_bloodbottle.scss";
import ResourceForm from '../resources/ResourceForm'; 

const Bloodbottle = () => {
    const [openForm , setOpenForm] = useState(false);
    const handleopenForm = () => setOpenForm(true);
    const handleFormClose = () => setOpenForm(false);

    return (
        <div className="bloodbottle">
            <div className="bloodbottle-container">
             <img className="bloodbottle-left" src={Bottle} alt="background -img1"/>
             <img className="bloodbottle-center" src={Blood} alt="main-img"/>
             <img className="bloodbottle-right" src={Drop} alt="background -img2"/> 
            </div>
             <div className="donate-button">
             <Button variant="outlined" onClick={handleopenForm}>Donate Plasma</Button>
             </div>
             <div className="plasma-heading">
                <h1>BECOME A VOLUNTEER</h1> 
                <img className="icon" src={Donateicon} alt="background -img2"/>  
             </div>
             {openForm && <ResourceForm open={openForm} handleClose={handleFormClose}/>}
        </div>
    )
}

export default Bloodbottle;

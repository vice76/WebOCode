import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';
import OxygenLogo from '../assets/oxygenLogo.png';

const ResourceCard = (props) => {
    return (
        <div className="resource-container">
            <div className="container">
                <div className="details">
                <div className="icon-div">
                <div className="icon">
                <image src={OxygenLogo} alt="logo-type"/>
                </div>
                </div>
                <div className="details-div">
                    <p><AccountCircleIcon />Name : "Sudheer Singh"</p>
                    <p><LocalMallIcon />Resource : "Oxygen"</p>
                    <p><AddIcon />Unit : 4</p>
                    <p><PhoneIcon /> Number : 7565905127</p>
                    <p><LocationOnIcon />Location: Lucknow</p>
                </div>
                </div>
                <div className="contact-div">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard;

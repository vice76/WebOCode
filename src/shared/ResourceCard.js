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
                <img src={OxygenLogo} alt="logo-type"/>
                </div>
                <p>04 June 2021</p>
                </div>
                <div className="details-div">
                    <p><AccountCircleIcon className="icons"/><span>Name :</span> {props.name}</p>
                    <p><LocalMallIcon className="icons"/><span>Resource :</span> {props.type}</p>
                    <p><AddIcon className="icons"/><span>Unit :</span> {props.quantity}</p>
                    <p><PhoneIcon className="icons"/> <span>Number :</span> {props.number}</p>
                    <p><LocationOnIcon className="icons"/><span>Location :</span> {props.location}</p>
                    <button>Contact</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard;

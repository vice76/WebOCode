import React from "react";
import "../../scss/components/_covidcard.scss";
import Virus from '../../assets/virus.png';

const Covidcard = ({data}) => {
  return (
    <div className="resource-container">
            <div className="container">
                <div className="details">
                <div className="icon-div">
                <div className="icon">
                <img src={Virus} alt="logo-type"/>
                </div>
                </div>
                <div className="details-div">
                    <p><span>City :</span> {data.region}</p>
                    <p><span>Active :</span> {data.activeCases}</p>
                    <p><span>Recovered :</span> {data.recovered}</p>
                    <p><span>Deceased :</span> {data.deceased}</p>
                    <p><span>Infected :</span> {data.totalInfected}</p>
                </div>
                </div>
            </div>
        </div>
  );
};

export default Covidcard;

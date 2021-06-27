import React from "react";
import "../../scss/components/_covidcard.scss";

const Covidcard = ({data}) => {
  return (
    <div className="covid-case-card">
      <h3 className="region">{data.region}</h3>
      <div className="card-row">
        <div className="card-row__content-left">
          <p>Active</p>
          <h4 >{data.activeCases}</h4>
        </div>
        <div className="card-row__content-right">
          <p>Recovered</p>
          <h4 >{data.recovered}</h4>
        </div>
      </div>
      <div className="card-row">
        <div className="card-row__content-left">
          <p>Deceased</p>
          <h4 >{data.deceased}</h4>
        </div>
        <div className="card-row__content-right">
          <p>Infected</p>
          <h4 >{data.totalInfected}</h4>
        </div>
      </div>
    </div>
  );
};

export default Covidcard;

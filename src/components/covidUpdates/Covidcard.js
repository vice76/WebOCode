import React from "react";
import "../../scss/components/_covidcard.scss";

const Covidcard = ({data}) => {
  return (
    <div className="covidcard">
      <h3 className="place">{data.region}</h3>
      <div className="covid-row">
        <div className="covid-row__content-left">
          <p>Active</p>
          <h4 className="color-active">{data.activeCases}</h4>
        </div>
        <div className="covid-row__content-right">
          <p>Recovered</p>
          <h4 className="color-recover">{data.recovered}</h4>
        </div>
      </div>
    </div>
  );
};

export default Covidcard;

import React from "react";
import "../../scss/components/_covidcard.scss";

const Covidcard = () => {
  return (
    <div className="covidcard">
      <h3 className="place">xyz</h3>
      <div className="covid-row">
        <div className="covid-row__content-left">
          <p>Active</p>
          <h4 className="color-active">xyz</h4>
        </div>
        <div className="covid-row__content-right">
          <p>Recovered</p>
          <h4 className="color-recover">xyz</h4>
        </div>
      </div>
    </div>
  );
};

export default Covidcard;

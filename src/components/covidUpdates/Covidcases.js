import React from 'react';
import Covidcard from './Covidcard';
import "../../scss/components/_covidcases.scss";

const Covidcases = () => {
    const covidData = [
        {
            region: "Andaman and Nicobar Islands",
            activeCases: 105,
            newInfected: -4,
            recovered: 7049,
            newRecovered: 15,
            deceased: 126,
            newDeceased: 0,
            totalInfected: 7280
        },
        {
            region: "Andhra Pradesh",
            activeCases: 75134,
            newInfected: -4879,
            recovered: 1732948,
            newRecovered: 10567,
            deceased: 12052,
            newDeceased: 53,
            totalInfected: 1820134
        },
        {
            region: "Arunachal Pradesh",
            activeCases: 2849,
            newInfected: -40,
            recovered: 28934,
            newRecovered: 326,
            deceased: 155,
            newDeceased: 4,
            totalInfected: 31938
        },
        {
            region: "Assam",
            activeCases: 41184,
            newInfected: 475,
            recovered: 421378,
            newRecovered: 2906,
            deceased: 4028,
            newDeceased: 34,
            totalInfected: 466590
        },
        {
            region: "Bihar",
            activeCases: 4360,
            newInfected: -412,
            recovered: 704075,
            newRecovered: 813,
            deceased: 9514,
            newDeceased: 9,
            totalInfected: 717949
        },
        {
            region: "Chandigarh",
            activeCases: 486,
            newInfected: -21,
            recovered: 59917,
            newRecovered: 58,
            deceased: 797,
            newDeceased: 3,
            totalInfected: 61200
        },
    ];
    return (
        <div className="covid-cases">
            {covidData.map((recordData, index) => (
                <div key={index} className="card-container">
                    <Covidcard data={recordData}/>
                </div>
            ))}
        </div>
    );
};

export default Covidcases;
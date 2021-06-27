import React,{useEffect,useState} from 'react';
import Covidcard from './Covidcard';
import "../../scss/components/_covidcases.scss";

const Covidcases = () => {
    const [covidData,setcovidData]=useState([]);

    const getCovidData =async () => {
        try{
            const res =await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST');
            const actualData= await res.json();
            console.log(actualData.regionData);
            setcovidData(actualData.regionData);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

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
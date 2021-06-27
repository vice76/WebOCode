import React,{useEffect,useState} from 'react';
import Covidcard from './Covidcard';
import "../../scss/components/_covidcases.scss";

const Covidcases = () => {
    const [covidData,setcovidData]=useState([]);
    const [error, setError] = useState(true);

    const getCovidData =async () => {
        try{
            const res =await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST');
            const actualData= await res.json();
            setcovidData(actualData.regionData);
        }catch(err){
            setError(false);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div>
        {
            error ? 
            <div className="covid-cases">
            {covidData.map((recordData, index) => (
                <div key={index} className="card-container">
                    <Covidcard data={recordData}/>
                </div>
            ))}
            </div>
            :
            <div className="error-message"><h1>Cannot Fetch Data , Something went wrong</h1></div>    
        }  
        </div>
    );
};

export default Covidcases;
import React from 'react';
import Virus from '../../assets/virus.png';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="container">
                <div className="container-left">
                   <h1>Save A Life</h1>
                   <p>Connect to help others</p>
                   <div>
                       <button>Add Resources</button>
                       <button>View Resources</button>
                   </div>
                </div>
                <div className="container-right">
                    <img src={Virus} alt="virus"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;

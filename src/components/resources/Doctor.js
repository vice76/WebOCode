import React from 'react';
import Doctor from '../../assets/Doctor.png';

const Doctor = () => {
    return (
        <div className="Doctor-div">
            <div className="container">
                <div className="container-left">
                    <img src={Doctor} alt="doctor-png" />
                </div>
                <div ClassName="container-right">
                    <p>“We can change the world and make it a better place. It is in our hands to make a difference.” Nelson Mandela</p>
                </div>
            </div>
        </div>
    )
}

export default Doctor;

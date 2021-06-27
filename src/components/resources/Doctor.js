import React from 'react';
import DoctorPng from '../../assets/Doctor.png';

const Doctor = () => {
    return (
        <div className="Doctor-div">
            <div className="container">
                <div className="container-left">
                    <img src={DoctorPng} alt="doctor-png" />
                </div>
                <div className="container-right">
                    <p>We can change the world and make it a better place. It is in our hands to make a difference <br/> -Nelson Mandela</p>
                </div>
            </div>
        </div>
    )
}

export default Doctor;

import React from 'react';
import Vacc1 from '../../assets/Vacc1.jpg';
import Vacc2 from '../../assets/vacc2.jpg';

const Information = () => {
    return (
        <div>
            <div className="about-div">
        <div className="container-one">
        <div className="about-left">
            <img src={Vacc1} className="about-logo" alt="website-logo"/>
        </div>
        <div className="aboutsanjeevni">
                <h3>Vaccination is the administration of a vaccine to help the immune system develop protection from a disease.
                </h3>
        </div>
        </div>

        <div className="container-one">
            <div className="aboutsanjeevni2">
                <h3>
                Covid-19 vaccination: India has administered over 27 crore doses so far
                </h3>
            </div>
            <div className="about-right">
                <img src={Vacc2} alt="helpingHandLogo" />
            </div>
        </div>
        </div>

        <div className="cowin-button">
            <h3>Register youself on Cowin</h3>
            <button>Register</button>
        </div>

        </div>
    )
}

export default Information

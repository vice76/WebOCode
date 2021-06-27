import React from 'react'
import LogoIC from '../../assets/LogoIC.png';
import HelpingHand from '../../assets/helpingHand.png';

const About=()=> {
    return (
        <div className="about-div">
        <div className="container-one">
        <div className="about-left">
            <img src={LogoIC} className="about-logo" alt="website-logo"/>
        </div>
        <div className="aboutsanjeevni">
                <h3>Sanjeevni is a initiative to help people by providing
                     them a platform to find the availability of medicines, injections , 
                    plasma and oxygen in their city. 
                </h3>
        </div>
        </div>

        <div className="container-one">
            <div className="aboutsanjeevni2">
                <h3>
                We also request people if they have any valid resource
                     of medical needs mentioned above can put them up.
                      Your one help can save millions life.
                    Stay safe , Stay healthy
                </h3>
            </div>
            <div className="about-right">
                <img src={HelpingHand} alt="helpingHandLogo" />
            </div>
        </div>
        </div>
    )
}

export default About

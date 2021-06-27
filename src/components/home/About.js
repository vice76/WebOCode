import React from 'react'
import AboutLeft from '../../assets/aboutleft.png';
import LogoIcon from '../../assets/LogoIcon.png';
import Reactangleabout from "../../assets/Rectangle-about.png";

const About=()=> {
    return (
        <div className="about-left">
            <img  src={AboutLeft} alt="about-left" />
            <div className="question">
                <h3>What Is Sanjeevni ?</h3>
            </div>
            <img className="about-right" src={Reactangleabout} alt="about-info" style={{position: "relative"}}/>
            <div className="aboutsanjeevni">
                <h3>Sanjeevni is a initiative to help people by providing
                     them a platform to find the availability of medicines, injections , 
                    plasma and oxygen in their city. 
                    We also request people if they have any valid resource
                     of medical needs mentioned above can put them up.
                      Your one help can save millions life.
                    Stay safe , Stay healthy</h3>
            </div>
        </div>
    )
}

export default About

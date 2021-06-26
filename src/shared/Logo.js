import React from 'react';
import LogoIcon from '../assets/LogoIcon.png';
import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <img className={classes.Logo} src={LogoIcon} slt="Website-Logo"/>
    )
}

export default Logo;

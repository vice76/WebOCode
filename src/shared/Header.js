import React, { useState } from 'react';
import classes from "./Navbar.module.css";
import Logo from './Logo';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navbar, setNavabr] = useState(false);

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setNavabr(true);
    } else if (window.scrollY < 100) {
      setNavabr(false);
    }
  };

  let navbarActiveclass = [classes.Navbar, null];

  if (navbar === true) {
    navbarActiveclass = [classes.Navbar, classes.active];
  }

  window.addEventListener("scroll", boxShadowHandler);
    return (
        <header>
            <div className={navbarActiveclass.join(" ")}>
                <div className={classes.Container}>
                    <div className={classes.NavbarLeft}>
                    <NavLink to="/" className={classes.NavbarLogo}>
                    <Logo />
                    </NavLink>
                    </div>
                    <div className={classes.NavbarRight}>
                        <ul className={classes.NavigationItems}>
                           <li className={classes.NavigationItem}>
                            <NavLink to="/" exact activeClassName={classes.selected}>
                            Home
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/resources" activeClassName={classes.selected}>
                            Resources
                            </NavLink>  
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/covidupdates" activeClassName={classes.selected}>
                            Covid Updates
                            </NavLink>
                            </li>
                            <li className={classes.NavigationItem}>
                            <NavLink to="/vaccination" activeClassName={classes.selected}>
                            Vaccination
                            </NavLink>
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Header;

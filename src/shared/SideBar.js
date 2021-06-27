import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./SideDrawer.module.css";
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import Logo from "./Logo";

const SideDrawer = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [shadow, setShadow] = useState(false);

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else if (window.scrollY < 100) {
      setShadow(false);
    }
  };

  let shadowActiveclass = [classes.SideDrawer, null];

  if (shadow === true) {
    shadowActiveclass = [classes.SideDrawer, classes.active];
  }

  window.addEventListener("scroll", boxShadowHandler);

  const showSidebar = () => setSidebar(!sidebar);

  const navMenuActive = [classes.navMenu, classes.navActive];
  return (
    <div className={classes.Container}>
      <div className={shadowActiveclass.join(" ")}>
        <DehazeIcon onClick={showSidebar} className={classes.menuBars}/>
        &nbsp;
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={sidebar ? navMenuActive.join(" ") : classes.navMenu}>
        <ul className={classes.navMenuItems} onClick={showSidebar}>
          <li className={classes.SideDrawerToggle}>
            <Link to="#" className={classes.menuBars}>
              <CloseIcon  className={classes.close}/>
            </Link>
          </li>
          <li className={classes.navText}>
            <NavLink
              to="/"
              exact
              className={classes.menuBars}
              activeClassName={classes.selected}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className={classes.navText}>
            <NavLink
              to="/resources"
              className={classes.menuBars}
              activeClassName={classes.selected}
            >
              <span>Resources</span>
            </NavLink>
          </li>
          <li className={classes.navText}>
            <NavLink
              to="/covidupdates"
              className={classes.menuBars}
              activeClassName={classes.selected}
            >
              <span>Covid Updates</span>
            </NavLink>
          </li>
          <li className={classes.navText}>
            <NavLink
              to="/vaccination"
              className={classes.menuBars}
              activeClassName={classes.selected}
            >
              <span>Vaccination</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;

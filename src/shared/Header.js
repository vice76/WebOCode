import React from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header>
            <div className={navbarActiveclass.join(" ")}>
                <div className="container">
                    <div className="NavbarLeft">
                        <Logo ClassName="NavbarLogo"/>
                    </div>
                    <div className="NavbarRight">
                        <ul className="NavigationItems">
                            <li className="NavigationItem">
                            Home
                            </li>
                            <li className="NavigationItem">
                            Resources
                            </li>
                            <li className="NavigationItem">
                            Covid Updates
                            </li>
                            <li className="NavigationItem">
                            Vaccination
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Header;

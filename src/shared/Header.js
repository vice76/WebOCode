import React from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header>
            <div className={navbarActiveclass.join(" ")}>
                <div className="container">
                    <div className="NavbarLeft">
                        <Logo />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
    const [toogle, setToogle] = useState(false); // [false, function]
    const handleToogle = () => {
        setToogle(!toogle);
    };
    return (
        <div className="header">
            <div className="header-logo">
                <Icon icon="logos:youtube-icon" />
            </div>
            <div className="header-menu">
                <ul>
                    <li className="header-menu__item">Home</li>
                    <li className="header-menu__item">Services</li>
                    <li className="header-menu__item">About</li>
                    <li className="header-menu__item">Contact</li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <div className={`header-toogle ${toogle ? 'active' : ''}`} onClick={handleToogle}>
                    <div className={`header-toogle-spinner ${toogle ? 'active' : ''}`}></div>
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
};

export default Header;

import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <p className="welcome-message"><strong>Welcome to the Harvard Charity Firm. We are a non-profit organisation. Recently we are orgainsing a fest for orphan and indigent worldwide. We want to expand our funding to the whole world for making a beautiful world.</strong></p>
            <h3 className="funding-cost">Expected Funding: $50M</h3>
        </div>
    );
};

export default Header;
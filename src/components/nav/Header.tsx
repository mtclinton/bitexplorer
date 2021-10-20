import * as React from "react";
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

function Header() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <Logo width={120}/>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
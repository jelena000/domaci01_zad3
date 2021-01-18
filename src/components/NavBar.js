import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const NavBar = () => {

    return (
        <div style={{ height: 60, borderBottom: '1px solid gray'}}>
            <nav>
                <div className="nav-wrapper" style={{padding: 20}}>
                    <div style={{ float: 'left'}}>
                        <Link to="/" className="brand-logo">
                            <img src={logo} style={{ width: 60, height: 30}}/>
                        </Link>

                    </div>
                    <div style={{ float: 'right'}}>
                        <Link to="/add-post" className="brand-logo">Dodaj post</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavBar;
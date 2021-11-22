import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <Fragment>
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <span className="pure-menu-heading">Products</span>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected">
                        <Link to="/" className={"pure-menu-link"}>Home</Link>
                    </li>
                    <li className="pure-menu-item pure-menu-selected">
                        <Link to="/add" className={"pure-menu-link"}>Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    </Fragment>
)

export default Navbar;

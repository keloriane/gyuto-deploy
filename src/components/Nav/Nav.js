import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Info from "../Info/Info";
import Gallery from "../Gallery/Gallery";


const Nav = () => {
    return(
        <div className="nav--container">
            <Router>
            <Link to={Gallery()}>Gallery</Link>
            <Link to={Info}>Info</Link>

            </Router>
        </div>
    )
}
export default Nav;
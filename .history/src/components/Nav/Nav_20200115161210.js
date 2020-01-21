import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Info from "../Info/Info";
import Gallery from "../Gallery/Gallery";
import "./nav.scss"
import Music from '../Music/Music';


const Nav = () => {
    return (
        <div className="nav--container">
            <div className="nav-items">
                
            <Router>
                <Link to="#/slider">Gallery</Link>
                <Link to="#/info">Info</Link>
                <Link to="#/music">Music</Link>

            </Router>
            </div>
        </div>
    )
}
export default Nav;

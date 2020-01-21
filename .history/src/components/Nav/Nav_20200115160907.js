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
        <Switch>
                <Link to={Gallery()}>Gallery</Link>
        </Switch>
        <Switch>
        <Link to={Info()}>Info</Link>
        </Switch>
        <Switch>
        <Link to={Music()}>Music</Link>
        </Switch>
 
               
               

            </Router>
            </div>
        </div>
    )
}
export default Nav;

import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Info from "../Info/Info";
import Gallery from "../Gallery/Gallery";
import "./nav.scss"
import Music from '../Music/Music';


const Nav = () => {
    return (
        <>
        <div className="nav--container">
            <div className="nav-items">
                
            <Router>
                <Link to="">Gallery</Link>
                <Link to="">Info</Link>
                <Link to="">Music</Link>

            </Router>
            </div>
        </div>
        <Switch>
            <Route path="/slider">
                <Gallery/>
            </Route>
            <Route path="/info">
                <Info/>
            </Route>
            <Route path="/music">
                <Music/>
            </Route>
        </Switch>
        </>
    )
}
export default Nav;

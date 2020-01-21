import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
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
        </Router>
         

            
            </div>
        </div>
        </>
    )
}
export default Nav;

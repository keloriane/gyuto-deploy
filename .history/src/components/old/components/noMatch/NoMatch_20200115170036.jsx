import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';


class NoMatch extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <style>{'body { background-color: #f5f5f5 !important; } a.itemsColor{color: black} .cursor{display:none}'}</style>
                    <title>404</title>
                </Helmet>
               
            </Fragment>

        );
    }
}
export default NoMatch;

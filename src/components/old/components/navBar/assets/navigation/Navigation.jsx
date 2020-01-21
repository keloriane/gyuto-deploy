import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";



class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      selectOpen: false
    };
    this.openSelect = this.openSelect.bind(this);
  }

  toggleMenu(state) {
    this.setState({ menu: !this.state.menu })
  }

  openSelect() {
    this.setState({
      selectOpen: !this.state.selectOpen
    })
  }


  render() {
    const { i18n } = this.props;
    return (
      <Fragment>
        <Media query="(max-width: 700px)" render={() => (
          <nav className="nav-mobile">
            <div className="backgroundMobile" />
            <div className={this.state.menu ? 'open' : ''}>
              <label htmlFor="menu-toggler-input" className="menu-toggler" onClick={() => this.toggleMenu()}>
                <span className="menu-toggler__line"></span>
                <span className="menu-toggler__line"></span>
                <span className="menu-toggler__line"></span>
              </label>
            
            </div>
          </nav>
        )} />

        <Media query="(min-width: 701px)" render={() => (
          <nav>
            <ul className="menu">
              <li><Link to="/info" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">Music</Link></li>
              <li><Link to="/music" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">Slider</Link></li>
              <li><Link to="/images" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">Docs</Link></li>
              <li><Link to="/events" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">Events</Link></li>
              {/* Pour afficher le menu FR/EN, il faut enlever le display none ci-dessous, ensuite activer le padding-right: 40px du .menu li&:nth-last-child(2) dans _navigation.scss */}
              <li className="itemsColor" style={{ display: "none" }}>
                <a onClick={() => i18n.changeLanguage('fr')} data-snap-scale="3" className="itemsColor snapCursor homelinkhover js-click">FR</a>
                <a onClick={() => i18n.changeLanguage('en')} data-snap-scale="3" className="itemsColor snapCursor homelinkhover js-click">EN</a>
              </li>
            </ul>
          </nav>
        )} />
      </Fragment>
    )
  }
}

export default Navigation;
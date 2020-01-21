// import React from 'react';
// import './App.css';
// import Gallery from './components/Gallery/Gallery';
// import Cursor from "./components/Cursor/Cursor"
// import Info from './components/Info/Info';
// import Loader from './components/Loader/Loader';
// import Mandala from './components/old/components/pageHome/PageHome.jsx';
// import Music from './components/Music/Music';
// import { HashRouter, Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
// function App() {
//   return (
//     <div className="App" id="App">

//       <Cursor />
//       <HashRouter basename="/">
//       <Nav />
//         <Switch>
//           <Route exact path="/info" component={Info} />
//           <Route path="/slider" component={Gallery} />
//           <Route path="/loader" component={Loader} />
//           <Route path="/music" component={Music} />
//           <Route path="/" component={Mandala} />
//         </Switch>
//       </HashRouter>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { Grid } from "react-flexbox-grid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PageHome from "./components/old/components/pageHome/PageHome";
import PageEvents from "./components/old/components/pageEvents/PageEvents";
import NavBar from "./components/old/components/navBar/NavBar";
import Footer from "./components/old/components/footer/Footer";
import PageImages from "./components/old/components/pageImages/PageImages";
import PageInfo from "./components/old/components/pageInfo/PageInfo";
import PageMusique from "./components/old/components/pageMusique/PageMusique";
import PageDocList from "./components/old/components/pageDocList/PageDocList";
import PageEventDetails from "./components/old/components/pageEventDetails/PageEventDetails";
import PageImagesDetails from "./components/old/components/pageImagesDetails/PageImagesDetails";
import ModalPlayVideo from "./components/old/components/modalPlayVideo/ModalPlayVideo";
import ModalPlayVideoIntroduction from "./components/old/components/modalPlayVideo/ModalPlayVideoIntroduction";
import { Helmet } from 'react-helmet';
import NoMatch from "./components/old/components/noMatch/NoMatch";
import { withNamespaces } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      visible: false,
      language: true,
      linkIntroduction: '',
      visibleIntroduction: false,
    }
  }

  onOpenModal(params) {
    this.setState({ link: params, visible: true })
  }

  onCloseModal() {
    this.setState({ link: '', visible: false })
  }

  onOpenModalIntroduction(params) {
    this.setState({ linkIntroduction: params, visibleIntroduction: true })
  }

  onCloseModalIntroduction() {
    this.setState({ linkIntroduction: '', visibleIntroduction: false })
  }

  changeLanguage() {
    this.setState({
      language: !this.state.language
    })
  }



  render() {
    return (
      <div className="App">
        <Router>
                  
          <Grid fluid>
          <NavBar changeLanguage={this.changeLanguage.bind(this)} {...this.state} />
          <ModalPlayVideo
            onCloseModal={this.onCloseModal.bind(this)}
            link={this.state.link}
            visible={this.state.visible}
          />
          <ModalPlayVideoIntroduction
            onCloseModalIntroduction={this.onCloseModalIntroduction.bind(this)}
            link={this.state.linkIntroduction}
            visible={this.state.visibleIntroduction}
          />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" render={(props) =>
                    <PageHome {...props}
                      onOpenModal={this.onOpenModal.bind(this)}
                      onOpenModalIntroduction={this.onOpenModalIntroduction.bind(this)}
                    />}
                  />
                  <Route path="/info" component={PageInfo} />
                  <Route path="/music" component={PageMusique} />
                  <Route exact path="/events" component={PageEvents} />
                  <Route path="/events/:id" component={PageEventDetails} />
                  <Route exact path="/images" component={PageImages} />
                  <Route path="/images/:id" component={PageImagesDetails} />
                  <Route path="/doclist" render={(props) => <PageDocList {...props} onOpenModal={this.onOpenModal.bind(this)} />} />
                  <Route component={NoMatch} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Footer onOpenModal={this.onOpenModal.bind(this)} />

        </Grid>
        {this.state.visible &&
          <Helmet>
            <style>{'.light, .shadow, .lightclick, .cursor {display: none}'}</style>
          </Helmet>
        }
        {this.state.visibleIntroduction &&
          <Helmet>
            <style>{'.light, .shadow, .lightclick, .cursor {display: none}'}</style>
          </Helmet>
        }
        </Router>
      </div>
    );
  }
}

export default App; 
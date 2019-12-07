import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Cursor from "./components/Cursor/Cursor"
import Info from './components/Info/Info';
import Loader from './components/Loader/Loader';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App" id="App">
      <Cursor />
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/info" component={Info} />
          <Route path="/slider" component={Gallery} />
          <Route path="/loader" component={Loader} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

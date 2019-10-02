import React from 'react';
import './App.scss';
import {About} from './About'
import {Contact} from './Contact'
import './Main'

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logoVisible: false,
      slideNumber: 0
    }
  }

  setSlideNumber = (number) => {
    this.setState({
      slideNumber: number
    })
  }

  makeLogoVisible = () => {
    this.setState({
      logoVisible: true
    })
  }

  makeLogoInvisible = () => {
    this.setState({
      logoVisible: false
    })
  }

  handleReset = () => {
    this.setState({
      slideNumber: 0,
      logoVisible: false
    })
  }

  render() {

    return (

      <Router>
        <div className="top-bar">
          <div className="about"><Link to="/about">about</Link></div>
          {!this.state.logoVisible ? "" : <h1><Link onClick={this.handleReset} to={{pathname:"/"}}>bethany wellik</Link></h1>}
          <div className="contact"><Link to="/contact">contact</Link></div>
      </div>
        <Switch>
          <Route path="/about">
            <About test={this.makeLogoVisible}></About>
          </Route>
          <Route path="/contact">
            <Contact test={this.makeLogoVisible} />
          </Route>
          <Route path="/">
            <Main setSlideNumber={this.setSlideNumber} slideNumber={this.state.slideNumber} makeLogoInvisible={this.makeLogoInvisible} makeLogoVisible={this.makeLogoVisible}></Main>
          </Route>
        </Switch>

      </Router>
    );
  }

}


export default App;

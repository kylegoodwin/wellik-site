import React from 'react';
import './App.scss';
import {About} from './About'
import {Contact} from './Contact'
import './Main'

import { HashRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Main from './Main';

import Icon from '@mdi/react'
import { mdiInstagram,mdiLinkedin } from '@mdi/js'

const bottomBar = (<div className="bottom-bar">
<div>

<p>
  387 Grand Street <br></br>
    New York, NY 10003
  </p>

  <a href="https://www.linkedin.com/in/bethany-wellik-a0372b59">
  <Icon path={mdiInstagram}
  title="User Profile"
  size={1}
  color="#f0e1cf"/>
  </a>

  <a href="https://www.linkedin.com/in/bethany-wellik-a0372b59">
   <Icon path={mdiLinkedin}
  title="User Profile"
  size={1}
  color="#f0e1cf"/>
  </a>

</div>
  </div>)

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
          <div id="about"><NavLink activeClassName='active-link' to="/about">about</NavLink></div>
          {!this.state.logoVisible ? "" : <h1><Link onClick={this.handleReset} to={{pathname:"/"}}>bethany wellik</Link></h1>}
          <div id="contact"><NavLink activeClassName='active-link' to="/contact">contact</NavLink></div>
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
        {bottomBar}
      </Router>
      
    );
  }

}


export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import  Home  from "./components/layout/Home";
import  Contact  from "./components/layout/Contact";
import  Howk  from "./components/layout/Howk";
import  Resume  from "./components/layout/Resume";

import  Project  from "./components/layout/Project";
import  About  from "./components/layout/About";
import  Blog  from "./components/layout/Blog";
import  Skills  from "./components/layout/Skills";
import './assets/css/style.css';
import "./assets/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div >
          <Router>
            <Header/>
              <Switch>
                  <Route exact component={Home} path="/"/>
                  <Route component={About} path="/about"/>
                  <Route component={Blog} path="/blog"/>

                  <Route component={Resume} path="/resume"/>
                  <Route component={Contact} path="/contact"/>
                  <Route component={Project} path="/project"/>
                  <Route component={Skills} path="/skills"/>
                  <Route component={Howk} path="/howk"/>
              </Switch>
            <Footer/>
          </Router> 
      </div>
    );
  }
}

export default App;
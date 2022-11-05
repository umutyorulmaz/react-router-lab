import logo from './logo.svg';
import './App.css';
import {Browser,Routes, BrowserRouter, Route, Switch, Link} from "react-router-dom";
import { Component } from 'react';
import  Home from "./components/home";
import  About from "./components/about";
import  Contact from "./components/contact";
import  Error from "./components/error";
import  Student from "./components/student";
import customHistory from "./history";
//import Redirect from "./components/redirect";



class App extends Component {
  render () {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
          <li>
              <Link to="/redirect">Redirect</Link> 
            </li>
            <li>
              <Link to="/">home</Link> 
            </li>
            <li>
              <Link to="/about">about</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link> 
            </li>
            <li>
              <Link to="/student">Student</Link> 
            </li>

          </ul>
        
          <Routes>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/redirect" component={Redirect} />
            <Route path="/about" component={About} />
            <Route component={Error} />
            <Route path="/student/:studentname/:studentnumber?" component={Student} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

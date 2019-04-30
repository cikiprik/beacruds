import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Create from './components/create.component';
import Update from  './components/update.component';
import Index from './components/index.component';

class App extends Component {
  render() {
      return (
          <Router>
              <div className={"container"}>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <Link to={"/"} className="navbar-brand">React CRUD With MongoDB</Link>
                      <div className="collapse navbar-collapse" id="navbarSupportContent">
                          <ul className="navbar-nav mx-auto">
                              <li className="nav-item">
                                  <Link to="/" className="nav-link">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/create" className="nav-link">Create</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/index" className="nav-link">Index</Link>
                              </li>
                          </ul>
                      </div>
                  </nav> <br/>
                  <h2>CRUDS</h2>
                  <switch>
                      <Route exact path="/create" component={Create}/>
                      <Route path="/update/:id" component={Update}/>
                      <Route path="/index" component={Index}/>
                  </switch>


              </div>
          </Router>

    );
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

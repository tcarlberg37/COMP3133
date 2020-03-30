import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Student from './components/Student';
import history from './components/History';
import Redirect from './components/Redirect';


const NewRoute = () => {
  return (
    <div><p>New Route</p></div>
  );
}

function App() {
  return (
    <BrowserRouter history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/student/:studentname/:studentno?" component={Student} />
        <Route path="/redirect" component={Redirect} />
        <Route component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

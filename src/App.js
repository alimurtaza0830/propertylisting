import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';


import './App.css';

function App() {
  return (
  	<Switch>
  		<Route path="/about" component={AboutPage} />
  		<Route path="/home" component={HomePage} />
  		<Route path="/not-found" component={NotFound} />
	  	<Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
  	</Switch>
  );
}

export default App;

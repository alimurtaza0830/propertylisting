import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import BaseLayout from './layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ItemDetails from './components/itemdetails';

import './App.css';

function App() {
  return (
  		<BaseLayout>
		  	<Switch>
		  		<Route path="/about" component={AboutPage} />
		  		<Route path="/home" component={HomePage} />
		  		<Route path="/not-found" component={NotFound} />
		  		<Route exact path="/itemlist/:id" component={ItemDetails} />
			  	<Redirect from="/" exact to="/home" />
		        <Redirect to="/not-found" />
		  	</Switch>
  		</BaseLayout>
  );
}

export default App;

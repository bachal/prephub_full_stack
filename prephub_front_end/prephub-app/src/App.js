import logo from './logo.svg';
import './App.css';
import All_countries from './components/All_countries';
import All_states from './components/All_states';
import All_cities from './components/All_cities';
import Working from './components/Working';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'



function App() {

  return (
    <div className="App">

      <Router>
        {/* <Route exact path="/" render={() => {return (<Redirect to="/countries"/> ) }}/>*/}
        <Route exact path="/"><Redirect to="/countries" /></Route>
        <Route exact path="/countries" component={All_countries}></Route>
        <Route exact path="/:id/states" component={All_states}></Route>
        <Route exact path="/:country/:state/cities" component={All_cities}></Route>
        <Route exact path="/Working" component={Working}></Route>

      </Router>
    </div>

  );
}

export default App;

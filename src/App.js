import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './shared/Header';
import Home from './components/home/Home';
import Resources from './components/resources/Resources';
import CovidUpdates from './components/covidUpdates/CovidUpdates';
import Vaccination from './components/vaccination/Vaccination';

function App() {
  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;

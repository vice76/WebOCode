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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/covidupdates" component={CovidUpdates} />
        <Route path="/vaccination" component={Vaccination} />
      </Switch>
    </div>
  );
}

export default App;

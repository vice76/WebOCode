import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './shared/Header';
import Home from './components/home/Home';
import Resources from './components/resources/Resources';
import CovidUpdates from './components/covidUpdates/CovidUpdates';
import Vaccination from './components/vaccination/Vaccination';
import SideBar from './shared/SideBar';
import Covidcases from './components/covidUpdates/Covidcases';

class App extends Component {
  // sideDrawerClosedHandler = () => {
  //   this.setState({ showSideDrawer: false });
  // };

  // sideDrawerToggleHandler = () => {
  //   this.setState((prevState) => {
  //     return { showSideDrawer: !prevState.showSideDrawer };
  //   });
  // };

  render() {
  return (
    <div className="App">
      {/* <Header />
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/covidupdates" component={CovidUpdates} />
        <Route path="/vaccination" component={Vaccination} />
      </Switch> */}
      <Covidcases/>
    </div>
  );
}
}

export default App;

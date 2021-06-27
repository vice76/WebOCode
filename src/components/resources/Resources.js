import React from 'react';
import Heading from './Heading';
import { Switch, Route } from "react-router-dom";
import Oxygen from './Oxygen';
import Medicine from './Medicine';
import Plasma from './Plasma';
import Doctor from './Doctor';

const Resources = () => {
    return (
        <div>
            <Heading />
            <Switch>
            <Route path="/resources/oxygen" component={Oxygen} />
            <Route path="/resources/medicine" component={Medicine} />
            <Route path="/resources/plasma" component={Plasma} />
            </Switch>
            <Doctor />
        </div>
    )
}

export default Resources;

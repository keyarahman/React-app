
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import history from './history';
import LogoPosition from './LogoPosition';
import ApplyMethod from './ApplyMethod';
import ConfigureLogo from './configureLogo';
import ConfigureLogoForm from './configureLogoForm';
import Homepage from './HomePage';
import ArtWork from './artWork';
import Application from "./Application";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/LogoPosition" exact component={LogoPosition} />
                    <Route path="/ApplyMethod" exact component={ApplyMethod} />
                    <Route path="/ArtWork" exact component={ArtWork} />
                    <Route path="/Application" exact component={Application} />
                    <Route path="/ConfigureLogo" exact component={ConfigureLogo} />
                    <Route path="/ConfigureLogoForm" exact component={ConfigureLogoForm} />
             
                </Switch>
            </Router>
        )
    }
}
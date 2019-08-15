import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import HomePage from './homepage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository" component={Repository} />
    </Switch>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReceitaView from './pages/receita-view';

export default (props) => (
  <Switch>
    <Route path='/' component={ReceitaView} />
  </Switch>
)

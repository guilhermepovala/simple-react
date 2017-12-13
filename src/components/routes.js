import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'

export default (props) => (
  <Switch>
    <Route path='/' component={Home} />
  </Switch>
)

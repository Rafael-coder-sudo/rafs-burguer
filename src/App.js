import React from 'react'
import './app.css'

import { Router, Route, hashHistory, Redirect } from 'react-router'

import Cliente from './screens/dadosCliente/Cliente'
import Finally from './screens/finnally/Finally'
import Home from './screens/HomePage/Home'
import Lanches from './screens/Lanches/Lanches'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/cardapio' component={Lanches} />
    <Route path='/cliente' component={Cliente} />
    <Route path='/finnaly' component={Finally} />

  </Router>
)
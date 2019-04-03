import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { hot } from 'react-hot-loader'

import Questionary from 'components/Questionary'
import Configuration from 'components/Configuration'
import Signin from 'components/Signin'
import List from 'components/List'

import style from './App.style'

const App = () => (
  <div className={style.App}>
    <Switch>
      <Route exact path="/" component={Configuration} />
      <Route path="/questions" component={Questionary} />
      <Route path="/signin" component={Signin} />
      <Route path="/list" component={List} />
    </Switch>
  </div>
)

export default hot(module)(App)

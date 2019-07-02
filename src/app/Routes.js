import React from 'react'
// import React, { Fragment, useState, useContext, useEffect } from 'react'
import { BrowserRouter, Route, HashRouter, Switch, Redirect, withRouter } from 'react-router-dom'

import WebScreen from './screens/web/WebScreen'
import AdminScreen from './screens/admin/AdminScreen'
import AuthScreen from './screens/auth/AuthScreen'

const Routes = () => (
  <BrowserRouter>
    <HashRouter>
      <Switch>
        <Route path='/web' component={WebScreen} />
        <Route path='/app' component={AdminScreen} />
        <Route path='/auth' component={AuthScreen} />
        <Route path="/" render={() => <Redirect to="/app" />} />
      </Switch>
    </HashRouter>
  </BrowserRouter>
)

export default withRouter(Routes)

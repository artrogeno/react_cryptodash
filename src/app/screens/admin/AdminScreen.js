import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import AdminLayout from 'app/layouts/admin/AdminLayout'
import DashScreen from 'app/screens/admin/DashScreen/DashScreen'
import ReportsScreen from 'app/screens/admin/ReportsScreen/ReportsScreen'

const AdminScreen = () => (
  <AdminLayout>
    <Switch>
      <Route path='/app/reports' component={ReportsScreen} />
      <Route path='/app/dash' component={DashScreen} />
      <Route path="/app" render={() => <Redirect to="/app/dash" />} />
    </Switch>
  </AdminLayout>
)

export default AdminScreen


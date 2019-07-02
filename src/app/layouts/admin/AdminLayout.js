import React, { Fragment, useState } from 'react'
// import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { getStorage } from 'app/utils/services/session.storage'
import Header from 'app/components/ui/header/admin/Header';

import 'assets/scss/admin/bootstrap-cryptodash.scss'

const AdminLayout = (props) => {

  const [app, setApp] = useState({
    title: getStorage('app-title')
  })

  // useEffect(() => {
  //   let title = getStorage('app-title')
  //   // console.log(title)
  //   // setApp({ title })
  // });

  return (
    <Fragment>
      <Header app={app} />
      <main className="app-main text-center">
        <span>Test</span>
        {props.children}
      </main>
    </Fragment>
  )
}

export default withRouter(AdminLayout)

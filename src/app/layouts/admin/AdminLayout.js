import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { getStorage, setStorage } from 'app/utils/services/session.storage'
import { LayoutContext } from 'app/contexts/LayoutContext/LayoutContext'
import Header from 'app/components/ui/header/admin/Header';
import Sidebar from 'app/components/ui/Sidebar/Sidebar';

import 'assets/scss/admin/bootstrap-cryptodash.scss'

const AdminLayout = (props) => {
  const { layout, changeLayout } = useContext(LayoutContext)
  const [layouts, setLayouts] = useState({
    layout: layout,
    changeLayout: () => {
      let updateLayout = { ...layouts }
      updateLayout.layout = getStorage('ss-layout')
      setLayouts(updateLayout)
    }
  })

  useEffect(() => {
    let updateLayout = { ...layouts }
    if(updateLayout.layout.location.pathname !== props.location.pathname) {
      updateLayout.layout.match = props.match
      updateLayout.layout.location = props.location
      updateLayout.layout.history = props.history
      setStorage( 'ss-layout', updateLayout.layout )
      changeLayout()
    }
  }, [props, layouts, changeLayout])

  return (
    <LayoutContext.Provider value={layouts}>
      <Header app={layout.appName} />
      <Sidebar />
      <main className={`app-main text-center ${layouts.layout.sidebar ? 'main-half' : 'main-full'}`}>
        {props.children}
      </main>
    </LayoutContext.Provider>
  )
}

export default withRouter(AdminLayout)

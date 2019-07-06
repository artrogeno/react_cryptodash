import React from 'react'

import { getStorage, setStorage } from 'app/utils/services/session.storage'

const layoutStorage =  getStorage('ss-layout')
let _config = {
  appName: 'Crypto',
  sidebarNotification: false,
  sidebar: true,
  match: {},
  location: {},
  history: {}
}

if (layoutStorage) {
  _config = {
    appName: layoutStorage.appName,
    sidebarNotification: layoutStorage.sidebarNotification,
    sidebar: layoutStorage.sidebar,
    match: layoutStorage.match,
    location: layoutStorage.location,
    history: layoutStorage.history
  }
} else {
  setStorage( 'ss-layout', _config )
}

export const layout = {
  config: _config
}

export const LayoutContext = React.createContext({
  layout: layout.config,
  changeLayout: () => {}
})

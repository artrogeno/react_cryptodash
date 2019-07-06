import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { LayoutContext } from 'app/contexts/LayoutContext/LayoutContext'

const Sidebar = () => {
  let { layout: { sidebar } } = useContext(LayoutContext)
  return (
    <div className={`sidenav-push ${ sidebar ? 'nav-open': 'nav-close'}`}>
      <NavLink to='/app/'>Test 1</NavLink>
      <NavLink to='/app/'>Test 2</NavLink>
      <NavLink to='/app/'>Test 3</NavLink>
      <NavLink to='/app/'>Test 4</NavLink>
    </div>
  )
}

export default Sidebar

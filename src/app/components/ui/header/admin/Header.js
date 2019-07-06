import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

import { LayoutContext } from 'app/contexts/LayoutContext/LayoutContext'
import Hamburger from 'app/components/ui/hamburger/Hamburger'
import Notification from 'app/components/ui/Notification/Notification'

import Img from 'assets/img/profile.jpeg'
import './Header.scss'

const Header = () => {
  const { layout } = useContext(LayoutContext)
  const [dropdown, setDropdown] = useState(false)

  const dropdownToggle = () => {
    setDropdown(!dropdown)
  }

  return (
    <header className='fixed-top'>
      <Navbar dark expand='md' className='navbar-header shadow-sm'>
        <div className='navbar-hamburber'>
          <Hamburger />
        </div>
        <NavLink className='text-white navbar-brand' to='/app/dash'>
          { layout.appName }
        </NavLink>
        <Nav className='navbar-nav-right ' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/app/dash'>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/app/reports'>
              Reports
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/app/order'>
              Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/app/tasks'>
              My tasks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/app/feedback'>
              Feedback
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/app/funds'>
              Add funds
            </NavLink>
          </NavItem>
          <NavItem className={`dropdown-profile ${ !dropdown || 'active'}`}>
            <div className='dropdown__button' onClick={() => dropdownToggle()}>
              {/* <span className='dropdown__name'>Account settings</span> */}
              <div className='profile-image'>
                <img src={Img} aria-hidden alt='Profile Photo' />
              </div>
            </div>
            <div className='dropdown__box'>
              <ul className='dropdown__menu'>
                <li className='dropdown__item'>Your Profile </li>
                <li className='dropdown__item'>Your Dashboard</li>
                <li className='dropdown__item'>Recent activity  </li>
              </ul>
            </div>
          </NavItem>
          <NavItem>
            <Notification />
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header

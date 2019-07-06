import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Nav, NavItem } from 'reactstrap'
import Slider from 'react-slick'

import WidgetCurrency from 'app/components/ui/Widgets/WidgetCurrency/WidgetCurrency'
import SliderResponsive from 'app/utils/constants/slider.constants'
import Arrow from 'app/components/ui/Arrow/Arrow'

import './DashScreen.scss'

const DashScreen = () => {
  const datas = [
    {title: 'Bitcoin', balance: 2.55462, currency: 'BTC', icon: 'icon-dev-bitcoin', color: 'orange'},
    {title: 'Ripple', balance: 234.55, currency: 'XRP', icon: 'icon-dev-eslint', color: 'blue'},
    {title: 'Litecoin', balance: 234.55, currency: 'LTC', icon: 'icon-dev-cashapp', color: 'cyan'},
    {title: 'Litecoin', balance: 234.55, currency: 'LTC', icon: 'icon-dev-cashapp', color: 'cyan'},
    {title: 'Litecoin', balance: 234.55, currency: 'LTC', icon: 'icon-dev-cashapp', color: 'cyan'},
    {title: 'Litecoin', balance: 234.55, currency: 'LTC', icon: 'icon-dev-cashapp', color: 'cyan'},
    {title: 'Litecoin', balance: 234.55, currency: 'LTC', icon: 'icon-dev-cashapp', color: 'cyan'}
  ]
  let settings = SliderResponsive.responsive;
  settings.nextArrow = <Arrow direction='right'/>
  settings.prevArrow = <Arrow direction='left'/>

  return (
    <Fragment>
      <div className='dash-menu'>
        <div className='wrap-menu'>
          <div className='wrap-balance'>
            <div className='balance'>
              <div className='title'>
                <h3>Total balance:</h3>
              </div>
              <div className='currency'>
                <h4>$ 10 554.88</h4>
              </div>
              <div className='percent'>
                <span>+ $ 231.5 (4.7%)</span>
              </div>
            </div>
          </div>
          <div className='wrap-nav'>
            <Nav className='justify-content-end'>
              <NavItem>
                <NavLink className='nav-link' to='/app/dash'>
                  <span className='icon-pack-wireless-internet'></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='#'>
                  <span className='icon-pack-controls-6'></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='#'>
                  <span className='icon-pack-database-3'></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='#'>
                  <span className='icon-dev-buzzfeed'></span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
      <Container fluid className='text-center'>
        <Row className='m-5'>
          <Col md={12}>
            <Slider {...settings}>
            { datas.map((data, i) => <WidgetCurrency key={i} data={data} /> ) }
            </Slider>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default DashScreen

import React from 'react'
import './WidgetCurrency.scss'

const WidgetCurrency = (props) => {
  const { title, balance, currency, icon, color } = props.data
  return (
    <div className='widget-currency'>
      <div className={`icon bg-${color}`}>
        <span className={icon}></span>
      </div>
      <div className='description'>
        <h3>{title}</h3>
        <h4>{balance} {currency}</h4>
      </div>
      <div className='action'>
        <button className='btn'>
          <span className='icon-pack-add-1'></span>
        </button>
      </div>
    </div>
  )
}

export default WidgetCurrency

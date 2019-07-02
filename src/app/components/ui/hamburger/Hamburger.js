import React, { useState } from 'react'

import './Hamburger.scss'

const Hamburger = () => {
  const [toggleClass, setToggleClass] = useState('hamburger-bar-na')

  const hamburgerToggleClass = () => {
    if ( toggleClass === 'hamburger-bar-na') {
      setToggleClass('hamburger-bar-nb')
    } else if ( toggleClass === 'hamburger-bar-nb') {
      setToggleClass('hamburger-bar-nc')
    } else {
      setToggleClass('hamburger-bar-na')
    }
  }

  return (
    <div className={`hamburger ${toggleClass}`} onClick={hamburgerToggleClass}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default Hamburger

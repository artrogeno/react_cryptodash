import React from 'react'

import './Arrow.scss'

const Arrow = (props) => {
  const { direction = 'left', onClick } = props

  return (
    <div className={`arrow arrow-${direction}`} onClick={onClick}>
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </div>
  )
}

export default Arrow

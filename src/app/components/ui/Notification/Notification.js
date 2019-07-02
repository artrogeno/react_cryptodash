import React, { useState } from 'react'

import './Notification.scss'

const Notification = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div className={`notification ${toggle ? 'notification-bar-nc' : ''}`} onClick={() => setToggle(!toggle)}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default Notification

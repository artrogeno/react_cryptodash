import React, { useContext } from 'react'

import { LayoutContext } from 'app/contexts/LayoutContext/LayoutContext'
import { getStorage, setStorage } from 'app/utils/services/session.storage'
import './Hamburger.scss'

const Hamburger = () => {
  let { layout, changeLayout } = useContext(LayoutContext)
  // const [isMobile, setIsMobile] = useState((window.innerWidth <= 760))

  // const resize = () => {
  //   let currentHideNav = (window.innerWidth <= 760);
  //   if (currentHideNav !== isMobile) {
  //     setIsMobile(currentHideNav);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", resize);
  // })

  const toggleMenu = () => {
    let layoutStorage =  getStorage('ss-layout')
    if (layoutStorage) {
      layoutStorage.sidebar = !layoutStorage.sidebar
      setStorage('ss-layout', layoutStorage)
      changeLayout()
    }
  }

  return (
    <div className={`hamburger ${ layout.sidebar ? 'hamburger-bar-nc': 'hamburger-bar-na'}`} onClick={toggleMenu}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default Hamburger

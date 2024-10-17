import {useId, useState} from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'


const Menu = () => {
  const [show, setShow] = useState(1)

  const showMenu = () => {
    const mainMenu = document.getElementById('mainMenu')
    if (show == 1) {
      setShow(2);
      mainMenu.style.left = "0px";
      mainMenu.style.visibility = "visible";
    }
    else if (show == 2) {
      setShow(1);
      mainMenu.style.left = "-1000px";
      mainMenu.style.visibility = "hidden";
    }
  }


  return (
    <div onClick={showMenu} className={style.menu}>
      <div id="mainMenu" className={style.mainMenu} >
        <div className={style.header}>
          <div className={style.closeBtn}></div>
          <div className={style.holder}>
          <div className={style.logoText}></div>
          <div className={style.logoImage}></div>
          </div>
          <div className={style.content}></div>
        </div>
      </div>
    </div>
  )
}

export {Menu}
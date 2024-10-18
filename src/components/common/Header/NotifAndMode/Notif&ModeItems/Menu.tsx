import {useId, useState} from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'
import { NavLink } from 'react-router-dom'


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
          <div onClick={showMenu} className={style.closeBtn}></div>
          <div className={style.holder}>
          <div className={style.logoText}></div>
          <div className={style.logoImage}></div>
          </div>
        </div>
        <div className={style.content}>
          <NavLink to="/" className={style.nav}> خانه </NavLink>
          <NavLink to="/Courses-List" className={style.nav} > دوره ها </NavLink>
          <NavLink to="/Blogs-List" className={style.nav} > بلاگ ها </NavLink>
          <NavLink to="/" className={style.nav} > درباره ما </NavLink>
          <NavLink to="/" className={style.nav} > ارتباط با ما </NavLink>
        </div>
        <div className={style.footer}>
          <div className={style.twitter}></div> 
          <div className={style.youtube}></div>
          <div className={style.telegram}></div>
          <div className={style.instagram}></div>
        </div>
      </div>
    </div>
  )
}

export {Menu}
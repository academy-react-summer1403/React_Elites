import React, { useState } from 'react'
import style from './User.module.css'
import { useGlobalState } from '../../../../../State/State'
import { NavLink } from 'react-router-dom';

const User = () => {
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isClicked, setisClicked] = useState(false)

  return (
    <div className={style.user}>
      <img className={style.profile} src={userInfoObj.currentPictureAddress}></img>
      <div className={style.arrow} onClick={() => {
        setisClicked(!isClicked)
      }}></div>
      {isClicked && <div className={style.userAccebility}>
        <div className={style.fixed}>
          <div className={style.holder}>
            <NavLink to="/" className={style.items}> داشبورد </NavLink>
          </div>
          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Courses" className={style.items}> دوره من </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Reserve" className={style.items}> رزرو من </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/Fav-Courses" className={style.items}> دوره های مورد علاقه </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/" className={style.items}> بلاگ های مورد علاقه </NavLink>
          </div>
  
          <div className={style.holder}>
            <NavLink to="Student-Panel/Information" className={style.items}> پروفایل </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/Student-Panel/Shopping-Basket" className={style.items}> پرداخت ها </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/" className={style.items}> خروج </NavLink>
          </div>

        </div>
      </div>}
    </div>
  )
}

export {User}
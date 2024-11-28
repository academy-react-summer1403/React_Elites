import React, { useState } from 'react'
import style from './User.module.css'
import { useGlobalState } from '../../../../../State/State'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { removeItem } from '../../../../../core/services/storage/storage.services';

const User = () => {
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [isClicked, setisClicked] = useState(false)
  const {t} = useTranslation();

  return (
    <div className={style.user}>
      <img className={style.profile} src={userInfoObj.currentPictureAddress}></img>
      <div className={style.arrow} onClick={() => {
        setisClicked(!isClicked)
      }}></div>
      {isClicked && <div className={style.userAccebility}>
        <div className={style.fixed}>
          <div className={style.holder}>
            <NavLink to="/Student-Panel/dashboard" className={style.items}> {t("Dashboard")} </NavLink>
          </div>
          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Courses" className={style.items}> {t("myCourse")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/My-Reserve" className={style.items}> {t("MyReservation")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="Student-Panel/Fav-Courses" className={style.items}> {t("FavoriteCourses")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/" className={style.items}> {t("FavoriteBlogs")} </NavLink>
          </div>
  
          <div className={style.holder}>
            <NavLink to="Student-Panel/Information" className={style.items}> {t("Profile")} </NavLink>
          </div>

          <div className={style.holder}>
            <NavLink to="/Student-Panel/Shopping-Basket" className={style.items}> {t("Payments")} </NavLink>
          </div>

          <div className={style.holder}>
            <button onClick={() => {
              removeItem("token")
              setIsLogin(false)
              }} className={style.items}> {t("exit")} </button>
          </div>

        </div>
      </div>}
    </div>
  )
}

export {User}
import React, { useState } from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { removeItem } from '../../../../../core/services/storage/storage.services';


const User = () => {
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isClicked, setisClicked] = useState(false)
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const { t } = useTranslation();
  return (
    <div className={style.user}>
      <img className={style.profile} src={userInfoObj.currentPictureAddress}></img>
      <div className={style.arrow} onClick={() => {
        setisClicked(!isClicked)
      }}></div>
      {isClicked && <div className={style.userAccebility}>
        <div className={style.fixed}>
          <div className={style.holderr}>
            <NavLink className={style.items} to='/Student-Panel/dashboard' data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("Dashboard")}</NavLink>
          </div>
          <div className={style.holderr}>
            <NavLink className={style.items} to='/Student-Panel/My-Courses' data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("myCourse")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to='/Student-Panel/My-Reserve' data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("MyReservation")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to="/Student-Panel/Fav-Courses" data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("FavoriteCourses")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to="/Student-Panel/Fav-Blogs" data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("FavoriteBlogs")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to='/Student-Panel/Information' data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("Profile")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to='/Student-Panel/my-jobs' data-theme={identifier("darkNoBG", "dark2NoBG")}>{t("jobs")}</NavLink>
          </div>

          <div className={style.holderr}>
            <NavLink className={style.items} to="/Student-Panel/Shopping-Basket" data-theme={identifier("darkNoBG", "dark2NoBG")}> {t("Payments")}</NavLink>
          </div>
          <div className={style.holderr}>
            <NavLink className={style.items} to="/"  onClick={() => {
              removeItem("token")
              setIsLogin(false)
            }}> {t("SignOut")}</NavLink>
          </div>

        </div>
      </div>}
    </div>
  )
}

export { User }
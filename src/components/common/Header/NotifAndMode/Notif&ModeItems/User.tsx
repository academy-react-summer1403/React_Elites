import React, { useState } from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'
import bahr from '../../../../../assets/Images/Bahr.jpg'
import { useGlobalState } from '../../../../../State/State';

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
          <div className={style.holderr}>
            <div className={style.items}> داشبورد </div>
          </div>
          <div className={style.holderr}>
            <div className={style.items}> دوره من </div>
          </div>

          <div className={style.holderr}>
            <div className={style.items}> رزرو من </div>
          </div>

          <div className={style.holderr}>
            <div className={style.items}> دوره های مورد علاقه </div>
          </div>

          <div className={style.holderr}>
            <div className={style.items}> بلاگ های مورد علاقه </div>
          </div>
  
          <div className={style.holderr}>
            <div className={style.items}> پروفایل </div>
          </div>

          <div className={style.holderr}>
            <div className={style.items}> پرداخت ها </div>
          </div>

          <div className={style.holderr}>
            <div className={style.items}> خروج </div>
          </div>

        </div>
      </div>}
    </div>
  )
}

export {User}
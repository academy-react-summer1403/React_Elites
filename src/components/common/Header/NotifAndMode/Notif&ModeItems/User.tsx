import React from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'
import bahr from '../../../../../assets/Images/Bahr.jpg'

const User = () => {
  return (
    <div className={style.user}>
      <img className={style.profile} src={bahr}></img>
      <div className={style.arrow}></div>
    </div>
  )
}

export {User}
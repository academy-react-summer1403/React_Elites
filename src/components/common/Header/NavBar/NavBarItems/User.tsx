import React from 'react'
import style from './User.module.css'
import prof from '../../../../../assets/Images/photo_2024-09-21_10-08-29.jpg'

const User = () => {
  return (
    <div className={style.user}>
      <img className={style.profile} src={prof}></img>
      <div className={style.arrow}></div>
    </div>
  )
}

export {User}
import React from 'react'
import style from './BigImage.module.css'
import JSCourse from '../../../../../assets/Images/JSCourse.png'

const BigImage = () => {
  return (
    <img src={JSCourse} className={style.image} />
  )
}

export {BigImage}
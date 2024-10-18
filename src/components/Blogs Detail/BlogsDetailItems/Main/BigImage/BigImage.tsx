import React from 'react'
import style from './BigImage.module.css'
import FigmaCourse from '../../../../../assets/Images/FigmaCourse.png'

const BigImage = () => {
  return (
    <img src={FigmaCourse} className={style.image} />
  )
}

export {BigImage}
import React from 'react'
import style from './BigImage.module.css'

const BigImage = ({image}) => {
  return (
    <img src={image} className={style.image} />
  )
}

export {BigImage}
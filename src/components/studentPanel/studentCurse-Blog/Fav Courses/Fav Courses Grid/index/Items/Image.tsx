import React from 'react'
import style from './style.module.css'

const Image = ({image}) => {
  return (
    <img className={style.imageProgramming} src={image} />
  )
}

export {Image}
import React from 'react'
import style from './style.module.css'

const Image = ({id, image}) => {
  return (
    <img className={style.imageProgramming} src={image} />
  )
}

export {Image}
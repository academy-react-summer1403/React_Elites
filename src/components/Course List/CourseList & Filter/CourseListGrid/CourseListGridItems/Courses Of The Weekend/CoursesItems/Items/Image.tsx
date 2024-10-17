import React from 'react'
import style from './style.module.css'

const Image = (props) => {
  return (
    <img className={style.imageProgramming} src={props.image} />
  )
}

export {Image}
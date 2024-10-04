import React from 'react'
import style from './style.module.css'

const Image = (props) => {
  return (
    <img className={style.imageServices} src={props.image} />
  )
}

export {Image}
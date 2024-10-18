import React from 'react'
import style from './Image.module.css'

const Image = (props) => {
  return (
    <img className={style.image} src={props.image} />
  )
}

export {Image}
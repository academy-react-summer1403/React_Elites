import React from 'react'
import style from './style.module.css'
import styleDark from './../../../../../Style/DarkMode.module.css'

const Image = (props) => {
  return (
    <div className={`${style.imageHolder} ${styleDark.imageHolder}`}>
      <img className={style.imageServices} src={props.image} />
    </div>
  )
}

export {Image}
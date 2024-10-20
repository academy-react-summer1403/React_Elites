import React from 'react'
import style from './style.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const Price = (props) => {
  return (
    <div className={`${style.price} ${styleDark.title}`}>{props.price}</div>
  )
}

export {Price}
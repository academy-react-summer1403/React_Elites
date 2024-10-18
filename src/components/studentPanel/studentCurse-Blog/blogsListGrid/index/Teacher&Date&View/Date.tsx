import React from 'react'
import style from './style.module.css'

const Date = (props) => {
  return (
    <div className={style.date}>{props.date}</div>
  )
}

export {Date}
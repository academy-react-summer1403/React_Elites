import React from 'react'
import style from './ViewsAndDate.module.css'

const Date = (props) => {
  return (
    <div className={style.date}>{props.date}</div>
  )
}

export {Date}
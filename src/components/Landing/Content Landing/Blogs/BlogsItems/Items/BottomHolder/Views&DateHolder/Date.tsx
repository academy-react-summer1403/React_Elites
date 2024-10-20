import React from 'react'
import style from './ViewsAndDate.module.css'
import styleDark from './../../../../../../../../Style/DarkMode.module.css'

const Date = (props) => {
  return (
    <div className={`${style.date} ${styleDark.desc}`}>{props.date}</div>
  )
}

export {Date}
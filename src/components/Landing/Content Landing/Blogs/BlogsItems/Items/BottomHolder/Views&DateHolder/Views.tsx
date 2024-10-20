import React from 'react'
import style from './ViewsAndDate.module.css'
import styleDark from './../../../../../../../../Style/DarkMode.module.css'


const Views = (props) => {
  return (
    <div className={`${style.views} ${styleDark.desc}`}>{props.views}</div>
  )
}

export {Views}
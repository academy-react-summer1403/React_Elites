import React from 'react'
import style from './Publisher.module.css'
import styleDark from './../../../../../../../../Style/DarkMode.module.css'

const Publisher = (props) => {
  return (
    <div className={`${style.Publisher} ${styleDark.desc}`}>{props.pub}</div>
  )
}

export {Publisher}
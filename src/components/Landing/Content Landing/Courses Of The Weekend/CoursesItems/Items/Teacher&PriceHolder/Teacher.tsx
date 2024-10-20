import React from 'react'
import style from './style.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const Teacher = (props) => {
  return (
    <div className={`${style.teacher} ${styleDark.desc}`}>{props.teacher}</div>
  )
}

export {Teacher}
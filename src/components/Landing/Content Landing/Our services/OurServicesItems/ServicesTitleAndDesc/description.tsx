import React from 'react'
import style from '../style.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const Description = (props) => {
  return (
    <div className={`${style.desc} ${styleDark.desc}`}>{props.desc}</div>
  )
}

export {Description}
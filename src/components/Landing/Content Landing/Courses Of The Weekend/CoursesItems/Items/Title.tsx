import React from 'react'
import style from './style.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const Title = (props) => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>{props.title}</div>
  )
}

export {Title}
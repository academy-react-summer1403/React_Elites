import React from 'react'
import style from './Bottun.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const Bottun = () => {
  return (
    <div className={`${style.Button} ${styleDark.Button}`}> جدیدترین دوره ها </div>
  )
}

export {Bottun};
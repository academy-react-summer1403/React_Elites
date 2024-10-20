import React from 'react'
import style from './ItemsHolder.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'


const Button = () => {
  return (
    <div className={`${style.button} ${styleDark.Button}`}>مشاهده بیشتر</div>
  )
}

export {Button}
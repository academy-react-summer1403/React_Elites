import React from 'react'
import style from './BigText.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const BigText = () => {
  return (
    <div className={`${style.bigText} ${styleDark.bigText}`}>آموزش مدرن <br /> پیشرفت سریع </div>
  )
}

export {BigText}
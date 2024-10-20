import React from 'react'
import style from './Decription.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const Description = () => {
  return (
    <div className={`${style.description} ${styleDark.description}`}>یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...</div>
  )
}

export {Description}
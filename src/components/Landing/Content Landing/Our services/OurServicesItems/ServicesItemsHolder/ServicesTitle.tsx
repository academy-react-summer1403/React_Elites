import React from 'react'
import style from './ServicesItemsHolder.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const ServicesTitle = () => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>خدماتی که ما در طی دوره ها <br /> به شما ارائه میدیم</div>
  )
}

export {ServicesTitle}
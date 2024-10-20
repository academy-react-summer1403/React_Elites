import React from 'react'
import style from './Decription.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const Description = (props) => {
  return (
    <div className={`${style.description} ${styleDark.description}`}>جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها</div>
  )
}

export {Description}
import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Description = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description}  data-theme={darkMode ? "dark" : "lightMode"}>جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها</div>
  )
}

export {Description}
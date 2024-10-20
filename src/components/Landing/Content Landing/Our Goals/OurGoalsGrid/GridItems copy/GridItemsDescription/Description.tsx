import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Description = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description} data-theme={darkMode ? "dark" : "lightMode"} >کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...</div>
  )
}

export {Description}
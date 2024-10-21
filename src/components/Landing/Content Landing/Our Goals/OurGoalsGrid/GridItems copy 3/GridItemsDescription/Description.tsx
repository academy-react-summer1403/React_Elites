import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Description = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description} data-theme={darkMode ? "dark" : "lightMode"}>یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...</div>
  )
}

export {Description}
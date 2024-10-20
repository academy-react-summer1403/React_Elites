import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Description = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description} data-theme={darkMode ? "dark" : "lightMode"}>آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش</div>
  )
}

export {Description}
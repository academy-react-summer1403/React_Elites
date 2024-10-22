import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../State/State';

const Content = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.content} data-theme={darkMode ? "darkNoBG" : "lightMode"}>واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن </div>
  )
}

export {Content}
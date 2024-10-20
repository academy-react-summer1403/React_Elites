import React from 'react'
import style from './TeachersItems.module.css'
import { useGlobalState } from '../../../../../State/State';

const Paragraph = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.paragraph} data-theme={darkMode ? "dark" : "lightMode"}>در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.</div>
  )
}

export {Paragraph}
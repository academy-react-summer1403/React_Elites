import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const Learning = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>یادگیری انعطاف‌پذیر</span>
      <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>یکی از اصول اساسی ما در آکادمی سپهر، ارائه یادگیری انعطاف‌پذیر است. ما درک می‌کنیم که هر فردی با سرعت و زمان‌بندی مخصوص به خود یاد می‌گیرد و بنابراین دوره‌های ما به صورت آنلاین و قابل دسترسی در هر زمان و مکانی طراحی شده‌اند. شما می‌توانید با توجه به زمان و شرایط خود، دوره‌های مورد نظر خود را انتخاب کرده و به یادگیری بپردازید. این انعطاف‌پذیری به شما این امکان را می‌دهد که یادگیری خود را با زندگی روزمره‌تان هماهنگ کنید و بدون فشار و استرس، به پیشرفت در زمینه‌های مورد علاقه‌تان بپردازید.</p>
    </div>
  )
}

export {Learning}
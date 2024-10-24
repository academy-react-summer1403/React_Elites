import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const CursesTeaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>دوره‌های آموزشی ما</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}> در آکادمی سپهر، ما به ارائه دوره‌های آموزشی در زمینه‌های متنوعی از جمله برنامه‌نویسی، توسعه وب، هوش مصنوعی، تحلیل داده، دیجیتال مارکتینگ، و بسیاری از حوزه‌های دیگر فناوری می‌پردازیم. دوره‌های ما برای تمامی سطوح از مبتدی تا پیشرفته طراحی شده‌اند. بنابراین، چه شما یک فرد تازه‌کار باشید که به دنبال یادگیری اولین زبان برنامه‌نویسی خود هستید، یا یک توسعه‌دهنده حرفه‌ای که به دنبال ارتقای مهارت‌های خود در یک زمینه خاص می‌باشد، در آکادمی سپهر دوره‌ای مناسب برای شما وجود خواهد داشت.</p> 
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}> تمامی دوره‌های ما به گونه‌ای طراحی شده‌اند که یادگیرندگان بتوانند با سرعت خود پیش بروند و در صورت نیاز به پشتیبانی، از کمک‌های مستمر تیم پشتیبانی و اساتید بهره‌مند شوند. همچنین، ما در آکادمی سپهر بر این باوریم که یادگیری هیچ‌گاه نباید متوقف شود، به همین دلیل دوره‌های ما به طور مداوم به‌روزرسانی می‌شوند تا همواره با جدیدترین تکنولوژی‌ها و استانداردهای روز دنیا همگام باشند.</p> 
      </div>
    </div>  
  )
}

export {CursesTeaching}
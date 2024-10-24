import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const TeamTeaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>تیم آموزشی ما</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>یکی از نقاط قوت آکادمی سپهر، تیم آموزشی مجرب و متخصص ماست. اساتید ما نه تنها از دانش تئوری عمیقی برخوردار هستند، بلکه تجربه عملی و حرفه‌ای در زمینه‌های مختلف فناوری اطلاعات و برنامه‌نویسی دارند. این ویژگی باعث می‌شود که محتوای آموزشی آکادمی سپهر به روز، کاربردی و منطبق بر نیازهای واقعی صنعت باشد. هر یک از اعضای تیم آموزشی ما با شور و اشتیاق به آموزش می‌پردازند و همواره در تلاشند تا بهترین تجربیات خود را با دانشجویان به اشتراک بگذارند. </p> 
        <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>اساتید آکادمی سپهر در فرآیند آموزشی خود از مثال‌ها و پروژه‌های واقعی استفاده می‌کنند تا دانشجویان بتوانند با چالش‌های عملی که در دنیای واقعی با آن‌ها مواجه خواهند شد، آشنا شوند. این رویکرد به دانشجویان کمک می‌کند تا بهتر بتوانند دانش خود را به کار گیرند و پس از اتمام دوره، به سرعت وارد بازار کار شوند. </p> 
      </div>
    </div>  
  )
}

export {TeamTeaching}
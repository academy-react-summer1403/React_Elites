import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const TargetWe = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>هدف و مأموریت ما</span>
      <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>هدف اصلی ما در آکادمی سپهر، پرورش نسل جدیدی از برنامه‌نویسان و متخصصان فناوری است که بتوانند در دنیای پرسرعت و دیجیتال امروزی، حرفی برای گفتن داشته باشند. مأموریت ما ارائه آموزش‌هایی است که نه تنها به تقویت مهارت‌های تئوری کمک کند، بلکه هنرجویان را به طور عملی برای ورود به بازار کار آماده سازد. در این راستا، تمامی دوره‌های آموزشی ما به صورت پروژه‌محور طراحی شده‌اند تا فراگیران بتوانند با انجام پروژه‌های واقعی، مهارت‌های خود را در عمل به کار بگیرند.</p>
    </div>
  )
}

export {TargetWe}
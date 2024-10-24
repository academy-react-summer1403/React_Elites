import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const Programming = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>آینده برنامه نویسی با آکادمی سپهر</span>
      <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>در دنیایی که تکنولوژی به سرعت در حال پیشرفت است، یادگیری مداوم و ارتقای مهارت‌ها ضروری است. ما در آکادمی سپهر متعهد به ارائه بهترین و به‌روزترین منابع آموزشی هستیم تا شما بتوانید با اعتماد به نفس و دانش کافی، در هر مسیری که انتخاب می‌کنید، موفق باشید. آینده شما با یادگیری امروز شروع می‌شود و ما در آکادمی سپهر آماده‌ایم تا در این مسیر همراه شما باشیم.</p>
    </div>
  )
}

export {Programming}
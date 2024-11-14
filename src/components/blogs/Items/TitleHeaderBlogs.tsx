import React from 'react'
import style from '../../../Style/blogList.module.css'
import { useGlobalState } from "../../../State/State.tsx";

const TitleHeaderBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.titleBlogs}>
      <h1 className={style.h1} data-theme={darkMode ? "dark" : "lightMode"}>اطلاعات بیشتر ، درک بهتر</h1>
      <p className={style.p} data-theme={darkMode ? "dark" : "lightMode"}>ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید بیشتر میکنیم</p>
    </div>
  )
}

export {TitleHeaderBlogs}
import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const TitleHeaderMyCommentList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>نظرات شما</h1>
        <NavLink to='/Student-Panel/Information'>مشاهده بیشتر &gt; </NavLink>
      </div>
      </>
  )
}

export {  TitleHeaderMyCommentList }
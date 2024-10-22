import React, { useState } from 'react'
import style from './Top.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const TopItems = ({setSortModal}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <div className={style.holder}>
        <div className={style.title}>ترتیب</div>
        <div className={style.closeBtn} onClick={() => {
          setSortModal(false)
        }}> بستن </div>
      </div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>جدید ترین</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>محبوب ترین</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}> گران ترین</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>ارزان ترین</div>
    </>
  )
}

export {TopItems}
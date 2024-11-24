import React, { useState } from 'react'
import style from './Teacher.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from "react-i18next";

const Teacher = ({setTeacherId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isClicked, setIsClicked] = useState(false)
  const { t } = useTranslation();
  return (
    <>
          <div className={style.holderIconAndTitle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16H9" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 6.5H16" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6M2 17H6M2 17V22M6 11V17M6 11H9H12M6 17V22" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5Z" stroke="#272727" stroke-width="1.5"/>
          </svg>
          <div className={style.titleTeacher} data-theme={darkMode ? "teacher" : "lightMode"}> {t("teachers")} </div>
          </div>
        <div className={style.teacher1} data-theme={darkMode ? "dark" : "lightMode"}>{t("TeacherCourses")}
          <div className={isClicked ? style.arrowUp : style.arrowDown} onClick={() => setIsClicked(!isClicked)}></div>
          {isClicked && <div className={style.filterTeacher}>
            <input type="radio" id='one' name='teachers' className={style.input} onChange={() => {
              setTeacherId("20207");
            }}/>
            <label htmlFor='one' className={style.teacher}> محمدحسین بحرالعلومی </label>
            <input type="radio" id='two' name='teachers' className={style.input} onChange={() => {
              setTeacherId("15");
            }} />
            <label htmlFor='two' className={style.teacher}> علی صادقی </label>
            <input type="radio" id='three' name='teachers' className={style.input} onChange={() => {
              setTeacherId("37");
            }}/>
            <label htmlFor='three' className={style.teacher}> تیم نابغه </label>
            <input type="radio" id='four' name='teachers' className={style.input} onChange={() => {
              setTeacherId("41");
            }}/>
            <label htmlFor='four' className={style.teacher}> مهدی قاسمی </label>
            <input type="radio" id='five' name='teachers' className={style.input} onChange={() => {
              setTeacherId("11");
            }}/>
            <label htmlFor='five' className={style.teacher}> خسرو دل محمدی </label>
            <input type="radio" id='six' name='teachers' className={style.input} onChange={() => {
              setTeacherId("13");
            }}/>
            <label htmlFor='six' className={style.teacher}> MMd Reza Sadaty </label>
            <input type="radio" id='seven' name='teachers' className={style.input} onChange={() => {
              setTeacherId("20205");
            }}/>
            <label htmlFor='seven' className={style.teacher}> مهدی اصغری </label>
            <input type="radio" id='eight' name='teachers' className={style.input} onChange={() => {
              setTeacherId("51");
            }}/>
            <label htmlFor='eight' className={style.teacher} > رضا اکبری </label>
            <input type="radio" id='nine' name='teachers' className={style.input} onChange={() => {
              setTeacherId("9");
            }}/>
            <label htmlFor='nine' className={style.teacher}> محمد بکران </label>
            <input type="radio" id='ten' name='teachers' className={style.input} onChange={() => {
              setTeacherId("6");
            }}/>
            <label htmlFor='ten' className={style.teacher}> عارف سالاریه </label>
            <input type="radio" id='eleven' name='teachers' className={style.input} onChange={() => {
              setTeacherId("1");
            }}/>
            <label htmlFor='eleven' className={style.teacher}> مصطفی انجین </label>
          </div>}
        </div>
    </>
  )
}

export {Teacher}
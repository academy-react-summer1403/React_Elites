import React, { useState } from 'react'
import style from './Level.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Level = ({setLevelId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
        <div className={style.titleLevel} data-theme={darkMode ? "level" : "lightMode"}> سطح آموزشی </div>
        <div className={style.level1} data-theme={darkMode ? "dark" : "lightMode"}>سطح مورد نظر را انتخاب کنید
        <div className={isClicked ? style.arrowUp : style.arrowDown} onClick={() => setIsClicked(!isClicked)}></div>
          {isClicked && 
            <div className={style.filterLevel}>
              <input type="radio" id='oneL' name='levels' className={style.input} onChange={() => {
                setLevelId("1");
              }}/>
              <label htmlFor='oneL' className={style.level}> مبتدی </label>
              <input type="radio" id='twoL' name='levels' className={style.input} onChange={() => {
                setLevelId("2");
              }} />
              <label htmlFor='twoL' className={style.level}> متوسط </label>
              <input type="radio" id='threeL' name='levels' className={style.input} onChange={() => {
                setLevelId("3");
              }}/>
              <label htmlFor='threeL' className={style.level}> پیشرفته </label>
            </div>}
        </div>
    </>
  )
}

export {Level}
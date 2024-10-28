import React, { useState } from 'react'
import style from './Teacher.module.css'
import { useGlobalState } from '../../../../../../State/State';

const Teacher = ({setTeacherId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
        <div className={style.titleTeacher} data-theme={darkMode ? "teacher" : "lightMode"}> اساتید </div>
        <div className={style.teacher1} data-theme={darkMode ? "dark" : "lightMode"}>استاد مورد نظر را انتخاب کنید
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
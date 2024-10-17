import React from 'react'
import style from './Teacher.module.css'

const Teacher = () => {
  return (
    <>
        <div className={style.titleTeacher} > اساتید </div>
        <div className={style.teacher}>استاد مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Teacher}
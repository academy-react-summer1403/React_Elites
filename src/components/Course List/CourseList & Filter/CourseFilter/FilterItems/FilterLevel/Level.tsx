import React from 'react'
import style from './Level.module.css'

const Level = () => {
  return (
    <>
        <div className={style.titleLevel} > سطح آموزشی </div>
        <div className={style.level}>سطح مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Level}
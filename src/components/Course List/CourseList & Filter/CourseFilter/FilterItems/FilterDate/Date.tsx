import React from 'react'
import style from './Date.module.css'

const Date = () => {
  return (
    <>
        <label htmlFor='date' className={style.titleDate} > تاریخ برگزاری - اتمام </label>
        <input name='date' type='date' className={style.date} placeholder='تاریخ مورد نظر را انتخاب کنید'/>
    </>
  )
}

export {Date}
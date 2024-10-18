import React from 'react'
import style from './style.module.css'

const Status = () => {
  return (
    <div className={style.Status}>
        <div className={style.topS}>بازدیدکنندگان</div>
        <div className={style.bottomS}>243 نفر</div>
    </div>
  )
}

export {Status}
import React from 'react'
import style from './style.module.css'

const Status = () => {
  return (
    <div className={style.Status}>
        <div className={style.topS}>وضعیت</div>
        <div className={style.bottomS}>درحال برگزاری</div>
    </div>
  )
}

export {Status}
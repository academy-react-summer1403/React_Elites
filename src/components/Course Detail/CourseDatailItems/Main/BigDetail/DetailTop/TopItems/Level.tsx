import React from 'react'
import style from './style.module.css'

const Level = () => {
  return (
    <div className={style.Level}>
        <div className={style.topL}>سطح آموزشی</div>
        <div className={style.bottomL}> پیشرفته</div>
    </div>
  )
}

export {Level}
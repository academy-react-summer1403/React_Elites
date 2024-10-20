import React from 'react'
import style from './style.module.css'

const Likes = () => {
  return (
    <div className={style.Status}>
        <div className={style.topS}>تعداد لایک</div>
        <div className={style.bottomS}>220 نفر</div>
    </div>
  )
}

export {Likes}
import React from 'react'
import style from './style.module.css'

const Category = () => {
  return (
    <div className={style.Category}>
        <div className={style.topC}>دسته بندی</div>
        <div className={style.bottomC}>برنامه نویسی</div>
    </div>
  )
}

export {Category}
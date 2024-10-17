import React from 'react'
import style from './Top.module.css'

const TopItems = () => {
  return (
    <>
        <div className={style.categories}>جدید ترین</div>
        <div className={style.categories}>محبوب ترین</div>
        <div className={style.categories}> گران ترین</div>
        <div className={style.categories}>ارزان ترین</div>
        <div className={style.filterResponsive}>فیلتر</div>
        <div className={style.sortResponsive}>ترتیب</div>
    </>
  )
}

export {TopItems}
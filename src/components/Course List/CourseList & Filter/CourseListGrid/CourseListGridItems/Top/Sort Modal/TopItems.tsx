import React, { useState } from 'react'
import style from './Top.module.css'

const TopItems = ({setSortModal}) => {
  return (
    <>
      <div className={style.holder}>
        <div className={style.title}>ترتیب</div>
        <div className={style.closeBtn} onClick={() => {
          setSortModal(false)
        }}> بستن </div>
      </div>
      <div className={style.categories}>جدید ترین</div>
      <div className={style.categories}>محبوب ترین</div>
      <div className={style.categories}> گران ترین</div>
      <div className={style.categories}>ارزان ترین</div>
    </>
  )
}

export {TopItems}
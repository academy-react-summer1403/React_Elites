import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

const TopHolder = () => {
  return (
    <div className={style.holder}>ترتیب
      <TopItems />
    </div>
  )
}

export {TopHolder}
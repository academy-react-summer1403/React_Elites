import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

const TopHolder = () => {
  return (
    <div className={style.holder}>
      <div className={style.title}> ترتیب </div>
      <TopItems />
    </div>
  )
}

export {TopHolder}
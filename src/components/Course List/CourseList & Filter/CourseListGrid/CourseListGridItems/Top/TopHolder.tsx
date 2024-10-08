import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

const TopHolder = () => {
  return (
    <div className={style.holder}>items
      <TopItems />
    </div>
  )
}

export {TopHolder}
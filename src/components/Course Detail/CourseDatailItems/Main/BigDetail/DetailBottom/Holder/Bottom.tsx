import React from 'react'
import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'


const Bottom = () => {
  return (
    <div className={style.bottom}>
      <DisLikes />
      <Likes />
      <DateEnd />
      <DateStart />
    </div>
  )
}

export { Bottom}
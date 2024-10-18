import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Rate } from './Rate'

const RateAndCommentsHolder = () => {
  return (
    <div className={style.holder}>
        <Comments />
        <Rate />
    </div>
  )
}

export {RateAndCommentsHolder}
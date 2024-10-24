import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Rate } from './Rate'

const RateAndCommentsHolder = ({rate, comments}) => {
  return (
    <div className={style.holder}>
        <Comments comments={comments} />
        <Rate rate={rate} />
    </div>
  )
}

export {RateAndCommentsHolder}
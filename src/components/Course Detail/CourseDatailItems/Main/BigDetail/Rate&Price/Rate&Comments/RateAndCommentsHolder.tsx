import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Rate } from './Rate'

const RateAndCommentsHolder = ({rate, comments, isLoading}) => {
  return (
    <div className={style.holder}>
        <Comments isLoading={isLoading} comments={comments} />
        <Rate isLoading={isLoading} rate={rate} />
    </div>
  )
}

export {RateAndCommentsHolder}
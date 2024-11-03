import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Ratee } from './Rate'

const RateAndCommentsHolder = ({rate, comment}) => {
  return (
    <div className={style.holder}>
        <Comments comment={comment} />
        <Ratee rate={rate} />
    </div>
  )
}

export {RateAndCommentsHolder}
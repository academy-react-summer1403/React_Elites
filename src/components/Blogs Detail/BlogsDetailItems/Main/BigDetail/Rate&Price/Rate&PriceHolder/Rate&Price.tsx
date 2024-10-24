import React from 'react'
import style from './Rate&Price.module.css'
import { Price } from '../Price/Price'
import { RateAndCommentsHolder } from '../Rate&Comments/RateAndCommentsHolder'

const RateAndPrice = ({rate, comment}) => {
  return (
    <div className={style.holder}>
        <RateAndCommentsHolder rate={rate} comment={comment} />
    </div>
  )
}

export {RateAndPrice}
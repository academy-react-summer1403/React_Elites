import React from 'react'
import style from './Rate&Price.module.css'
import { Price } from '../Price/Price'
import { RateAndCommentsHolder } from '../Rate&Comments/RateAndCommentsHolder'

const RateAndPrice = ({comments, rate, price}) => {
  return (
    <div className={style.holder}>
        <Price price={price} />
        <RateAndCommentsHolder rate={rate} comments={comments} />
    </div>
  )
}

export {RateAndPrice}
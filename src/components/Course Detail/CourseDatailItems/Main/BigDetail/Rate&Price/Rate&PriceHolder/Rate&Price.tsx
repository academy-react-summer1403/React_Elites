import React from 'react'
import style from './Rate&Price.module.css'
import { Price } from '../Price/Price'
import { RateAndCommentsHolder } from '../Rate&Comments/RateAndCommentsHolder'

const RateAndPrice = () => {
  return (
    <div className={style.holder}>
        <Price />
        <RateAndCommentsHolder />
    </div>
  )
}

export {RateAndPrice}
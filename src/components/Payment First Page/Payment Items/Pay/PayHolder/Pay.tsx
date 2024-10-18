import React from 'react'
import style from './Pay.module.css'
import { Top } from '../Pay Items/Top'
import { Bottom } from '../Pay Items/Bottom'
import { PaymentImage } from '../Pay Items/PaymentImage'

const Pay = () => {
  return (
    <div className={style.pay}>
        <Top />
        <Bottom />
        <PaymentImage />
    </div>
  )
}

export {Pay}
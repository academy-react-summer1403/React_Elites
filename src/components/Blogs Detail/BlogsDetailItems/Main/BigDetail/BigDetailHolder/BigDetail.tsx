import React from 'react'
import style from './BigDetail.module.css'
import { Title } from '../DetailTitle/Title'
import { Top } from '../DetailTop/Holder/Top'
import { Bottom } from '../DetailBottom/Holder/Bottom'
import { RateAndPrice } from '../Rate&Price/Rate&PriceHolder/Rate&Price'
import { Order } from '../DetailOrder/Order'


const BigDetail = () => {
  return (
    <div className={style.holder}>
        <Title />
        <Top />
        <Bottom />
        <RateAndPrice />
        <Order />
    </div>
  )
}

export {BigDetail}
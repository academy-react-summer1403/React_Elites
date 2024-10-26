import React from 'react'
import style from './BigDetail.module.css'
import { Title } from '../DetailTitle/Title'
import { Top } from '../DetailTop/Holder/Top'
import { Bottom } from '../DetailBottom/Holder/Bottom'
import { RateAndPrice } from '../Rate&Price/Rate&PriceHolder/Rate&Price'
import { Order } from '../DetailOrder/Order'


const BigDetail = ({dislike, rate, comments, like, price, teacher, status, level, category, title, start, end}) => {
  return (
    <div className={style.holder}>
        <Title title={title}/>
        <Top status={status} teacher={teacher} level={level} category={category} />
        <Bottom like={like} dislike={dislike} start={start} end={end} />
        <RateAndPrice comments={comments} rate={rate} price={price} />
        <Order />
    </div>
  )
}

export {BigDetail}
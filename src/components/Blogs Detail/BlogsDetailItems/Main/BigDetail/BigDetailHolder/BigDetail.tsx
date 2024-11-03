import React from 'react'
import style from './BigDetail.module.css'
import { Title } from '../DetailTitle/Title'
import { Top } from '../DetailTop/Holder/Top'
import { Bottom } from '../DetailBottom/Holder/Bottom'
import { RateAndPrice } from '../Rate&Price/Rate&PriceHolder/Rate&Price'
import { Order } from '../DetailOrder/Order'



const BigDetail = ({id, category, teacher, views, likes, dislikes, rate, title, comment, date, currentUserIsLike, currentUserIsDissLike}) => {
  return (
    <div className={style.holder}>
        <Title title={title}/>
        <Top category={category} teacher={teacher} views={views} date={date}/>
        <Bottom likes={likes} dislikes={dislikes}/>

        <RateAndPrice rate={rate} comment={comment} />
        <Order id={id} currentUserIsLike={currentUserIsLike} currentUserIsDissLike={currentUserIsDissLike} />
    </div>
  )
}

export {BigDetail}
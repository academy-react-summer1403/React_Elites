import React from 'react'
import style from './BigDetail.module.css'
import { Title } from '../DetailTitle/Title'
import { Top } from '../DetailTop/Holder/Top'
import { Bottom } from '../DetailBottom/Holder/Bottom'
import { RateAndPrice } from '../Rate&Price/Rate&PriceHolder/Rate&Price'
import { Order } from '../DetailOrder/Order'


const BigDetail = ({isCurrentUserFavorite, isLoading, id, category, teacher, views, likes, dislikes, rate, title, comment, insertDate, currentUserIsLike, currentUserIsDissLike}) => {
  return (
    <div className={style.holder}>
        <Title title={title} isLoading={isLoading}/>
        <Top category={category} teacher={teacher} views={views} date={insertDate} isLoading={isLoading}/>
        <Bottom likes={likes} dislikes={dislikes} isLoading={isLoading}/>

        <RateAndPrice isLoading={isLoading} rate={rate} comment={comment} />
        <Order id={id} currentUserIsLike={currentUserIsLike} currentUserIsDissLike={currentUserIsDissLike} isCurrentUserFavorite={isCurrentUserFavorite} />
    </div>
  )
}

export {BigDetail}
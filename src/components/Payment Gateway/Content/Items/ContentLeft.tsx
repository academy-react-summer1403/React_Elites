import React from 'react'
import style from './Items.module.css'

const ContentLeft = () => {
  return (
    <div className={style.contentLeft}>
        <div className={style.title}> اطلاعات خرید </div>
        <div className={style.text}> مبلغ تراکنش </div>
        <div className={style.price}> 2,070,000 ریال </div>
        <div className={style.text}> پرداخت یار </div>
        <div className={style.text}> زرین پال </div>
        <div className={style.text}> نام پذیرنده </div>
        <div className={style.text}> آکادمی بحر </div>
        <div className={style.text}> کد پذیرنده/ترمینال پشتیبانی شده </div>
        <div className={style.text}> 1234567/1234567 </div>
        <div className={style.text}> سایت پذیرنده </div>
        <div className={style.text}> http://BahrAc.com </div>
    </div>
  )
}

export {ContentLeft}
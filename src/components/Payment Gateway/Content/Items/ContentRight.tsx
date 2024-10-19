import React from 'react'
import style from './Items.module.css'

const ContentRight = () => {
  return (
    <div className={style.contentRight}>
        <div className={style.title}> اطلاعات کارت </div>

        <div className={style.container}>
            <div className={style.fourInput}>
                <input className={style.cardNumber} />
                <input className={style.cardNumber} />
                <input className={style.cardNumber} />
                <input className={style.cardNumber} />
            </div>
            <div>شماره کارت</div>
        </div>

        <div className={style.container}>
        <input className={style.cvv2}/>
            <div>CVV2</div>
        </div>

        <div className={style.container}>
            <div>تاریخ انقضا</div>
        </div>

        <div className={style.container}>
            <div>کد امنیتی</div>
        </div>

        <div className={style.container}>
            <div>رمز اینترنتی پویا</div>
        </div>

        <div className={style.container}>
            <div>رمز اینترنتی</div>
        </div>

        <div className={style.container}>
            <div>موبایل(اختیاری)</div>
        </div>

        <div className={style.container}>
            <div>ایمیل(اختیاری)</div>
        </div>

        <div className={style.container}>
            <div></div>
        </div>


    </div>
  )
}

export {ContentRight}
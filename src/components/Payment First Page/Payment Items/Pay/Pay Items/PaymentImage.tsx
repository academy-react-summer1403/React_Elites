import React from 'react'
import style from './PaymentImage.module.css'
import payment from '../../../../../assets/Images/payment.webp'

const PaymentImage = () => {
  return (
    <>
        <img className={style.paymentImage} src={payment} />
    </>
  )
}

export {PaymentImage}
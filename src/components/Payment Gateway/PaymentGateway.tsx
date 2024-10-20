import React from 'react'
import style from './PaymentGateway.module.css'
import { HeaderPayment } from '../Payment First Page/Payment Items/Header/Header Holder/HeaderPayment'
import { Header } from './Header/Hodler/Header'
import { Content } from './Content/Holder/Content'

const PaymentGateway = () => {
  return (
    <div className={style.paymentGateway}>
        <Header />
        <Content />
    </div>
  )
}

export {PaymentGateway}
import React from 'react'
import style from './Payment.module.css'
import { HeaderPayment } from '../Payment Items/Header/Header Holder/HeaderPayment'
import { Pay } from '../Payment Items/Pay/PayHolder/Pay'
import { ReservedCourses } from '../Payment Items/Reserved Courses/Reserved Courses Holder/ReservedCourses'

const Payment = () => {
  return (
    <div className={style.payment}>
        <HeaderPayment />
        <Pay />
        <ReservedCourses />
    </div>
  )
}

export {Payment}
import React, { useEffect, useState } from 'react'
import style from './PaymentGateway.module.css'
import { HeaderPayment } from '../Payment First Page/Payment Items/Header/Header Holder/HeaderPayment'
import { Header } from './Header/Hodler/Header'
import { Content } from './Content/Holder/Content'
import { allCourseList } from '../../core/services/api/AllCourseList'
import { getCourseComment } from '../../core/services/api/getCourseComment'
import { getCourseById } from '../../core/services/api/courseById'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../../State/State'

const PaymentGateway = () => {
  const [courseDetail, setCourseDetail] = useState([])
  const { id } = useParams();
  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setCourseDetail(Details)
  }
  useEffect(() => {
    getCourseDetail()
  }, [id])

  return (
    <div className={style.paymentGateway}>
      <Header />
      <Content Details={courseDetail} price={courseDetail?.cost} />
    </div>
  )
}

export { PaymentGateway }
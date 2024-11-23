import React from 'react'
import style from './style.module.css'
import { postReserveCourse } from '../../../../../../core/services/api/postAddCourseReserve'
import toast, { Toaster } from 'react-hot-toast'

const ReserveCourse = ({id}) => {
  const reserveCourse = async () => {
    let res = await postReserveCourse(id)
    if(res.success === true){
      toast.success("دوره رزرو شد")
    }
  }
  return (
    <>
    <Toaster />
        <div className={style.reserve} onClick={() => reserveCourse()}>رزرو دوره</div>
    </>
  )
}

export {ReserveCourse}
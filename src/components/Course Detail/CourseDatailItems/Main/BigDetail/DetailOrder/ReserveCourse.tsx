import React from 'react'
import style from './style.module.css'
import { postReserveCourse } from '../../../../../../core/services/api/postAddCourseReserve'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'

const ReserveCourse = ({id}) => {
  const [isReserved, setIsReserved] = useGlobalState('isReserved');

  const reserveCourse = async () => {
    let res = await postReserveCourse(id)
    if(res.success === true){
      toast.success("دوره رزرو شد")
      setIsReserved("1")
    }
  }
  return (
    <>
    <Toaster />
        <div className={isReserved === "1" ? style.reserved : style.reserve} onClick={() => {
          isReserved && reserveCourse()
        }}>{isReserved === "1" ? "دوره رزرو شد" : "رزرو دوره"}</div>
    </>
  )
}

export {ReserveCourse}
import style from './Payment.module.css'
import { ReservedCourses } from '../Payment Items/Reserved Courses/Reserved Courses Holder/ReservedCourses'

const Payment = () => {
  return (
    <div className={style.payment}>
        <ReservedCourses />
    </div>
  )
}

export {Payment}
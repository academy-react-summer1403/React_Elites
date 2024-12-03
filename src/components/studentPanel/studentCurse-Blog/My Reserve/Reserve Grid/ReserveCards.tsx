import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Status } from './index/Teacher&Date&View/Status'
import { useGlobalState } from '../../../../../State/State'
import { useEffect, useState } from 'react'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { deleteCourseReserve } from '../../../../../core/services/api/deleteCourseReserve'
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const ReserveCards = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseDetail, setCourseDetail] = useState({})
  const [accept, setAccept] = useState("")

  const getCourseDetail = async () => {
    const Details = await getCourseById(props.id)
    setCourseDetail(Details)
    console.log(Details)
  }

  const deleteCourseReserveCall = async () => {
    let request = {id: props.reserveId}
    let s = await deleteCourseReserve(request)
    console.log(s)
    if(s.success === true){
      toast.success("عملیات با موفقیت انجام شد")
    }
  }

  useEffect(() => {
    getCourseDetail()
  }, [])
  return (
    <div className={style.holder}>
      <Toaster />
        <Image image={courseDetail.imageAddress} />
        <Title title={courseDetail.title} />
        <Teacher teacher={courseDetail.teacherName} />
        <Date date={courseDetail.startTime} />
        <Date date={courseDetail.endTime} />
        <Status status={courseDetail.isCourseUser}/>
        <div className={style.closeAndViewHolder}>
          <NavLink to={"/Course-Detail/" + props.id} className={style.View} data-theme={darkMode ? "view" : "lightMode"}></NavLink>
          <span className={style.Close} onClick={() => deleteCourseReserveCall()} ></span>
        </div>
    </div>
  )
}

export {ReserveCards}
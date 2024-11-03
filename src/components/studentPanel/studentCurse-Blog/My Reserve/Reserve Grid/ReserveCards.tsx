import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Status } from './index/Teacher&Date&View/Status'
import { useGlobalState } from '../../../../../State/State'
import { useEffect, useState } from 'react'
import { getCourseById } from '../../../../../core/services/api/courseById'

const ReserveCards = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [courseDetail, setCourseDetail] = useState([])
  const [accept, setAccept] = useState("")

  const getCourseDetail = async () => {
    const Details = await getCourseById(props.id)
    setCourseDetail(Details)
    if(props.accept === false){
      setAccept("تایید نشده")
    }
    else if(props.accept === true){
      setAccept("تایید شده")
    }
  }
  useEffect(() => {
    getCourseDetail()
  }, [])
  return (
    <div className={style.holder}>
        <Image image={courseDetail.imageAddress} />
        <Title title={courseDetail.title} />
        <Teacher teacher={courseDetail.teacherName} />
        <Date date={courseDetail.startTime} />
        <Date date={courseDetail.endTime} />
        <Status Status={accept}/>
        <div className={style.closeAndViewHolder}>
          <span className={style.View} data-theme={darkMode ? "view" : "lightMode"}></span>
          <span className={style.Close}></span>
        </div>
    </div>
  )
}

export {ReserveCards}
import { ReserveCards } from '../ReserveCards'
import style from './ReserveCardsListStyle.module.css'

const ReserveCardsList = ({userReserveCoursesObj}) => {

  return (
    <div className={style.holder}>
        {userReserveCoursesObj.map((item, index) => {
        return (
          <ReserveCards
            key={index}
            id={item.courseId}
            accept={item.accept}
          />
        )
      })}
    </div>
  )
}

export {ReserveCardsList}
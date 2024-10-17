import style from './ItemsHolder.module.css'
import { Image } from '../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/image'
import { Title } from '../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/title'
import { TeacherAndViewAndDateHolder } from './index/Teacher&Date&View/TeacherAndDateAndViewHolder'

const CardBlogs = (props) => {
  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title className={style.title} title={props.title} />
        <TeacherAndViewAndDateHolder teacher={props.teacher} view={props.view} date={props.date} />
    </div>
  )
}

export {CardBlogs}
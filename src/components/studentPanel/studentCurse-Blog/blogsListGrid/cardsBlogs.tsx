import style from './ItemsHolder.module.css'
import { Image } from '../../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/Image'
import { Title } from '../../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Level } from './index/Teacher&Date&View/Level'

const CardBlogs = (props) => {
  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title className={style.title} title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Date date={props.date} />
        <Level level={props.level}/>
        <span className={style.View}></span>
    </div>
  )
}

export {CardBlogs}
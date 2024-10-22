import style from './ItemsHolder.module.css'
import { Image } from '../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/image'
import { Title } from '../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/title'
import { NavLink } from "react-router-dom";

const CardBlogs = (props) => {
  return (
    
    <div className={style.holder}>
        <Image image={props.image} />
        <Title className={style.title} title={props.title} />
    </div>
  )
}

export {CardBlogs}
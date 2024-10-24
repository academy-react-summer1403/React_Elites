import style from './ItemsHolder.module.css'
import { Image } from '../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/image'
import { TitleAndCountHolder } from './index/TitleAndCountHolder'
import { NavLink } from "react-router-dom";

const CardBlogs = (props) => {
  return (
    
    <div className={style.holder}>
        <Image image={props.image} />
        <TitleAndCountHolder title={props.title} count={props.count} countN={props.countN} />
    </div>
  )
}

export {CardBlogs}
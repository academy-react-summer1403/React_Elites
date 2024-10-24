import style from './Title&courseHolder.module.css'
import { Title } from '../../../Landing/Content Landing/Courses Of The Weekend/CoursesItems/Items/title'
import { CourseCounts } from './courseCounts'
import { NewsCounts } from './newsCounts'
import { NavLink } from "react-router-dom";

const TitleAndCountHolder = (props) => {
  return (
    
    <div className={style.holder}>
        <Title className={style.title} title={props.title} />
        <CourseCounts className={style.title} count={props.count} />
        <NewsCounts className={style.title} countN={props.countN} />
    </div>
  )
}

export {TitleAndCountHolder}
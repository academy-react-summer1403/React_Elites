import { CardBlogs } from '../CoursesCard'
import style from './cardsBlogsListStyle.module.css'

const ListCardBlogs = ({data}) => {

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <CardBlogs
            key={index} 
            title={item.courseTitle}
            teacher={item.fullName}
            date={item.lastUpdate}
            image={item.tumbImageAddress}
            level={item.levelName}
            id={item.courseId}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}
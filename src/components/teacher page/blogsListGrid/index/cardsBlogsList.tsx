import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'

const ListCardBlogs = ({teacherList}) => {


  return (
    <div className={style.holder}>
        {teacherList.map((item, index) => {
        return (
          <CardBlogs 
            key={index}
            title={item.fullName}
            image={item.pictureAddress}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}
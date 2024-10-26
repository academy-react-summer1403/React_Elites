import { FavCoursesCards } from '../FavCoursesCards'
import style from './FavCoursesCardsListStyle.module.css'
import figmaCourse from '../../../../../../assets/Images/figmaBlog.png'
import JSBlog from '../../../../../../assets/Images/jsBlog.png'

const FavCoursesCardsList = () => {

  let data = [
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", level: "پیشرفته"},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"29 اردیبهشت 1403 " , view:"200", level: "پیشرفته"},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", level: "پیشرفته"},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"29 اردیبهشت 1403 " , view:"200", level: "پیشرفته"},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", level: "پیشرفته"},
  ]

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <FavCoursesCards
            title={item.title}
            teacher={item.teacher}
            date={item.date}
            image={item.image}
            level={item.level}
          />
        )
      })}
    </div>
  )
}

export {FavCoursesCardsList}
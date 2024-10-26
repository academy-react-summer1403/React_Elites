import { ReserveCards } from '../ReserveCards'
import style from './ReserveCardsListStyle.module.css'
import figmaCourse from '../../../../../../assets/Images/figmaBlog.png'
import JSBlog from '../../../../../../assets/Images/jsBlog.png'

const ReserveCardsList = () => {

  let data = [
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", status: "تایید نشده"},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"29 اردیبهشت 1403 " , view:"200", status: "تایید نشده"},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", status: "تایید نشده"},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"29 اردیبهشت 1403 " , view:"200", status: "تایید نشده"},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"29 اردیبهشت 1403 " , view:"200", status: "تایید نشده"},
  ]

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <ReserveCards
            title={item.title}
            teacher={item.teacher}
            date={item.date}
            image={item.image}
            Status={item.status}
          />
        )
      })}
    </div>
  )
}

export {ReserveCardsList}
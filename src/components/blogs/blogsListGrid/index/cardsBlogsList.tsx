import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import reactJs from '../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../assets/Images/figmaBlog.png'
import JSCourse from '../../../../assets/Images/reactBlog.png'
import JSBlog from '../../../../assets/Images/JSBlog.png'

const ListCardBlogs = () => {

  let data = [
    {title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"22 اردیبهشت 1403 " , view:"200"},
    {title: "فرق ری‌اکت با نکست جی‌اس چیست؟", teacher: "محسن اسفندیاری", image: JSCourse, date:"22 اردیبهشت 1403 " , view:"200"},
    {title: "فیگما یا ادوبی ایکس‌دی؟", teacher: "محمدحسین خلیل‌پور", image: figmaCourse, date:"22 اردیبهشت 1403 " , view:"200"},
    {title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟", teacher: "محمدحسین بحرالعلومی", image: JSBlog, date:"22 اردیبهشت 1403 " , view:"200"},
    {title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟", teacher: "محسن اسفندیاری", image: reactJs , date:"22 اردیبهشت 1403 " , view:"200"},
    {title: "فرق ری‌اکت با نکست جی‌اس چیست؟", teacher: "محمدحسین خلیل‌پور",  image: figmaCourse , date:"22 اردیبهشت 1403 " , view:"200"},
  ]

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <CardBlogs 
            title={item.title}
            teacher={item.teacher}
            view={item.view}
            date={item.date}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}
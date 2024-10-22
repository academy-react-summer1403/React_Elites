import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import figmaCourse from '../../../../assets/Images/Khalilpoor.png'
import bahr from '../../../../assets/Images/Bahr.jpg'
import esfandiary from '../../../../assets/Images/Esfandiary.png'

const ListCardBlogs = () => {

  let data = [
    { teacher: "محمدحسین بحرالعلومی", image: bahr,},
    { teacher: "محسن اسفندیاری", image: esfandiary,},
    { teacher: "محمدحسین خلیل‌پور", image: figmaCourse, },
    { teacher: "محمدحسین بحرالعلومی", image: bahr,},
    { teacher: "محسن اسفندیاری", image: esfandiary , },
    { teacher: "محمدحسین خلیل‌پور",  image: figmaCourse ,},
  ]

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <CardBlogs 
            title={item.teacher}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}
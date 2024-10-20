import React from 'react'
import style from './Holder.module.css'
import { ServicesItemsHolder } from '../OurServicesItems/ServicesItemsHolder/ServicesItemsHolder'
import { ServicesTitle } from '../OurServicesItems/ServicesItemsHolder/ServicesTitle'
import azmoon from '../../../../../assets/Images/azmoon.png'
import work from '../../../../../assets/Images/work.png'
import moshavere from '../../../../../assets/Images/moshavere.png'
import madrak from '../../../../../assets/Images/madrak.png'

const ServicesHolder = () => {
  let data = [
    {title: "آزمون ها", desc: "با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید", image: azmoon},
    {title: "مدرک معتبر", desc: "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید", image: madrak},
    {title: "فرصت‌های شغلی", desc: "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه", image: work},
    {title: "مشاوره 24 ساعته", desc: "مشاورین ما 24 ساعته جوابگو سوال های شما هستند", image: moshavere}
  ]

  return (
    <div className={style.holder}>
      <ServicesTitle />
      {data.map((item, index) => {
        return (
          <ServicesItemsHolder 
            key={index}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export {ServicesHolder}
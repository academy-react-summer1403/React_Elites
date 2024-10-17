import React from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import style from './Courses.module.css'
import reactJs from '../../../../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../../../../assets/Images/FigmaCourse.png'
import JSCourse from '../../../../../../../assets/Images/JSCourse.png'
import WebCourse from '../../../../../../../assets/Images/webCourse.png'

const CoursesHolder = () => {

  let data = [
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", price: "1،000،000 تومان", category: "طراحی", level: "پیشرفته", image: figmaCourse},
    {title: "دوره ری‌اکت جی‌اس", teacher: "محسن اسفندیاری", price: "تومان 4،500،000", category: "برنامه نویسی", level: "مقدماتی", image: reactJs},
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", price: "1،000،000 تومان", category: "طراحی", level: "پیشرفته", image: figmaCourse},
    {title: "دوره ری‌اکت جی‌اس", teacher: "محسن اسفندیاری", price: "تومان 4،500،000", category: "برنامه نویسی", level: "مقدماتی", image: reactJs},
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", price: "1،000،000 تومان", category: "طراحی", level: "پیشرفته", image: figmaCourse},
    {title: "دوره ری‌اکت جی‌اس", teacher: "محسن اسفندیاری", price: "تومان 4،500،000", category: "برنامه نویسی", level: "مقدماتی", image: reactJs},
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", price: "1،000،000 تومان", category: "طراحی", level: "پیشرفته", image: figmaCourse},
    {title: "دوره ری‌اکت جی‌اس", teacher: "محسن اسفندیاری", price: "تومان 4،500،000", category: "برنامه نویسی", level: "مقدماتی", image: reactJs},
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse}
  ]

  return (
    <div className={style.holder}>
        {data.map((item, index) => {
        return (
          <CoursesItemsHolder 
            title={item.title}
            teacher={item.teacher}
            price={item.price}
            category={item.category}
            level={item.level}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export {CoursesHolder}
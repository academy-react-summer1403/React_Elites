import React from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesTitle } from './CoursesTitle'
import style from './Courses.module.css'
import reactJs from '../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../assets/Images/FigmaCourse.png'
import JSCourse from '../../../../assets/Images/JSCourse.png'
import WebCourse from '../../../../assets/Images/webCourse.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoursesHolder = () => {

  let data = [
    {title: "دوره طراحی سایت", teacher: "محمدحسین بحرالعلومی", price: "500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: WebCourse},
    {title: "دوره جاوااسکریپت", teacher: "محمدحسین بحرالعلومی", price: "2،500،000 تومان", category: "برنامه نویسی", level: "پیشرفته", image: JSCourse},
    {title: "دوره فیگما", teacher: "محمدحسین خلیل‌پور", price: "1،000،000 تومان", category: "طراحی", level: "پیشرفته", image: figmaCourse},
    {title: "دوره ری‌اکت جی‌اس", teacher: "محسن اسفندیاری", price: "تومان 4،500،000", category: "برنامه نویسی", level: "مقدماتی", image: reactJs}
  ]
  const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1406,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1066,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={style.holder}>
        <CoursesTitle />
        <Slider className={style.slider} {...settings} >
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
      </Slider>
    </div>
  )
}

export {CoursesHolder}
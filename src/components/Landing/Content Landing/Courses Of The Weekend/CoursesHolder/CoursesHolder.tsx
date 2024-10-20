import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesTitle } from './CoursesTitle'
import style from './Courses.module.css'
import { Button } from '../CoursesItems/CoursesItemsHolder/Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CoursesHolder = ({courseList}) => {
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
          {courseList.map((item, index) => {
          return (
            <CoursesItemsHolder 
              key={index}
              title={item.title}
              teacher={item.teacherName}
              price={item.cost}
              category={item.statusName}
              level={item.levelName}
              image={item.tumbImageAddress}
            />
          )
        })}
      </Slider>
      <Button />
    </div>
  )
}

export {CoursesHolder}
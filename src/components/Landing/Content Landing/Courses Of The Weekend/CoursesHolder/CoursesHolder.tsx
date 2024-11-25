import React, { useState } from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesTitle } from './CoursesTitle'
import style from './Courses.module.css'
import { Button } from '../CoursesItems/CoursesItemsHolder/Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CoursesHolderSkeleton } from './CoursesHolderSkeleton'
import { PacmanLoader, PuffLoader, RiseLoader, ScaleLoader } from 'react-spinners'
import { ScaleControl } from 'react-map-gl'


const CoursesHolder = ({courseList, isLoading}) => {
  const ArrowRight = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${style.arrowRight} ${className}`}
        onClick={onClick}
      />
    );
  }

  const ArrowLeft = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${style.arrowLeft} ${className}`}
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
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
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
          slidesToShow: 1,
          fade: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      }
    ]
  };


  return (
    <div className={style.holder}>
        <CoursesTitle />
        <Slider className={style.slider} {...settings} >
          {isLoading && <PuffLoader />}
          {courseList.map((item, index) => {
          return (
            <>
            <CoursesItemsHolder 
              key={index}
              title={item.title}
              teacher={item.teacherName}
              price={item.cost}
              category={item.statusName}
              level={item.levelName}
              image={item.tumbImageAddress}
              id={item.courseId}
            />
            </>
          )
        })}
      </Slider>
      <Button />
    </div>
  )
}

export {CoursesHolder}
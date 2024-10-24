import React, { useEffect, useState } from 'react'
import style from './Blogs.module.css'
import { BlogItems } from '../BlogsItems/BlogItemsHolder/BlogItems'
import BlogTitle from './BlogTitle'
import { Button } from '../../Courses Of The Weekend/CoursesItems/CoursesItemsHolder/Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = ({topBlogs}) => {

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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1406,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1066,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={style.container}>
        <BlogTitle />
        <Slider  className={style.slider} {...settings} >
          {topBlogs.map((item, index) => {
              return(
                <BlogItems
                    key={index}
                    id={item.id}
                    image={item.currentImageAddressTumb}
                    title={item.title}
                    pub={item.addUserFullName}
                    views={item.currentView}
                />
              )
          })}
        </Slider>
        <Button />
    </div>
  )
}

export {Blogs}